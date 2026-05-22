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
  },

  // ============ MORE BIOSENSORS ============
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "A complete biosensor system consists of three main components. Which is NOT one of them?",
    choices: ["Bioreceptor", "Transducer", "Signal processor", "Mass spectrometer"],
    answer: 3,
    explain: "A biosensor combines a bioreceptor (recognition), a transducer (detector element), and a signal processor (display) — a mass spectrometer is a separate analytical instrument, not part of the biosensor architecture."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "In aptamer development, SELEX stands for:",
    choices: [
      "Selective Electrochemistry Experiment",
      "Systematic Evolution of Ligands by Exponential enrichment",
      "Single-Electron Ligand Excitation",
      "Solid Electrode Liquid Exchange"
    ],
    answer: 1,
    explain: "SELEX (Systematic Evolution of Ligands by Exponential enrichment) is the iterative in vitro selection process used to identify aptamers from random oligonucleotide pools."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "For an evanescent-wave optical biosensor to operate, the light at the interface must satisfy:",
    choices: [
      "θ < θc, so the light is transmitted through the interface",
      "θ > θc, so total internal reflection occurs and an evanescent field probes the sample",
      "The Brewster angle condition",
      "Bragg diffraction"
    ],
    answer: 1,
    explain: "Evanescent-wave biosensors rely on total internal reflection (θ > θc); only the evanescent field that extends a short distance into the lower-index medium interrogates the sample."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "Which transducer category does a Quartz Crystal Microbalance (QCM) belong to?",
    choices: ["Optical", "Mechanical / gravimetric", "Electrochemical", "Calorimetric"],
    answer: 1,
    explain: "QCMs are mechanical (gravimetric) transducers — they sense mass per unit area via shifts in the quartz crystal's resonant frequency, alongside piezoelectric and magnetoelastic devices."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "Which of the following is the best transducer to use for detecting tiny mass changes at a surface (e.g. specific protein binding)?",
    choices: [
      "Conductimetric",
      "Quartz crystal microbalance (QCM) / piezoelectric",
      "Potentiometric",
      "Thermal"
    ],
    answer: 1,
    explain: "Piezoelectric / QCM transducers detect mass adsorbed on the crystal surface via a frequency change — ideal for thin-layer binding events."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "A microcantilever biosensor detects analyte binding primarily by:",
    choices: [
      "A color change at the tip",
      "Bending of the cantilever (surface stress) or a shift in its resonance frequency on binding",
      "Production of light at the tip",
      "Heat generated at the support"
    ],
    answer: 1,
    explain: "Microcantilevers act as nanomechanical transducers — analyte binding either bends the cantilever via surface stress, or adds mass that shifts its resonance frequency."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "Which best describes the role of a lateral flow biosensor (LFB)?",
    choices: [
      "A laboratory potentiostat for continuous monitoring",
      "A disposable, capillary-driven strip for rapid point-of-care testing (e.g. pregnancy tests, COVID lateral-flow strips)",
      "A high-resolution mass spectrometer",
      "A surface plasmon resonance instrument"
    ],
    answer: 1,
    explain: "Lateral flow biosensors are paper/membrane strips that wick fluid by capillary action to a recognition zone — used for rapid point-of-care diagnostics."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "Electrochemical impedance spectroscopy in a biosensor measures:",
    choices: [
      "Only the steady DC current",
      "The opposition (impedance) to an applied AC signal as a function of frequency",
      "The mass of the electrode coating",
      "The heat released by binding"
    ],
    answer: 1,
    explain: "Impedance biosensors apply a small AC perturbation and measure the impedance versus frequency — sensitive to interfacial changes (binding, layer formation) at the electrode."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "Which optical biosensing technique uses light produced directly by a chemical reaction (no external excitation source)?",
    choices: ["Surface plasmon resonance", "Chemiluminescence", "Fluorescence", "Evanescent-wave absorption"],
    answer: 1,
    explain: "Chemiluminescent biosensors detect light emitted by a chemical (often enzyme-catalyzed) reaction — no excitation light is required, which keeps backgrounds low."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "DSC and TGA are both thermal techniques. What does TGA specifically measure?",
    choices: [
      "Heat capacity change of the sample",
      "Mass change of the sample as temperature is varied",
      "Refractive index change",
      "Electrochemical potential"
    ],
    answer: 1,
    explain: "Thermogravimetric Analysis (TGA) records the mass of a sample as temperature is ramped — useful for studying decomposition, dehydration, oxidation. DSC measures heat-flow differences."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "Atomic Force Microscopy (AFM) produces images by:",
    choices: [
      "Bombarding the sample with high-energy electrons",
      "Sensing the force between a sharp tip and the sample as it rasters across the surface",
      "Measuring X-ray emission energies",
      "Detecting absorbed UV light"
    ],
    answer: 1,
    explain: "AFM scans a sharp tip over the surface and senses tip–sample forces (typically via cantilever deflection), giving nanoscale topography of conducting or insulating samples."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "Combined SEM–EDS analysis provides:",
    choices: [
      "Mass spectra of dissolved metals only",
      "High-resolution surface imaging plus elemental composition (from characteristic X-rays)",
      "pH titration curves",
      "Refractive-index profiles"
    ],
    answer: 1,
    explain: "SEM gives morphology via electron imaging; EDS uses characteristic X-rays emitted under electron beam excitation to identify and roughly quantify the elements present."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "Flow Injection Analysis (FIA) is best described as:",
    choices: [
      "A spectroscopic technique using flame atomization",
      "A continuous-flow technique where small sample plugs are injected into a flowing carrier stream and detected downstream",
      "A potentiometric titration",
      "A type of X-ray imaging"
    ],
    answer: 1,
    explain: "FIA is a continuous-flow method: a small, reproducible sample volume is injected into a non-segmented carrier stream and merges with reagents before reaching a flow-through detector."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "Compared with stable IDA, radioactive IDA:",
    choices: [
      "Uses radioisotopes as tracers and quantifies the analyte from specific activity before vs after dilution",
      "Avoids the use of any tracer",
      "Is the more modern and safer approach",
      "Uses only ICP-MS for detection"
    ],
    answer: 0,
    explain: "Radioactive IDA uses radioisotope spikes and tracks the change in specific activity caused by dilution with the unknown. Stable IDA (with MS) is the more modern, safer default."
  },
  {
    topic: "Biosensors",
    source: "Biosensors.pdf",
    q: "The advantage of nanomaterial-based biosensors over conventional bulk-electrode biosensors comes mainly from:",
    choices: [
      "Their much smaller surface-to-volume ratio",
      "Their high surface-to-volume ratio, often enhanced electron transfer, and improved sensitivity",
      "An inability to immobilize biomolecules on them",
      "Being chemically inert in every solvent"
    ],
    answer: 1,
    explain: "Nanomaterials (CNTs, AuNPs, graphene, etc.) provide a very high surface-to-volume ratio, often promote electron transfer, and allow novel immobilization strategies — boosting sensitivity and lowering detection limits."
  },

  // ============ MORE POTENTIOMETRY ============
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "In the Nernst equation written at 25 °C as E = E° − (0.0592/n) log Q, what does n represent?",
    choices: [
      "The number of moles of analyte",
      "The number of electrons transferred in the half-reaction",
      "Avogadro's number",
      "The pH of the solution"
    ],
    answer: 1,
    explain: "n is the number of electrons transferred per mole in the half-reaction. The 0.0592 V comes from 2.303·RT/F at 25 °C."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "Which of the following statements about standard electrode potentials (E°) is FALSE?",
    choices: [
      "E° is temperature dependent",
      "E° refers exclusively to a reduction half-reaction",
      "E° depends on the number of moles of reactant shown in the equation",
      "A positive E° means the half-reaction is spontaneous versus the SHE"
    ],
    answer: 2,
    explain: "E° is INDEPENDENT of the number of moles written in the balanced half-reaction — it is an intensive quantity. The other three statements are correctly listed properties."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "Substituting concentration for activity in a Nernst-equation calculation introduces error that is worst:",
    choices: [
      "At very low temperature",
      "At high ionic strength",
      "At infinite dilution",
      "When the analyte is colorless"
    ],
    answer: 1,
    explain: "Concentration ≈ activity is a good approximation only in very dilute solutions; at high ionic strength activity coefficients deviate strongly from 1."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "The relationship between the cell potential E and the Gibbs free energy of the cell reaction is:",
    choices: ["ΔG = +nFE", "ΔG = −nFE", "ΔG = nF/E", "ΔG = E/(nF)"],
    answer: 1,
    explain: "ΔG = −nFE. A spontaneous reaction (negative ΔG) corresponds to a positive cell potential."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "Which instrument is designed to control the CURRENT through an electrochemical cell rather than the potential?",
    choices: ["Potentiometer", "Potentiostat", "Galvanostat", "Voltmeter"],
    answer: 2,
    explain: "A galvanostat controls the current flowing through the cell. A potentiostat controls potential; a potentiometer measures potential at zero current."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "Which of the following is a BULK electrochemical method, where the signal depends on properties of the whole solution?",
    choices: ["Potentiometry", "Voltammetry", "Conductometry", "Electrogravimetry"],
    answer: 2,
    explain: "Conductometry measures the resistance/conductivity of the whole solution — a bulk method. Potentiometry, voltammetry, electrogravimetry and coulometry are interfacial methods."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "The potential of the saturated calomel electrode (SCE) at 25 °C is approximately:",
    choices: ["0.000 V", "+0.241 V (≈ 0.2444 V)", "+0.799 V", "−0.413 V"],
    answer: 1,
    explain: "Saturated calomel (Hg | Hg2Cl2 | sat'd KCl) sits at about +0.2444 V vs SHE at 25 °C. (0.336 V for 0.1 M KCl, 0.250 V for 3.5 M KCl.)"
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "The half-reaction that determines the potential of a Ag/AgCl reference electrode is:",
    choices: [
      "Ag+ + e- → Ag",
      "AgCl(s) + e- → Ag(s) + Cl-",
      "2 Ag + Cl2 → 2 AgCl",
      "Ag → Ag+ + e-"
    ],
    answer: 1,
    explain: "AgCl(s) + e- → Ag(s) + Cl-. The potential therefore depends on a(Cl-) — controlled by the KCl filling solution."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "Why is the Standard Hydrogen Electrode (SHE) rarely used in routine bench-top measurements?",
    choices: [
      "Its potential is not known accurately",
      "It is inconvenient to operate (needs H2 gas at 1 atm over Pt black) and is a fire hazard",
      "It is the most accurate reference for all measurements",
      "It produces large currents"
    ],
    answer: 1,
    explain: "Despite being the thermodynamic reference (E° ≡ 0 V), the SHE requires H2 gas and a Pt-black electrode — inconvenient and a fire hazard. SCE and Ag/AgCl are the routine workhorses."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "Which of the following is the best indicator electrode to use for monitoring an Fe3+/Fe2+ couple in solution?",
    choices: [
      "Pure iron electrode (first kind)",
      "An inert platinum electrode (third kind / inert)",
      "A glass pH electrode",
      "A LaF3 crystalline membrane"
    ],
    answer: 1,
    explain: "Pt is the classic inert (third-kind) indicator electrode for soluble redox couples like Fe3+/Fe2+ — its potential follows Nernst for the couple without itself participating in the reaction."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "Common sources of error when measuring pH with a glass electrode include:",
    choices: [
      "Alkali error, acid error, dehydration of the membrane, and errors in standard buffers",
      "Only humidity in the room",
      "Only the temperature of the buret",
      "Only convection currents in the sample"
    ],
    answer: 0,
    explain: "Glass-electrode pH errors include alkali error (high-pH response to Na+), acid error (very low pH), dehydration of the membrane, low-ionic-strength error, and inaccurate calibration buffers."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "The membrane of a typical pH glass electrode is composed of approximately:",
    choices: [
      "Pure SiO2",
      "SiO2 (~72%), Na2O (~22%), CaO (~6%) silicate glass",
      "Na3PO4",
      "Pure NaCl"
    ],
    answer: 1,
    explain: "The standard pH-responsive glass has approximately SiO2 ~72%, Na2O ~22%, CaO ~6% — a silicate framework with charge-balancing cations involved in ion exchange with H+."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "Within the hydrated gel layer at the surface of a glass pH membrane, which ion actually carries the current?",
    choices: ["Na+", "H+", "Ca2+", "SiO4^4-"],
    answer: 1,
    explain: "H+ carries the current at/near the surface via ion exchange in the hydrated gel layer. Na+ carries current in the dry interior; Ca2+ is immobile."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "ISFET stands for and refers to:",
    choices: [
      "Internal Solid Field Electrolyte Transistor; a glass electrode",
      "Ion-Sensitive Field-Effect Transistor; a semiconductor-based indicator electrode",
      "Iron Sulfide Fixed Electrode Transducer; a redox sensor",
      "Inert Soft Filter Electrode Tube; a salt-bridge variant"
    ],
    answer: 1,
    explain: "An ion-sensitive field-effect transistor uses an ion-selective layer in place of the conventional gate, giving a drain current that depends on analyte-ion activity."
  },
  {
    topic: "Potentiometry",
    source: "Electroanalysis_Potentiometry.pdf",
    q: "Which of the following is the best ion-selective electrode to use for selective measurement of S2- in solution?",
    choices: [
      "LaF3 single-crystal membrane",
      "Mixed-crystal Ag2S membrane",
      "pH glass electrode",
      "Inert Pt electrode"
    ],
    answer: 1,
    explain: "A mixed-crystalline Ag2S membrane responds selectively to S2- (and Ag+). LaF3 is for F-; glass is for H+/Na+; Pt is non-selective."
  },

  // ============ MORE ELECTROGRAVIMETRY & COULOMETRY ============
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "The 'iR drop' that contributes to the applied potential in an electrolysis cell is:",
    choices: [
      "The IR-spectrum absorption of the sample",
      "The ohmic potential drop across the cell's resistance (E = i × R)",
      "An intra-orbital relaxation of electrons",
      "The change in potential due to temperature"
    ],
    answer: 1,
    explain: "iR drop is the ohmic loss across the resistance of the cell solution and connections (V = i × R) that the applied potential must overcome."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "Kinetic polarization arises from:",
    choices: [
      "Slow mass transport of analyte to the electrode",
      "A slow rate of electron transfer between electrode and reactant",
      "Pure ohmic resistance of the solution",
      "Convection caused by stirring"
    ],
    answer: 1,
    explain: "Kinetic (activation) polarization is the overpotential needed to drive electron transfer fast enough for the desired current — distinct from concentration polarization (mass-transport limited)."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "Which mass-transport mechanism is driven by a concentration gradient and random thermal motion?",
    choices: ["Migration", "Convection", "Diffusion", "Conduction"],
    answer: 2,
    explain: "Diffusion is the movement of species from regions of higher concentration to lower concentration, driven by random thermal motion and the gradient."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "Migration as a mass-transport mode refers to:",
    choices: [
      "Diffusion in a concentration gradient",
      "Movement of ions under the influence of an electric field",
      "Mechanical convection by stirring",
      "Adsorption onto the electrode"
    ],
    answer: 1,
    explain: "Migration is the movement of charged species in response to an applied electric field; its rate increases with field strength."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "Convection in an electrochemical cell is most directly achieved by:",
    choices: [
      "Heating the solution to boiling",
      "Mechanical stirring or movement of electrode/solution",
      "Adding more supporting electrolyte",
      "Decreasing the current to zero"
    ],
    answer: 1,
    explain: "Convection in electroanalysis is normally achieved with a stirrer, rotating electrode, or solution flow — i.e. some form of bulk fluid motion."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "Which of the following is NOT one of the six steps of a complete electron-transfer event at an electrode?",
    choices: [
      "Mass transport of oxidant from bulk solution to the electrode",
      "Transient adsorption of the oxidant onto the electrode surface",
      "Charge transfer between electrode and oxidant (faradaic step)",
      "Photon absorption by the oxidant"
    ],
    answer: 3,
    explain: "The six steps are: O transports to the electrode, O adsorbs (non-faradaic), charge transfer (faradaic), R desorbs, R transports away, plus any coupled chemical step. Photon absorption is not part of the electron-transfer scheme."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "Faraday's constant has the approximate value:",
    choices: [
      "9.65 × 10^4 C mol-1",
      "6.022 × 10^23 mol-1",
      "8.314 J K-1 mol-1",
      "1.602 × 10^-19 C"
    ],
    answer: 0,
    explain: "F ≈ 96 487 C/mol — the charge of one mole of electrons. The other constants are NA, R, and e respectively."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "If the current i(t) varies during the electrolysis, the total charge Q passed is:",
    choices: [
      "i × Δt, valid for any i(t)",
      "The integral of i(t) dt over the electrolysis time",
      "F × n only",
      "Exactly 1 coulomb regardless of i(t)"
    ],
    answer: 1,
    explain: "For variable current, Q = ∫ i(t) dt over the electrolysis. Q = i × t is just the special case of constant current."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "When Cu is electrodeposited on a Pt cathode from a CuSO4/H2SO4 solution, the typical anode reaction is:",
    choices: [
      "Cu(s) → Cu2+ + 2 e-",
      "2 H2O → O2(g) + 4 H+ + 4 e-",
      "2 Cl- → Cl2 + 2 e-",
      "O2 + 4 H+ + 4 e- → 2 H2O"
    ],
    answer: 1,
    explain: "With no easier-to-oxidize species present, water is oxidized at the Pt anode to give O2 while Cu2+ is reduced to Cu(s) at the cathode."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "In a 3-electrode cell, the auxiliary (counter) electrode's primary role is to:",
    choices: [
      "Provide an accurately known reference potential",
      "Carry the cell current so that essentially no current flows through the reference electrode",
      "Stir the solution",
      "Measure the temperature"
    ],
    answer: 1,
    explain: "The auxiliary electrode is the current sink/source. Because almost no current flows through the reference electrode, its potential stays constant and there is no significant iR drop on the reference."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "A major reason for generating titrant in situ by coulometry (e.g. OH- from water reduction) instead of dispensing a stored standard NaOH from a burette is:",
    choices: [
      "It requires no electricity",
      "It avoids problems with carbonate contamination of stored NaOH",
      "It needs no power supply",
      "It always requires a visual indicator"
    ],
    answer: 1,
    explain: "Stored NaOH absorbs atmospheric CO2 and forms carbonate, complicating standardization. Generating OH- electrolytically in situ avoids this — and very small amounts can be delivered very precisely."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "In coulometric Karl Fischer titration, approximately how much charge corresponds to 1 mg of H2O?",
    choices: ["About 0.01 C", "About 1 C", "About 10.72 C", "About 1000 C"],
    answer: 2,
    explain: "For the Karl Fischer reaction, ~10.72 C of charge corresponds to 1 mg of water — derived from Faraday's law and the stoichiometry of the I2 + H2O reaction."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "The accuracy of coulometric methods is ultimately limited by:",
    choices: [
      "How accurately you can weigh the electrode",
      "How accurately current and time can be measured (four or five sig figs is routine)",
      "Solvent viscosity",
      "The color of the solution"
    ],
    answer: 1,
    explain: "Since N = i·t/(nF), the precision of coulometry is set by the current and time measurements — four to five significant figures of accuracy is routinely possible."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "Which of the following is the best technique to use to PRECONCENTRATE a trace metal out of a large (>1 L) volume of solution onto a small electrode for later analysis?",
    choices: [
      "Coulometric titration",
      "Electrogravimetric / electrolytic deposition",
      "Karl Fischer titration",
      "Potentiometric titration"
    ],
    answer: 1,
    explain: "Plating the metal out of a large solution volume onto a small electrode effectively increases its surface concentration — that's electrogravimetric preconcentration, often used before stripping voltammetry."
  },
  {
    topic: "Electrogravimetry & Coulometry",
    source: "Electrogravimetric and coulometric methods.pdf",
    q: "Which of the following is NOT a stated advantage of coulometric methods of analysis?",
    choices: [
      "No need to standardize a titrant solution",
      "Very small samples can be analyzed",
      "Use of titrants that would otherwise be unstable",
      "Always faster than spectrophotometry"
    ],
    answer: 3,
    explain: "Coulometric methods aren't inherently faster than spectrophotometry. The listed advantages are: no standardization needed, very sensitive, can use unstable titrants, and 4–5 sig fig precision."
  },

  // ============ MORE VOLTAMMETRY ============
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "According to IUPAC, 'voltametry' (one 'm') refers to:",
    choices: [
      "The same thing as voltammetry — just a spelling variant",
      "A controlled-current potentiometric titration",
      "A type of photometric titration",
      "Cyclic voltammetry specifically"
    ],
    answer: 1,
    explain: "With a single 'm', voltametry is defined by IUPAC as a controlled-current potentiometric titration — NOT the same as voltammetry (two m's), which measures current vs potential."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "A 'faradaic current' in voltammetry is:",
    choices: [
      "Current from double-layer charging",
      "Current from a redox reaction at the working electrode (electrons crossing the interface)",
      "Capacitive AC current only",
      "Current induced by an external magnetic field"
    ],
    answer: 1,
    explain: "Faradaic current arises from actual redox reactions (electrons crossing the interface), in contrast with non-faradaic current, which is mostly capacitive (double-layer) charging."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "In the convention used in your course, an anodic current at the working electrode (analyte oxidation) is given which sign?",
    choices: ["Positive", "Negative", "Always zero", "Depends on temperature"],
    answer: 1,
    explain: "Per the stated convention: cathodic (reduction) current is positive, anodic (oxidation) current is negative."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "Which mercury working electrode forms drops continuously under gravity at the end of a capillary?",
    choices: [
      "Hanging mercury drop electrode (HMDE)",
      "Dropping mercury electrode (DME)",
      "Static mercury drop electrode (SMDE)",
      "Thin mercury film electrode (TMFE)"
    ],
    answer: 1,
    explain: "DME drops form continuously under gravity. HMDE holds one drop suspended; SMDE forms drops via a mechanical plunger; TMFE is a thin film on a solid support."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "A static mercury drop electrode (SMDE) differs from the classical DME in that:",
    choices: [
      "It uses solid mercury",
      "Each drop is formed by a mechanical plunger rather than only by gravity",
      "It floats on the solution surface",
      "It does not give a fresh surface for each measurement"
    ],
    answer: 1,
    explain: "A SMDE uses a mechanical plunger to extrude each new drop on demand — giving a fresh surface but with electronically controlled timing and drop size."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "Glassy carbon is commonly chosen as a working electrode because it:",
    choices: [
      "Dissolves easily in mild acid",
      "Has a wide usable potential window and is chemically inert in most aqueous and organic solvents",
      "Cannot be polished",
      "Has very poor electrochemical stability"
    ],
    answer: 1,
    explain: "Glassy (vitreous) carbon has a wide usable potential range, low background current, mechanical robustness, and can be polished — making it a workhorse working-electrode material."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "A carbon paste electrode (CPE) is made from:",
    choices: [
      "Graphite (or other carbon) powder mixed with an inert binder such as mineral oil",
      "Pure mercury",
      "Solid glass with a carbon coating",
      "A platinum amalgam"
    ],
    answer: 0,
    explain: "A carbon paste electrode is a mix of graphite (or other carbon) powder and a non-conducting binder (mineral or silicone oil), packed into a holder; easily modified with reagents."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "Screen-printed electrodes are particularly useful for:",
    choices: [
      "Large industrial electrolysis cells",
      "Disposable, low-cost, miniaturized voltammetric devices (e.g. glucose test strips)",
      "Generating large amounts of titrant",
      "Long-term reference electrodes"
    ],
    answer: 1,
    explain: "Screen-printed electrodes are mass-produced, low-cost, miniaturized, and disposable — well-suited to point-of-care and field-portable sensors."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "In a stirred solution at a stationary electrode, the Nernst diffusion layer is typically about how thick?",
    choices: ["Several centimeters", "1–10 µm", "1–10 nm", "1 mm to 1 cm"],
    answer: 1,
    explain: "Convective flow past the electrode produces a thin (~1–10 µm) Nernst diffusion layer; mass transport across it is by diffusion alone."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "When electron-transfer kinetics are very slow on the experimental timescale, the voltammetric response is described as:",
    choices: [
      "Electrochemically reversible",
      "Electrochemically irreversible",
      "Faradaic",
      "Non-faradaic"
    ],
    answer: 1,
    explain: "With slow kinetics, the surface concentrations no longer obey the Nernst equation during the scan and the wave appears drawn-out and shifted — termed electrochemically irreversible."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "In normal-pulse and differential-pulse polarography, the cycle time τ is approximately:",
    choices: ["1 ms", "1 second", "1 minute", "1 hour"],
    answer: 1,
    explain: "Typical NPP and DPP cycle time is about 1 s. Square-wave polarography uses much shorter (~5 ms) cycles for higher speed."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "In cyclic voltammetry, the peak current ip depends on which combination of parameters (Randles–Ševčík-style)?",
    choices: [
      "Only the temperature",
      "The number of electrons n, electrode area A, diffusion coefficient D, scan rate υ, and analyte concentration CA",
      "The color of the working electrode",
      "Only the cell volume"
    ],
    answer: 1,
    explain: "Per the Randles–Ševčík relation introduced in the slides, ip depends on n, A, D, υ, and the analyte concentration CA at the electrode."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "For a diffusion-controlled redox reaction in cyclic voltammetry, increasing the scan rate (υ) generally:",
    choices: [
      "Decreases the peak current",
      "Increases the peak current (scales with √υ)",
      "Eliminates the peak entirely",
      "Reverses the sign of the current"
    ],
    answer: 1,
    explain: "For a diffusion-controlled CV response, ip scales with √υ — faster scans produce larger peak currents and a thinner diffusion layer."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "An electrochemically REVERSIBLE redox couple in cyclic voltammetry is diagnosed at 25 °C by:",
    choices: [
      "Peak separation ΔEp ≈ 59/n mV with anodic/cathodic peak heights approximately equal",
      "No peaks visible at all",
      "Peak separation ≥ 500 mV",
      "Identical curves at every scan rate including zero"
    ],
    answer: 0,
    explain: "For an electrochemically reversible n-electron couple, ΔEp ≈ 59/n mV at 25 °C and ip,a / ip,c ≈ 1. Larger ΔEp indicates quasi-reversible or irreversible behavior."
  },
  {
    topic: "Voltammetry",
    source: "Voltammetry.pdf",
    q: "Which of the following is the best voltammetric technique to use to quantify a sub-ppb concentration of Pb2+ in drinking water?",
    choices: [
      "Cyclic voltammetry of the unconcentrated sample",
      "Anodic stripping voltammetry (ASV)",
      "Direct amperometry at fixed potential without preconcentration",
      "Coulometric titration"
    ],
    answer: 1,
    explain: "ASV electrodeposits and preconcentrates Pb on the electrode, then strips it anodically — giving huge signal-to-background ratios and ppb (or sub-ppb) detection limits."
  }
];

// Expose globally for the browser
if (typeof window !== "undefined") {
  window.QUESTIONS = QUESTIONS;
}
