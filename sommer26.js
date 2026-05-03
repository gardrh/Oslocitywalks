/* ══════════════════════════════════════════
   LOSlo – sommer26.js
   Game logic, scene data, menu behaviour
══════════════════════════════════════════ */

/* ── SCENE DATA ── */
const scenes = [
  {
    chapter: "Scene 1",
    text: "Make your way to the plaza between <b>Nationaltheateret</b> and <b>Nationaltheateret T-bane station</b>.\n\nThe National Theater was built in 1899. The theater was originally built through private finanziation, and first received government support in 1928.\n\nAt the plaza you will find a smiling woman with curly hair. What is her name?",
    answers: ["wenche foss", "wenche"],
    hints: [
      "She is standing close to the fountain."
    ]
  },
  {
    chapter: "Scene 2",
    text: "Wenche Foss (1917–2011) was one of the most famous actresses in Norway, with a career starting in 1935 and lasting until 2009. She played in both the theater and in films.\n\nWenche Foss is one of several women who have had influence on the city. Make your way up the castle hill to <b>Slottsparken</b> (the castle park). There, you will find a statue of a woman surrounded by flowers, staring into the ground. Who is she?\n\n<i>On your way, you might be able to see the changing of the guards at 13:30!</i>",
    answers: ["camilla collett", "collett"],
    hints: [
      "Make your way to the rear-left of the castle."
    ]
  },
  {
    chapter: "Scene 3",
    text: "Camilla Collett was a Norwegian writer, and an early writer in the genre of \"realism\", which sought to describe reality as it is. One of her books, <i>Amtmandens Døtre</i>, deals with the difficulties of being a woman. The statue was made by Gustav Vigeland, primarily known for the Vigeland sculpture park between Majorstua and Frogner.\n\nContinue down the road in the back of the castle and walk across the street to <b>Parkveien 45</b>. Today, the house is the Government Representational House (Statens representasjonsbolig). Originally, however, it was owned by a local merchant and known under a different name.\n\nWhat was the building originally known as?",
    answers: ["villa parafina", "parafina"],
    hints: [
      "Find the blue plaque hanging on the wall."
    ]
  },
  {
    chapter: "Scene 4",
    text: "Before Norway found its own oil, petroleum importers like Frederik Sundt, who financed Villa Parafina in 1877, supplied the country with kerosene (Nor. Parafin), that was used for illumination.\n\nFrom Villa Parafina, follow the road that stretches along the castle park towards <b>Solli plass</b>. There, you will find a statue of a man with a key. The statue is standing in front of what is now one of the hippest hotels in Oslo.\n\nWho made the statue?",
    answers: ["rodin", "auguste rodin"],
    hints: [
      "The man is dressed in a robe.",
      "The name of the sculpture is written at the base of the statue."
    ]
  },
  {
    chapter: "Scene 5",
    text: "The Man with the Key, by Auguste Rodin. It was unveiled in 1902. Rodin himself was by all accounts never in Oslo, but nevertheless made an impact on the cultural debate in the city. Amongst those opposed to the statue was Gustav Vigeland, who made the statue of Camilla Collett (as well as his famous park). One of the arguments was that art in the public spaces of Oslo should be reserved for Norwegian artists.\n\nNow, follow the tram line going down towards <b>Aker Brygge</b> and <b>Rådhusplassen</b>. At the big plaza, you will find a man standing next to a cannon.\n\nWhat is his name?",
    answers: ["tordenskiold", "peter tordenskiold", "peter wessel"],
    hints: [
      "Look for the statue near the waterfront at Rådhusplassen."
    ]
  },
  {
    chapter: "Scene 6",
    text: "Peter Tordenskiold (1690–1720) was a navy officer in the Danish-Norwegian navy, and became famous following a range of battles with Sweden. During one battle at the southern coast of Norway in 1714, his ship was running out of ammunition, and a representative was sent to the enemy to request borrowing gunpowder. The answer received: No!\n\nNow, follow the docks to your right along the <b>Akershus fortress</b> towards a dark period of Norway's recent history. On your left, you will find a number of empty chairs.\n\nWhat is the name of the artist?",
    answers: ["antony gormley", "gormley"],
    hints: [
      "You have to walk for a bit.",
      "The place is at the end of the fortress walls."
    ]
  },
  {
    chapter: "Scene 7",
    text: "During World War II, Norwegians assisted the German occupational forces in deporting 772 Jews from Norway. Most of them were sent to Auschwitz, and only 37 survived.\n\nNow, the tour is almost over. Continue along the docks past the cruise ship terminal until you reach a place with strange looking A-framed structures. The buildings are inspired by structures that are used to dry cod in Northern Norway.\n\nWhat is the name of the venue?",
    answers: ["salt"],
    hints: [
      "The structures are right next to the cruise ship terminal.",
      "It's not pepper."
    ]
  }
];

/* ── STATE (persists across same-session reloads) ── */
let currentScene = parseInt(sessionStorage.getItem('loslo_scene') || '0');
let hintIndex    = 0;

/* ── TIMER ── */
// Record start time only on first visit (scene 0, no saved time yet)
if (currentScene === 0 && !sessionStorage.getItem('loslo_start')) {
  sessionStorage.setItem('loslo_start', Date.now().toString());
}

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
  const track = document.getElementById('progressTrack');
  if (track) track.setAttribute('aria-valuenow', pct);

  document.getElementById('answerInput').style.display = '';
  document.getElementById('answerBtn').textContent = 'Answer';
}

/* ── HANDLE ANSWER ── */
function handleAnswer() {
  const s = scenes[currentScene];
  const val = document.getElementById('answerInput').value.trim().toLowerCase();
  if (!val) return;

  const correct = s.answers.some(a => val.includes(a) || a.includes(val));

  if (correct) {
    currentScene++;
    sessionStorage.setItem('loslo_scene', currentScene);
    if (currentScene >= scenes.length) {
      sessionStorage.removeItem('loslo_scene');
      // Save elapsed time for finish page
      const startTime = parseInt(sessionStorage.getItem('loslo_start') || Date.now());
      const elapsedMs = Date.now() - startTime;
      sessionStorage.setItem('loslo_elapsed', elapsedMs.toString());
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
    menuBtn.setAttribute('aria-expanded', 'true');
    menuPanel.setAttribute('aria-hidden', 'false');
    menuClose.focus();
  }
  function closeMenu() {
    menuOverlay.classList.remove('open');
    menuPanel.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuPanel.setAttribute('aria-hidden', 'true');
    menuBtn.focus();
  }

  menuBtn.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
  menuOverlay.addEventListener('click', closeMenu);
}

/* ── TIME FORMATTING ── */
function formatElapsed(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours   = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  } else {
    return `${seconds}s`;
  }
}

/* ── GOOGLE SHEETS SCORE SUBMISSION ── */
/*
  HOW TO SET UP GOOGLE SHEETS LOGGING:
  ─────────────────────────────────────
  1. Go to https://sheets.google.com and create a new spreadsheet.
  2. Name the columns in row 1: Date | Time (ms) | Duration
  3. Go to Extensions → Apps Script.
  4. Replace the default code with the following:

     function doPost(e) {
       const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       const data  = JSON.parse(e.postData.contents);
       sheet.appendRow([
         new Date().toISOString(),
         data.elapsed_ms,
         data.duration
       ]);
       return ContentService
         .createTextOutput(JSON.stringify({ status: 'ok' }))
         .setMimeType(ContentService.MimeType.JSON);
     }

  5. Click Deploy → New deployment → Web app.
     - Execute as: Me
     - Who has access: Anyone
  6. Copy the deployment URL and paste it below as SHEET_URL.
  7. Save and you're done — completions are logged automatically.
*/

const SHEET_URL = ''; // ← paste your Apps Script deployment URL here

function submitScore(elapsedMs, duration) {
  if (!SHEET_URL) return; // skip if not configured
  fetch(SHEET_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ elapsed_ms: elapsedMs, duration })
  }).catch(() => {}); // silent fail — not critical
}

/* ── FINISH PAGE INIT ── */
function initFinish() {
  const elapsedMs = parseInt(sessionStorage.getItem('loslo_elapsed') || '0');
  const duration  = elapsedMs > 0 ? formatElapsed(elapsedMs) : null;

  // Show time on finish page
  const timeEl = document.getElementById('finishTime');
  if (timeEl && duration) {
    timeEl.textContent = duration;
    timeEl.closest('.finish-time-wrap').style.display = 'flex';
  }

  // Send to Google Sheets
  if (elapsedMs > 0) {
    submitScore(elapsedMs, duration || '—');
  }

  // Clean up sessionStorage
  sessionStorage.removeItem('loslo_start');
  sessionStorage.removeItem('loslo_elapsed');
}
