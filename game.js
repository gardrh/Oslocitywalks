/* ══════════════════════════════════════════
   Los! – game.js
   Multi-tour game logic, scene data, menu
══════════════════════════════════════════ */

/* ── TOURS (scene data lives in translations.js) ── */
const tours = {
  seaside:    { title: "Short Tour of Central-Western Oslo" },
  greathits:  { title: "Oslo’s Greatest Hits" },
  becoming:   { title: "Oslo and Norway’s Becoming" },
  citycentre: { title: "Oslo City Centre Tour" },
  akerselva:  { title: "Akerselva and Oslo’s Industrial Past" }
};


/* ── RESOLVE ACTIVE TOUR ──
   Reads ?tour=citycentre from the URL.
   Falls back to 'citycentre' if missing or unknown.
─────────────────────────────────────────── */
function getActiveTourId() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('tour');
  return (id && tours[id]) ? id : 'greathits';
}

/* ── STATE ── */
let tourId       = null;  // set in initGame()
let tourScenes   = [];
let currentScene = 0;
let hintIndex    = 0;

/* ── INIT GAME ── */
function initGame() {
  tourId     = getActiveTourId();
  tourScenes = getScenes(tourId);

  // Restore progress for this specific tour
  const saved = parseInt(sessionStorage.getItem(`los!_scene_${tourId}`) || '0');
  currentScene = (saved < tourScenes.length) ? saved : 0;

  // Start timer only on fresh start
  if (currentScene === 0 && !sessionStorage.getItem(`los!_start_${tourId}`)) {
    sessionStorage.setItem(`los!_start_${tourId}`, Date.now().toString());
  }

  applyTranslations();
  renderScene();

  document.getElementById('answerBtn').addEventListener('click', handleAnswer);
  document.getElementById('hintBtn').addEventListener('click', handleHint);
  document.getElementById('answerInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') handleAnswer();
  });
}

/* ── RENDER SCENE ── */
function renderScene() {
  const s = tourScenes[currentScene];

  document.getElementById('chapterLabel').textContent = s.chapter;
  document.getElementById('sceneCard').innerHTML = s.text;
  document.getElementById('answerInput').value = '';
  clearFeedback();
  hintIndex = 0;

  const pct = Math.round((currentScene / tourScenes.length) * 100);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressLabel').textContent =
    `${currentScene + 1} of ${tourScenes.length}`;
  const track = document.getElementById('progressTrack');
  if (track) track.setAttribute('aria-valuenow', pct);

  document.getElementById('answerInput').style.display = '';
  document.getElementById('answerBtn').textContent = T('answer');
}

/* ── HANDLE ANSWER ── */
function handleAnswer() {
  const s = tourScenes[currentScene];
  const val = document.getElementById('answerInput').value.trim().toLowerCase();
  if (!val) return;

  const correct = s.answers.some(a => val.includes(a) || a.includes(val));

  if (correct) {
    currentScene++;
    sessionStorage.setItem(`los!_scene_${tourId}`, currentScene);

    if (currentScene >= tourScenes.length) {
      // Tour complete — save elapsed time and tour id
      sessionStorage.removeItem(`los!_scene_${tourId}`);
      const startTime = parseInt(
        sessionStorage.getItem(`los!_start_${tourId}`) || Date.now()
      );
      const elapsedMs = Date.now() - startTime;
      sessionStorage.setItem('los!_elapsed', elapsedMs.toString());
      sessionStorage.setItem('los!_finished_tour', tourId);
      window.location.href = `finish.html?tour=${tourId}`;
    } else {
      renderScene();
      const card = document.getElementById('sceneCard');
      if (card) card.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } else {
    setFeedback('wrong', '✕', T('wrongAnswer'));
  }
}

/* ── HANDLE HINT ── */
function handleHint() {
  const s = tourScenes[currentScene];
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

/* ── HAMBURGER MENU ── */
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
  if (hours > 0)   return `${hours}h ${minutes}m`;
  if (minutes > 0) return `${minutes}m ${seconds}s`;
  return `${seconds}s`;
}

/* ── GOOGLE SHEETS SCORE SUBMISSION ──────────────────
  HOW TO SET UP:
  1. Go to https://sheets.google.com → new spreadsheet.
  2. Row 1 headers: Date | Tour | Duration | Elapsed (ms)
  3. Extensions → Apps Script → replace default code with:

     function doPost(e) {
       const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
       const data  = JSON.parse(e.postData.contents);
       sheet.appendRow([
         new Date().toISOString(),
         data.tour,
         data.duration,
         data.elapsed_ms
       ]);
       return ContentService
         .createTextOutput(JSON.stringify({ status: 'ok' }))
         .setMimeType(ContentService.MimeType.JSON);
     }

  4. Deploy → New deployment → Web app
     Execute as: Me  |  Who has access: Anyone
  5. Copy the deployment URL and paste it below.
──────────────────────────────────────────────────── */
const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwczyykYSUrIsTtirNsG-r9F2mKe4BhgBKJ7ZKMzsNQraMdXG0BOBsCHy3vcBd4iN7K/exec';

function submitScore(tour, elapsedMs, duration) {
  if (!SHEET_URL) return;
  // GET request via image ping — no CORS preflight, works from any origin
  const params = new URLSearchParams({
    tour: tour,
    duration: duration || '',
    elapsed_ms: elapsedMs
  });
  const img = new Image();
  img.src = SHEET_URL + '?' + params.toString();
}

/* ── FINISH PAGE INIT ── */
function initFinish() {
  const elapsedMs  = parseInt(sessionStorage.getItem('los!_elapsed') || '0');
  const finishedId = sessionStorage.getItem('los!_finished_tour') || 'citycentre';
  const tourTitle  = tours[finishedId]?.title || 'Tour';
  const duration   = elapsedMs > 0 ? formatElapsed(elapsedMs) : null;

  // Show tour name
  const tourNameEl = document.getElementById('finishTourName');
  if (tourNameEl) tourNameEl.textContent = tourTitle;

  // Show elapsed time
  const timeEl = document.getElementById('finishTime');
  if (timeEl && duration) {
    timeEl.textContent = duration;
    timeEl.closest('.finish-time-wrap').style.display = 'flex';
  }

  // Submit to Google Sheets
  if (elapsedMs > 0) submitScore(finishedId, elapsedMs, duration || '—');

  // Clean up
  sessionStorage.removeItem('los!_start_' + finishedId);
  sessionStorage.removeItem('los!_elapsed');
  sessionStorage.removeItem('los!_finished_tour');
}
