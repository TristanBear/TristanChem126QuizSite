// Quiz questions sourced from:
//   Biosensors.pdf
//   Electroanalysis_Potentiometry.pdf
//   Electrogravimetric and coulometric methods.pdf
//   Voltammetry.pdf
// Each question: { q, choices: [4 strings], answer: index (0-3), explain, topic, source }

const QUESTIONS = [
  // ============ BIOSENSORS ============
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "What is a biosensor?",
    choices: [
      "A purely optical device that detects light from a sample",
      "An analytical device that combines a biological component with a physicochemical detector to detect an analyte",
      "A piece of laboratory glassware used to grow bacterial colonies",
      "A purely mechanical sensor that measures only mass changes in air"
    ],
    answer: 1,
    explain: "A biosensor combines a biological recognition element (bioreceptor) with a physicochemical detector (transducer) plus signal processing to detect an analyte."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "Which component of a biosensor is responsible for recognizing or binding the analyte?",
    choices: ["Transducer", "Signal processor", "Bioreceptor", "Display unit"],
    answer: 2,
    explain: "The bioreceptor is the biologically derived (or biomimic) material that interacts with the analyte. The transducer converts that interaction into a measurable signal."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "Catalytic biosensors typically use which kind of bioreceptor?",
    choices: ["Antibodies", "Enzymes", "Aptamers", "Whole cells with no chemistry"],
    answer: 1,
    explain: "Catalytic biosensors use enzymes (or other biocomponents) that recognize the analyte and transform it via a chemical reaction. Affinity biosensors use DNA, antibodies, aptamers, or MIPs."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "Which of the following is NOT listed as an advantage of enzymatic biosensors?",
    choices: [
      "Fairly easy to fabricate",
      "Do not require labelling",
      "Suitable for continuous analyte monitoring",
      "Highly resistant to thermal degradation and poisoning"
    ],
    answer: 3,
    explain: "Enzymatic biosensors are noted as being thermally labile and prone to poisoning — that's a disadvantage, not an advantage."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "Which characteristic of a biosensor refers specifically to its ability to detect a particular target analyte molecule?",
    choices: ["Sensitivity", "Linearity", "Selectivity", "Stability"],
    answer: 2,
    explain: "Selectivity is the bioreceptor's ability to detect a particular target. Sensitivity is the lowest concentration the sensor can detect."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "An immunosensor works by exploiting which interaction?",
    choices: [
      "Complementary base pairing of oligonucleotides",
      "Specific binding between an antibody and an antigen",
      "Catalytic turnover by an enzyme",
      "Resonance of surface electrons in metal films"
    ],
    answer: 1,
    explain: "Immunosensors rely on the highly specific interaction between an antibody and its antigen."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "What are aptamers?",
    choices: [
      "Synthetic polymers with cavities shaped for a target molecule",
      "Oligonucleic acid or peptide molecules that bind to a specific target",
      "Polyclonal antibodies harvested from animals",
      "Whole bacterial cells immobilized on an electrode"
    ],
    answer: 1,
    explain: "Aptamers are oligonucleic-acid or peptide molecules selected (via SELEX) to bind a specific target — sometimes called 'chemical antibodies'."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "Molecularly imprinted polymers (MIPs) are sometimes called \"plastic antibodies\" because they:",
    choices: [
      "Are produced from immunized animals",
      "Have pre-formed cavities of specific size, shape, and functional groups that fit a target molecule",
      "Glow when bound to an antigen",
      "Use enzymes to generate a signal"
    ],
    answer: 1,
    explain: "MIPs are synthetic polymers with templated cavities matching the target's shape, size, and functional groups — giving antibody-like selectivity without using biology."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "Which comparison of polyclonal vs monoclonal antibodies is correct?",
    choices: [
      "Monoclonal antibodies are cheaper and recognize multiple epitopes",
      "Polyclonal antibodies recognize only a single epitope per antigen",
      "Polyclonal antibodies are cheaper to produce but show more batch-to-batch variability",
      "Monoclonal antibody production requires no specialized training"
    ],
    answer: 2,
    explain: "Polyclonal antibodies are inexpensive, fast to produce, and require less skill — but they recognize multiple epitopes and vary batch-to-batch. Monoclonals are uniform, very specific, but expensive."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "In amperometric biosensors, the measured current is:",
    choices: [
      "Independent of analyte concentration",
      "Inversely proportional to analyte concentration",
      "Directly proportional to analyte concentration",
      "Proportional to the square of analyte concentration"
    ],
    answer: 2,
    explain: "In amperometry, a fixed potential drives the analyte's redox reaction; the resulting current is directly proportional to the analyte's concentration."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "Which of the following is the best transducer to use when you need to measure the total ion concentration of a solution rather than identify a specific ion?",
    choices: ["Potentiometric", "Amperometric", "Conductimetric", "Piezoelectric"],
    answer: 2,
    explain: "Conductimetry measures solution resistance and is not species selective — it's the right choice when you want overall ion concentration."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "Surface Plasmon Resonance (SPR) is best described as:",
    choices: [
      "A piezoelectric mass change at a quartz crystal",
      "Coherent electron oscillations at a metal/dielectric interface, excited by photons at resonance",
      "Total internal reflection in a glass fiber with no electrons involved",
      "Calorimetric heat release from an enzymatic reaction"
    ],
    answer: 1,
    explain: "SPR uses surface plasmons — coherent oscillations of electrons at the interface of two materials — excited when photon frequency matches the natural surface-electron oscillation frequency."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "A Quartz Crystal Microbalance (QCM) measures mass per unit area by detecting:",
    choices: [
      "Heat absorbed by the quartz crystal",
      "Change in resonant frequency of the quartz crystal",
      "Change in optical absorbance",
      "Surface plasmon angle"
    ],
    answer: 1,
    explain: "A QCM detects the change in the resonant frequency of a quartz crystal as material adsorbs onto it — the frequency shift is related to mass."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "Which technique relies on the difference in heat required to raise the temperature of a sample versus a reference?",
    choices: ["TGA", "DSC (Differential Scanning Calorimetry)", "SEM-EDS", "AFM"],
    answer: 1,
    explain: "DSC measures the difference in heat flow needed to keep sample and reference at the same temperature as it is varied — useful for phase transitions and thermal events."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "A key advantage of Isotope Dilution Analysis (IDA) is:",
    choices: [
      "It requires no mass spectrometer",
      "It needs quantitative recovery of the analyte for accurate results",
      "Loss of analyte during workup does not affect the result, provided isotopic equilibration is reached",
      "It cannot use stable isotopes, only radioactive ones"
    ],
    answer: 2,
    explain: "IDA is based on isotope ratios after a known 'spike' is added, so partial recovery during sample prep does not bias the result once isotopic equilibration occurs."
  },

  // ============ ELECTROANALYSIS / POTENTIOMETRY ============
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "In any electrochemical cell, oxidation occurs at the ____ and reduction at the ____.",
    choices: ["cathode; anode", "anode; cathode", "reference; auxiliary", "indicator; working"],
    answer: 1,
    explain: "Oxidation = anode, reduction = cathode. This is true for both galvanic and electrolytic cells."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "Which statement about a galvanic (voltaic) cell is true?",
    choices: [
      "It uses electrical energy to drive a nonspontaneous reaction",
      "A spontaneous redox reaction produces electricity",
      "There is no anode or cathode",
      "It always requires an external power supply"
    ],
    answer: 1,
    explain: "Galvanic cells convert chemical energy of a spontaneous redox reaction into electrical energy. Electrolytic cells do the reverse."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "By convention, in a short-hand cell notation such as Zn|ZnSO4||CuSO4|Cu, the anode is written on the:",
    choices: ["Right", "Left", "Either side — the convention does not specify", "Top"],
    answer: 1,
    explain: "Convention places the anode on the left and the cathode on the right, with || marking the salt bridge."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "What potential is assigned to the Standard Hydrogen Electrode (SHE) by definition?",
    choices: ["+1.000 V", "+0.241 V", "0.000 V", "−0.799 V"],
    answer: 2,
    explain: "The SHE is assigned 0.000 V by convention; all other standard electrode potentials are reported relative to it."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "A standard electrode potential (E°) listed in tables refers exclusively to:",
    choices: [
      "An oxidation half-reaction",
      "A reduction half-reaction",
      "The overall cell reaction",
      "An adsorption process"
    ],
    answer: 1,
    explain: "By convention, tabulated standard electrode potentials always refer to reduction half-reactions."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "Potentiometry is described as a quantitative technique mainly because:",
    choices: [
      "It uses very large currents that fully consume the analyte",
      "Only negligible current flows, so the solution's composition is not changed during measurement",
      "It always uses a dropping mercury electrode",
      "It can only be applied to gases"
    ],
    answer: 1,
    explain: "Potentiometry measures the cell potential at essentially zero current, so the analyte is not consumed and its concentration is preserved."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "Which is the best instrument to use when you need to control the potential of the working electrode in a 3-electrode cell?",
    choices: ["Galvanostat", "Potentiometer", "Potentiostat", "Wheatstone bridge"],
    answer: 2,
    explain: "A potentiostat actively controls the working electrode's potential vs a reference electrode. A galvanostat controls current; a potentiometer measures potential at zero current."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "The liquid-junction potential (Ej) arises because:",
    choices: [
      "The two solutions are at different temperatures",
      "Cations and anions at the boundary of two different electrolytes migrate at different rates",
      "The working electrode is poisoned",
      "The reference electrode has been short-circuited"
    ],
    answer: 1,
    explain: "Ej develops where two electrolytes of different composition meet because the cations and anions diffuse across at different rates."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "Why is saturated KCl such a good salt-bridge electrolyte?",
    choices: [
      "K+ and Cl- have very similar mobilities, which minimizes the liquid-junction potential",
      "It is the cheapest available salt",
      "It is non-toxic and edible",
      "It is the only ionic compound that dissolves in water"
    ],
    answer: 0,
    explain: "K+ and Cl- have nearly equal migration speeds, so a saturated-KCl salt bridge minimizes the liquid-junction potential."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "Which is a property of an IDEAL reference electrode?",
    choices: [
      "Its potential changes strongly with analyte concentration",
      "Its potential is accurately known, constant, and insensitive to the analyte solution",
      "It requires a large current to operate",
      "It must be the same metal as the analyte"
    ],
    answer: 1,
    explain: "An ideal reference electrode has a known, constant potential, insensitive to the analyte, and is rugged and easy to use while passing essentially no current."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "Which of the following is the best reference electrode for routine bench potentiometric measurements?",
    choices: [
      "Standard Hydrogen Electrode (SHE)",
      "Saturated calomel electrode (SCE) or Ag/AgCl",
      "Glass pH electrode",
      "Dropping mercury electrode"
    ],
    answer: 1,
    explain: "SCE and Ag/AgCl are the workhorse reference electrodes for day-to-day measurements. The SHE works in principle but is inconvenient and a fire hazard."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "An 'electrode of the first kind' responds to:",
    choices: [
      "Anions via formation of an insoluble salt",
      "Its own metal cation in solution (e.g. Cu in Cu2+)",
      "Any ion in solution equally",
      "Only neutral gas molecules"
    ],
    answer: 1,
    explain: "An electrode of the first kind is a pure metal in equilibrium with its own cation — e.g. Cu/Cu2+, Ag/Ag+."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "In a pH glass membrane electrode, the membrane is made of silicate glass and selectively responds primarily to:",
    choices: ["Na+", "K+", "H+", "Cl-"],
    answer: 2,
    explain: "The hydrated silica gel layer at the glass surface ion-exchanges H+ with Na+, giving a potential that depends on the H+ activity of the solution."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "A selectivity coefficient K(A,I) for an ion-selective electrode tells you that the membrane is GOOD at selecting A over interferent I when:",
    choices: [
      "K(A,I) >> 1",
      "K(A,I) = 1",
      "K(A,I) << 1",
      "K(A,I) is exactly 0.5"
    ],
    answer: 2,
    explain: "A small K(A,I) means the electrode responds much more strongly to A than to I — i.e. good selectivity for the analyte."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "Which of the following is the best electrode to use for selective measurement of fluoride ion in solution?",
    choices: [
      "A pH glass electrode",
      "A LaF3 single-crystal membrane electrode",
      "A platinum inert electrode",
      "A copper electrode of the first kind"
    ],
    answer: 1,
    explain: "A LaF3 single-crystal membrane is the classic ion-selective electrode for F- (crystalline membrane type)."
  },

  // ============ ELECTROGRAVIMETRY / COULOMETRY ============
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "Compared to potentiometry, electrogravimetry and coulometry differ because:",
    choices: [
      "They draw essentially zero current",
      "They involve electrolysis and convert the analyte completely to a single product",
      "They cannot determine concentration",
      "They are non-faradaic methods"
    ],
    answer: 1,
    explain: "Both electrogravimetry and coulometry use electrolysis to fully oxidize or reduce the analyte to a single product of known composition — unlike potentiometry, which uses negligible current."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "Which of the following best distinguishes electrogravimetry from coulometry?",
    choices: [
      "Electrogravimetry weighs the deposited product on the electrode; coulometry measures the charge needed to complete the electrolysis",
      "Coulometry weighs the electrode; electrogravimetry measures charge",
      "Both methods measure mass — they are identical",
      "Coulometry uses light; electrogravimetry uses heat"
    ],
    answer: 0,
    explain: "In electrogravimetry, the analyte is plated onto a tared electrode and weighed. In coulometry, the total charge passed during exhaustive electrolysis is measured (Q = nFN)."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "The applied potential needed in electrogravimetry/coulometry is usually larger than the theoretical cell potential to overcome:",
    choices: [
      "Only the iR drop",
      "Only concentration polarization",
      "Only kinetic polarization",
      "iR drop plus concentration polarization plus kinetic polarization (overvoltages)"
    ],
    answer: 3,
    explain: "Applied potential must counter the iR drop in the cell as well as concentration and kinetic polarization overvoltages."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "Concentration polarization occurs when:",
    choices: [
      "The electrons transfer too quickly for the cell to handle",
      "Reactant or product species cannot reach or leave the electrode surface fast enough to sustain the current",
      "The reference electrode short-circuits",
      "There is no analyte present at all"
    ],
    answer: 1,
    explain: "Concentration polarization is a mass-transport limitation — diffusion/migration/convection isn't fast enough to maintain the desired current."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "Which of the following is NOT a mass-transport mechanism in an electrochemical cell?",
    choices: ["Diffusion", "Migration", "Convection", "Polarization"],
    answer: 3,
    explain: "Diffusion, migration, and convection are the three mass-transport modes. Polarization is the deviation of electrode potential from its equilibrium, not a mass-transport mode."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "Which of these is the best electrode configuration for accurate potential control in electrogravimetry?",
    choices: [
      "A single working electrode only",
      "A two-electrode cell (working + counter)",
      "A three-electrode cell (working + reference + counter/auxiliary)",
      "Four working electrodes in parallel"
    ],
    answer: 2,
    explain: "A three-electrode cell lets the auxiliary electrode carry the current while the reference electrode (no current) provides a stable potential to which the working electrode is controlled — no iR drop on the reference."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "Faraday's law in coulometry states Q = nFN. What does N represent?",
    choices: [
      "Number of cells in series",
      "Moles of analyte",
      "Cell potential in volts",
      "Mass of the electrode"
    ],
    answer: 1,
    explain: "Q = nFN where n = electrons per mole, F = Faraday's constant (96 487 C/mol), and N = moles of analyte."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "One faraday equals:",
    choices: [
      "1 ampere × 1 hour",
      "1 mole of electrons, i.e. 96 487 C",
      "1 mole of analyte regardless of n",
      "1 coulomb"
    ],
    answer: 1,
    explain: "1 faraday = 1 mole of electrons = 96 487 C — the charge associated with one equivalent of chemical change."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "In controlled-current (amperostatic) coulometry, the total charge for a constant current i over time t is:",
    choices: ["Q = i / t", "Q = i × t", "Q = i × t^2", "Q = i + t"],
    answer: 1,
    explain: "At constant current, Q = i × t. For variable current you integrate i(t) over the electrolysis time."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "Which of the following is the best technique to use to titrate a sample with an unstable titrant such as freshly generated Br2?",
    choices: [
      "Classical volumetric titration with a buret",
      "Controlled-current coulometric titration generating the titrant in situ",
      "Electrogravimetry",
      "Potentiometry without current"
    ],
    answer: 1,
    explain: "A coulometric titration generates the titrant electrochemically in situ from a stable precursor (e.g. Br- → Br2), so unstable reagents never have to be stored or standardized."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "A stated advantage of coulometric methods is that:",
    choices: [
      "They require a standardized titrant solution before use",
      "They are insensitive and only work for large samples",
      "No titrant standardization is needed and very small samples can be analyzed",
      "They can never use unstable titrants"
    ],
    answer: 2,
    explain: "Coulometric methods don't need a standardized titrant (charge is the standard), are very sensitive, and can use otherwise-unstable reagents generated on demand."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "Karl Fischer water determination by coulometry relies on:",
    choices: [
      "Electrochemical generation of iodine in situ, with H2O quantified from the total charge passed",
      "Weighing the water collected on a cold electrode",
      "Measuring the pH change as water reacts",
      "Surface plasmon resonance of water films"
    ],
    answer: 0,
    explain: "In coulometric Karl Fischer, I2 is generated electrochemically in situ to react with water; the moles of water are calculated from the total charge passed (1 mg H2O ≈ 10.72 C)."
  },

  // ============ VOLTAMMETRY ============
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "Voltammetry is best defined as:",
    choices: [
      "Measuring potential at zero current",
      "Measuring current as a function of an applied (time-varying) potential at a working electrode",
      "Weighing material deposited on an electrode",
      "Measuring color change with applied potential"
    ],
    answer: 1,
    explain: "Voltammetry applies a time-dependent potential to a working electrode and records the resulting current — current vs. potential."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "Which of these correctly contrasts voltammetry with potentiometry?",
    choices: [
      "Voltammetry uses no current; potentiometry uses large currents",
      "Voltammetry promotes concentration polarization with minimal analyte consumption; potentiometry uses ~zero current with no significant reaction",
      "Both methods convert all of the analyte to product",
      "Both methods are non-faradaic"
    ],
    answer: 1,
    explain: "Voltammetry is run under conditions that promote concentration polarization (so current depends on mass transport of analyte) and consumes only a tiny fraction of analyte. Potentiometry is at zero current with no significant reaction."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "Amperometry differs from voltammetry in that:",
    choices: [
      "The potential is scanned continuously",
      "A constant potential is applied and current is recorded as a function of time (no voltammogram)",
      "It uses no working electrode",
      "Current is held constant"
    ],
    answer: 1,
    explain: "Amperometry applies a fixed potential and measures the current vs time — because potential is not varied, there is no voltammogram."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "Polarography is a subclass of voltammetry that uses:",
    choices: [
      "A glassy carbon working electrode",
      "A platinum disk working electrode",
      "A liquid mercury working electrode whose surface is renewed (DME or SMDE)",
      "A copper rod working electrode"
    ],
    answer: 2,
    explain: "Polarography uses a dropping mercury electrode (DME) or static mercury drop electrode (SMDE) — a liquid Hg working electrode with a continually refreshed surface."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "A major advantage of mercury as a working electrode is:",
    choices: [
      "It cannot dissolve any metals",
      "It has a high overpotential for H+ reduction, allowing very negative potentials (down to ~-2 V vs SCE in base)",
      "It produces no faradaic current",
      "It is solid at room temperature so it does not move"
    ],
    answer: 1,
    explain: "Hg has a high overpotential for the reduction of H3O+ to H2, opening a wide negative potential window (~ -1 V acidic, ~ -2 V basic vs SCE). It also dissolves many metals (amalgam formation) and the surface can be renewed."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "Which of the following is the best working electrode to use for determining Zn2+ in acidic solution by reduction?",
    choices: [
      "Platinum (Pt)",
      "Mercury (Hg)",
      "Gold (Au)",
      "Glassy carbon"
    ],
    answer: 1,
    explain: "Zn2+/Zn lies at -0.76 V — on Pt, H+ reduction would dominate first. Mercury's high H+ overpotential lets Zn be reduced cleanly, so Hg is the right choice."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "In a voltammogram, a cathodic current at the working electrode corresponds to:",
    choices: [
      "Oxidation of the analyte, sign negative",
      "Reduction of the analyte, sign positive",
      "No reaction at all",
      "Adsorption only"
    ],
    answer: 1,
    explain: "By the convention given, a cathodic (reduction) current is positive; an anodic (oxidation) current is negative."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "The limiting current (il) on a voltammogram is reached when:",
    choices: [
      "The reaction stops entirely",
      "The thickness of the diffusion layer remains constant and current is mass-transport limited",
      "The reference electrode fails",
      "The applied potential goes to zero"
    ],
    answer: 1,
    explain: "il is the plateau current that is reached when the diffusion layer thickness becomes constant, so the rate of analyte arrival (and hence current) is limited by mass transport: il = k·CA."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "The half-wave potential (E1/2) of a reversible voltammetric wave is:",
    choices: [
      "Equal to zero by definition",
      "Approximately equal to the standard-state potential and characteristic of the analyte",
      "Always equal to +0.5 V",
      "Only relevant for irreversible reactions"
    ],
    answer: 1,
    explain: "For a reversible redox couple, E1/2 ≈ E° (or E°') of the couple — it provides qualitative ID, while il provides quantitative concentration via il = k·CA."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "An electrochemically reversible reaction in voltammetry is one in which:",
    choices: [
      "Electron transfer kinetics are very slow",
      "Electron transfer kinetics are fast enough that the Nernst equation is obeyed at the electrode surface",
      "No current flows",
      "Only adsorption occurs"
    ],
    answer: 1,
    explain: "When electron-transfer kinetics are fast, the surface concentrations follow Nernst — the reaction is called electrochemically reversible. Slow kinetics give irreversible behavior."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "What is the main advantage of differential pulse polarography (DPP) over normal pulse polarography?",
    choices: [
      "It is faster but less sensitive",
      "Sampling current twice per cycle subtracts background charging current, enhancing sensitivity and resolution between similar potentials",
      "It uses no pulses at all",
      "It eliminates the need for a working electrode"
    ],
    answer: 1,
    explain: "DPP measures current just before and at the end of each potential pulse, subtracting the two — this rejects capacitive charging current and improves sensitivity and discrimination between analytes with similar E1/2."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "Square-wave polarography (SWV) is favored over slower pulse techniques mainly because:",
    choices: [
      "It has poor sensitivity",
      "Its very short cycle time (~5 ms) gives high speed and high sensitivity",
      "It cannot resolve analytes with similar potentials",
      "It uses no potentiostat"
    ],
    answer: 1,
    explain: "SWV uses a much shorter cycle (~5 ms vs ~1 s for normal/diff pulse), so analyses are much faster while still offering high sensitivity through difference-current measurement."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "Anodic stripping voltammetry (ASV) achieves very low detection limits because it:",
    choices: [
      "Uses no preconcentration step",
      "First electrolytically deposits (preconcentrates) the analyte onto the electrode, then strips it off by an anodic scan",
      "Heats the sample to boiling first",
      "Uses optical, not electrochemical, detection"
    ],
    answer: 1,
    explain: "ASV is a two-step technique: a controlled-potential electrolysis preconcentrates the analyte into/onto the electrode, then an anodic potential scan strips it off and gives a large signal — yielding ppb-level detection limits."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "Which of the following is the best voltammetric technique to use for studying redox reaction mechanisms, reversibility, and intermediates?",
    choices: [
      "Amperometry at fixed potential",
      "Cyclic voltammetry (CV)",
      "Conductimetry",
      "Karl Fischer titration"
    ],
    answer: 1,
    explain: "CV scans the potential forward and backward, showing both oxidation and reduction features — making it the standard tool for probing redox mechanisms, reversibility, kinetics, and adsorption at the electrode."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "In adsorptive stripping voltammetry, the deposition step is different from ASV in that:",
    choices: [
      "Deposition occurs by adsorption to the electrode surface, NOT by electrolysis",
      "Deposition uses a much higher current than ASV",
      "There is no working electrode involved",
      "The technique cannot be used for trace analysis"
    ],
    answer: 0,
    explain: "Adsorptive stripping voltammetry preconcentrates the analyte by adsorption (often after complexation), not by electrolysis as in ASV — useful for organics and metal complexes that adsorb strongly."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "Which of the following is the best technique to use to measure dissolved O2 continuously at a fixed potential (e.g. a Clark-type oxygen sensor)?",
    choices: [
      "Cyclic voltammetry",
      "Amperometry",
      "Stripping voltammetry",
      "Coulometric titration"
    ],
    answer: 1,
    explain: "A Clark-type O2 sensor applies a fixed potential and measures steady-state current proportional to dissolved O2 — that is amperometry."
  }
];

// Expose globally for the browser
if (typeof window !== "undefined") {
  window.QUESTIONS = QUESTIONS;
}
