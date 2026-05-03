/* ══════════════════════════════════════════
   LOSlo – sommer26.js
   Game logic, scene data, menu behaviour
══════════════════════════════════════════ */

/* ── SCENE DATA ── */
const scenes = [
  {
    chapter: "Chapter 1",
    text: "Make your way to the plaza between <b>Nationaltheateret</b> and <b>Nationaltheateret T-bane station</b>.\n\nThe National Theater was built in 1899, originally through private financing, and first received government support in 1928.\n\nAt the plaza you will find a smiling woman with curly hair. What is her name?",
    answers: ["wenche foss", "wenche"],
    hints: [
      "She is standing close to the fountain.",
      "Look for the statue on the Nationaltheateret side of the plaza."
    ]
  },
  {
    chapter: "Chapter 2",
    text: "Wenche Foss (1917–2011) was one of the most famous actresses in Norway, with a career spanning from 1935 to 2009, in both theater and film.\n\nShe is one of several women who shaped this city. Make your way up the castle hill to <b>Slottsparken</b> (the castle park). There you will find a statue of a woman surrounded by flowers, staring into the ground. Who is she?\n\n<i>On your way, you might catch the changing of the guards at 13:30.</i>",
    answers: ["camilla collett", "collett"],
    hints: [
      "Make your way to the rear-left of the castle.",
      "The statue is partially hidden among trees near the back of Slottsparken."
    ]
  },
  {
    chapter: "Chapter 3",
    text: "Camilla Collett was a Norwegian writer and an early pioneer of realism. Her book <i>Amtmandens Døtre</i> deals with the difficulties of being a woman. The statue was made by Gustav Vigeland.\n\nContinue down the road behind the castle and cross the street to <b>Parkveien 45</b>. Today it is the Government Representational House. Originally, it was owned by a local merchant and known under a different name.\n\nWhat was the building originally known as?",
    answers: ["villa parafina", "parafina"],
    hints: [
      "Find the blue plaque hanging on the wall.",
      "Look near the entrance of the building on the street-facing wall."
    ]
  },
  {
    chapter: "Chapter 4",
    text: "Before Norway found its own oil, petroleum importers like Frederik Sundt — who financed Villa Parafina in 1877 — supplied the country with kerosene (Nor. Parafin) used for illumination.\n\nFrom Villa Parafina, follow the road along the castle park towards <b>Solli plass</b>. There you will find a statue of a man holding a key, standing in front of one of Oslo's hippest hotels.\n\nWho made the statue?",
    answers: ["rodin", "auguste rodin"],
    hints: [
      "The man is dressed in a long robe.",
      "The name of the sculpture is inscribed at the base of the statue."
    ]
  },
  {
    chapter: "Chapter 5",
    text: "The Man with the Key, by Auguste Rodin, was unveiled in 1902. Rodin himself was by all accounts never in Oslo, but stirred significant cultural debate in the city.\n\nAmong those opposed to the statue was Gustav Vigeland — the very sculptor behind the Camilla Collett statue — who argued that art in Oslo's public spaces should be reserved for Norwegian artists.\n\n<i>More chapters coming soon — this tour is still growing!</i>",
    answers: ["_finish_"],
    hints: ["This is the final chapter for now. Press Answer to complete the tour!"]
  }
];

/* ── STATE (persists across same-session reloads) ── */
let currentScene = parseInt(sessionStorage.getItem('loslo_scene') || '0');
let hintIndex    = 0;

/* ── INIT (runs on game.html load) ── */
function initGame() {
  renderScene();
  document.getElementById('answerBtn').addEventListener('click', handleAnswer);
  document.getElementById('hintBtn').addEventListener('click', handleHint);
  document.getElementById('answerInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') handleAnswer();
  });
}

/* ── RENDER SCENE ── */
function renderScene() {
  const s = scenes[currentScene];

  document.getElementById('chapterLabel').textContent = s.chapter;
  document.getElementById('sceneCard').innerHTML = s.text;
  document.getElementById('answerInput').value = '';
  clearFeedback();
  hintIndex = 0;

  const pct = Math.round((currentScene / scenes.length) * 100);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent =
    `${currentScene + 1} of ${scenes.length}`;

  const isFinal = s.answers[0] === '_finish_';
  document.getElementById('answerInput').style.display = isFinal ? 'none' : '';
  document.getElementById('answerBtn').textContent = isFinal ? 'Finish Tour →' : 'Answer';
}

/* ── HANDLE ANSWER ── */
function handleAnswer() {
  const s = scenes[currentScene];

  if (s.answers[0] === '_finish_') {
    sessionStorage.removeItem('loslo_scene');
    window.location.href = 'finish.html';
    return;
  }

  const val = document.getElementById('answerInput').value.trim().toLowerCase();
  if (!val) return;

  const correct = s.answers.some(a => val.includes(a) || a.includes(val));

  if (correct) {
    currentScene++;
    sessionStorage.setItem('loslo_scene', currentScene);
    if (currentScene >= scenes.length) {
      sessionStorage.removeItem('loslo_scene');
      window.location.href = 'finish.html';
    } else {
      renderScene();
    }
  } else {
    setFeedback('wrong', '✕', 'Not quite — try again, or tap Hint for a clue.');
  }
}

/* ── HANDLE HINT ── */
function handleHint() {
  const s = scenes[currentScene];
  if (!s.hints?.length) return;
  const hint = s.hints[Math.min(hintIndex, s.hints.length - 1)];
  hintIndex = Math.min(hintIndex + 1, s.hints.length);
  setFeedback('hint', '💡', hint);
}

/* ── FEEDBACK ── */
function clearFeedback() {
  const fb = document.getElementById('feedback');
  fb.className = 'feedback';
  document.getElementById('fbIcon').textContent = '';
  document.getElementById('fbText').textContent = '';
}

function setFeedback(type, icon, text) {
  const fb = document.getElementById('feedback');
  fb.className = 'feedback ' + type;
  document.getElementById('fbIcon').textContent = icon;
  document.getElementById('fbText').textContent = text;
}

/* ── HAMBURGER MENU (shared across all pages) ── */
function initMenu() {
  const menuBtn     = document.getElementById('menuBtn');
  const menuOverlay = document.getElementById('menuOverlay');
  const menuPanel   = document.getElementById('menuPanel');
  const menuClose   = document.getElementById('menuClose');

  function openMenu() {
    menuOverlay.classList.add('open');
    menuPanel.classList.add('open');
  }
  function closeMenu() {
    menuOverlay.classList.remove('open');
    menuPanel.classList.remove('open');
  }

  menuBtn.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  menuOverlay.addEventListener('click', closeMenu);
}
