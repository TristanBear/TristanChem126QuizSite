// Quiz application logic.
// Depends on window.QUESTIONS from questions.js

(function () {
  const startScreen = document.getElementById("start-screen");
  const quizScreen = document.getElementById("quiz-screen");
  const resultsScreen = document.getElementById("results-screen");

  const topicSelect = document.getElementById("topic-select");
  const countSelect = document.getElementById("count-select");
  const shuffleChoicesEl = document.getElementById("shuffle-choices");
  const bankInfo = document.getElementById("bank-info");

  const startBtn = document.getElementById("start-btn");
  const quitBtn = document.getElementById("quit-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");

  const progressLabel = document.getElementById("progress-label");
  const scoreLabel = document.getElementById("score-label");
  const progressFill = document.getElementById("progress-fill");
  const topicTag = document.getElementById("topic-tag");
  const questionText = document.getElementById("question-text");
  const choicesEl = document.getElementById("choices");
  const explainEl = document.getElementById("explain");
  const finalScoreEl = document.getElementById("final-score");
  const finalBreakdownEl = document.getElementById("final-breakdown");
  const reviewList = document.getElementById("review-list");

  // Defensive: questions present?
  if (!window.QUESTIONS || !Array.isArray(window.QUESTIONS) || window.QUESTIONS.length === 0) {
    document.body.innerHTML = "<p style='color:#fff;padding:40px;font-family:sans-serif'>questions.js did not load. Check the network tab.</p>";
    return;
  }

  const BANK = window.QUESTIONS;
  const TOPICS = ["All topics", ...Array.from(new Set(BANK.map(q => q.topic)))];

  // Populate topic select
  for (const t of TOPICS) {
    const opt = document.createElement("option");
    opt.value = t;
    opt.textContent = t;
    topicSelect.appendChild(opt);
  }
  bankInfo.textContent = `${BANK.length} questions in the bank across ${TOPICS.length - 1} topics.`;

  // State
  let session = null;

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function buildSession(topic, count, shuffleChoices) {
    let pool = topic === "All topics" ? BANK : BANK.filter(q => q.topic === topic);
    pool = shuffle(pool);
    if (count > 0) pool = pool.slice(0, Math.min(count, pool.length));

    // Each item carries its own choice ordering so we can show consistent letters
    const items = pool.map(orig => {
      const idxs = orig.choices.map((_, i) => i);
      const order = shuffleChoices ? shuffle(idxs) : idxs;
      const displayed = order.map(i => orig.choices[i]);
      const answerIdx = order.indexOf(orig.answer);
      return {
        topic: orig.topic,
        source: orig.source,
        q: orig.q,
        choices: displayed,
        answer: answerIdx,
        explain: orig.explain,
        userPick: null,        // index in displayed choices
        correct: null
      };
    });

    return { items, current: 0, score: 0 };
  }

  function show(el) {
    [startScreen, quizScreen, resultsScreen].forEach(s => s.classList.add("hidden"));
    el.classList.remove("hidden");
  }

  function renderQuestion() {
    const item = session.items[session.current];
    progressLabel.textContent = `Question ${session.current + 1} of ${session.items.length}`;
    scoreLabel.textContent = `Score: ${session.score}`;
    progressFill.style.width = `${(session.current / session.items.length) * 100}%`;

    topicTag.textContent = item.topic;
    questionText.textContent = item.q;
    choicesEl.innerHTML = "";
    const letters = ["A", "B", "C", "D", "E", "F"];

    item.choices.forEach((text, i) => {
      const btn = document.createElement("button");
      btn.className = "choice";
      btn.innerHTML = `<span class="letter">${letters[i]}</span><span>${text}</span>`;
      btn.addEventListener("click", () => onPick(i, btn));
      choicesEl.appendChild(btn);
    });

    explainEl.classList.add("hidden");
    explainEl.innerHTML = "";
    nextBtn.classList.add("hidden");
  }

  function onPick(pickedIdx, btnEl) {
    const item = session.items[session.current];
    if (item.userPick !== null) return; // already answered

    item.userPick = pickedIdx;
    item.correct = (pickedIdx === item.answer);
    if (item.correct) session.score += 1;

    const buttons = Array.from(choicesEl.children);
    buttons.forEach((b, i) => {
      b.classList.add("disabled");
      if (i === item.answer) b.classList.add("correct");
      else if (i === pickedIdx) b.classList.add("incorrect");
      else b.classList.add("dim");
    });

    // Build explain panel
    const correctLabel = item.correct ? "Correct" : "Not quite";
    explainEl.innerHTML = `
      <strong>${correctLabel}.</strong>
      ${item.explain}
      <span class="src">Source: ${item.source}</span>
    `;
    explainEl.classList.remove("hidden");

    scoreLabel.textContent = `Score: ${session.score}`;
    nextBtn.classList.remove("hidden");
    nextBtn.textContent = (session.current + 1 === session.items.length) ? "See results" : "Next →";
  }

  function next() {
    if (session.current + 1 >= session.items.length) {
      finish();
      return;
    }
    session.current += 1;
    renderQuestion();
  }

  function finish() {
    const total = session.items.length;
    const pct = total === 0 ? 0 : Math.round((session.score / total) * 100);
    finalScoreEl.textContent = `${session.score} / ${total}  (${pct}%)`;

    // Topic breakdown
    const byTopic = {};
    for (const item of session.items) {
      const t = item.topic;
      if (!byTopic[t]) byTopic[t] = { ok: 0, tot: 0 };
      byTopic[t].tot += 1;
      if (item.correct) byTopic[t].ok += 1;
    }
    const parts = Object.entries(byTopic).map(([t, v]) => `${t}: ${v.ok}/${v.tot}`);
    finalBreakdownEl.textContent = parts.join("  •  ");

    // Review list
    reviewList.innerHTML = "";
    session.items.forEach((item, i) => {
      const div = document.createElement("div");
      div.className = "review-item" + (item.correct ? " correct" : "");
      const yourTxt = item.userPick === null ? "(skipped)" : item.choices[item.userPick];
      div.innerHTML = `
        <div class="q">${i + 1}. ${item.q}</div>
        <div class="your"><strong>Your answer:</strong> ${yourTxt}</div>
        <div class="right"><strong>Correct:</strong> ${item.choices[item.answer]}</div>
        <div class="muted" style="margin-top:6px">${item.explain}</div>
      `;
      reviewList.appendChild(div);
    });

    show(resultsScreen);
  }

  startBtn.addEventListener("click", () => {
    const topic = topicSelect.value;
    const count = parseInt(countSelect.value, 10);
    const shuffleChoices = shuffleChoicesEl.checked;
    session = buildSession(topic, count, shuffleChoices);
    if (session.items.length === 0) {
      alert("No questions match that selection.");
      return;
    }
    show(quizScreen);
    renderQuestion();
  });

  nextBtn.addEventListener("click", next);

  quitBtn.addEventListener("click", () => {
    if (confirm("Quit this quiz? Your progress will be lost.")) {
      session = null;
      show(startScreen);
    }
  });

  restartBtn.addEventListener("click", () => {
    show(startScreen);
  });
})();
