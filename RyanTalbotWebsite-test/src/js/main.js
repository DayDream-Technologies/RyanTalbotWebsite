// 
// Keep jumps and pole vault in cm for point calculations
// 
var trackEvents = [
  {title: '100m', A: 25.4347, B: 18, C: 1.81, isTimed: true, day1: true, highScore: 10.6, points: 952, worldRecord: 9.58, WRpoints: 1202, step: 0.1},
  {title: 'Long Jump', A: 0.14354, B: 220, C: 1.4, isTimed: false, day1: true, highScore: 706, points: 788, worldRecord: 8.95, WRpoints: 1312, step: 0.2},
  {title: 'Shot Put', A: 51.39, B: 1.5, C: 1.05, isTimed: false, day1: true, highScore: 15.14, points: 798, worldRecord: 23.56, WRpoints: 1323, step: 0.5},
  {title: 'High Jump', A: 0.8465, B: 75, C: 1.42, isTimed: false, day1: true, highScore: 191, points: 723, worldRecord: 2.45, WRpoints: 1244, step: 0.03},
  {title: '400m', A: 1.53775, B: 82, C: 1.81, isTimed: true, day1: true, highScore: 47.52, points: 933, worldRecord: 43.03, WRpoints: 1164, step: 0.5},
  {title: '110m Hurdles', A: 5.74352, B: 28.5, C: 1.92, isTimed: true, day1: false, highScore: 14.74, points: 885, worldRecord: 12.80, WRpoints: 1135, step: 0.1},
  {title: 'Discus', A: 12.91, B: 4, C: 1.1, isTimed: false, day1: false, highScore: 50.90, points: 884, worldRecord: 74.08, WRpoints: 1383, step: 1},
  {title: 'Pole Vault', A: 0.2797, B: 100, C: 1.35, isTimed: false, day1: false, highScore: 520, points: 972, worldRecord: 6.23, WRpoints: 1308, step: 0.1},
  {title: 'Javelin', A: 10.14, B: 7, C: 1.08, isTimed: false, day1: false, highScore: 58.18, points: 710, worldRecord: 98.48, WRpoints: 1331, step: 1},
  {title: '1500m', A: 0.03768, B: 480, C: 1.85, isTimed: true, day1: false, highScore: 273.51, points: 676, worldRecord: 206.00, WRpoints: 1218, step: 1}
].map(event => {
  if (event.title === '1500m') {
    // convert to M:SS.ms
    var mins = Math.floor(event.highScore / 60);
    var secs = (event.highScore % 60).toFixed(2);
    event.text = mins + ':' + secs + ' Minutes';
  } else if (event.isTimed) {
    event.text = event.highScore.toFixed(2) + ' Seconds';
  } else {
    if (['Long Jump','High Jump','Pole Vault'].includes(event.title)) {
      event.text = (event.highScore/100).toFixed(2) + ' Meters';
    } else {
      event.text = event.highScore.toFixed(2) + ' Meters';
    }
  }
  return event;
});

// 
// Session timer + dynamic track‐event messages
//
var sessionStart = Date.now();
function updateTimerAndTrackEvents() { /* ... */ }
function timeToSeconds(timeString) { /* ... */ }
function calculateTrackEventScore(score, event) { /* ... */ }
function updateEventPoints(index) { /* ... */ }
function updateUnits(index, score) { /* ... */ }
function updateTotalScore() { /* ... */ }

// Decathlon input UI creation & chart drawing
function createEventRows() { /* ... */ }
function setSameHeight() { /* ... */ }
function drawLines(inputElement, value1, value2, value3) { /* ... */ }
function autoExpand(element) { /* ... */ }
function animateHighScores(highScore, element) { /* ... */ }

// Initialize high score animations
document.addEventListener('DOMContentLoaded', () => {
  var statisticsSection = document.querySelector('.statistics-section');
  trackEvents.forEach((event, index) => { /* ... */ });
});

// Career‐timeline “events” & auto‐rotate
var events = [ /* ... */ ];
var currentYear = new Date().getFullYear();
var currentTimelineIndex = 0;
function updateContent(image, description) { /* ... */ }
function addEvent(event) { /* ... */ }
function autoUpdateTimeline() { /* ... */ }
autoUpdateTimeline();
setInterval(autoUpdateTimeline, 10000);
events.forEach(addEvent);

// Scroll-spy: highlight current section link
const navLinks = document.querySelectorAll('.profile-nav a');
const sections = Array.from(navLinks).map(a =>
  document.querySelector(a.getAttribute('href'))
);
window.addEventListener('scroll', () => {
  const y = window.scrollY + window.innerHeight/2;
  sections.forEach((sec, i) => {
    if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(l => l.classList.remove('active'));
      navLinks[i].classList.add('active');
    }
  });
});

// UI INIT: Competitions tabs & Bio timeline dots
document.addEventListener('DOMContentLoaded', () => {
  // --- Competitions tabs ---
  const tabs   = document.querySelectorAll('.comp-tab');
  const panels = document.querySelectorAll('.comp-tab-content');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const targetId = tab.dataset.target;
      document.getElementById(targetId).classList.add('active');
    });
  });
  if (tabs.length) tabs[0].click();

  // --- Bio timeline dots ---
  const images = [
    'src/images/timeline/hs-pr.png',
    'src/images/timeline/panam-tv.png',
    'src/images/timeline/big-ten-first-place.png',
    'src/images/Team_USA_pics/flag_flex.jpg',
    'src/images/timeline/gvsu-coaching.jpg'
  ];
  const descriptions = [
    '2018 – Broke HS pole vault record at 16\'0"',
    '2019 – Bronze at Junior Pan-Am Games',
    '2020 – Set MSU decathlon record (8064 pts)',
    '2021 – 8th at U.S. Olympic Trials',
    '2022 – Began coaching at GVSU'
  ];
  const dots  = document.querySelectorAll('.timeline-dot');
  const imgEl = document.getElementById('timeline-img');
  const textEl= document.getElementById('timeline-text');
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      imgEl.src = images[i];
      textEl.textContent = descriptions[i];
    });
  });
  if (dots.length) dots[0].click();
});

// Timeline scroll logic for bio section
document.addEventListener('DOMContentLoaded', function () {
  const allItems = Array.from(document.querySelectorAll('.timeline-detail-item'));
  const container = document.querySelector('.timeline-details-multi');
  const upBtn = document.getElementById('timeline-up');
  const downBtn = document.getElementById('timeline-down');
  let start = 0;
  const visibleCount = 3;

  function renderItems() {
    container.innerHTML = '';
    for (let i = start; i < Math.min(start + visibleCount, allItems.length); i++) {
      container.appendChild(allItems[i].cloneNode(true));
    }
    upBtn.disabled = start === 0;
    downBtn.disabled = start + visibleCount >= allItems.length;
  }

  if (allItems.length > visibleCount) {
    upBtn.style.display = '';
    downBtn.style.display = '';
    upBtn.addEventListener('click', function () {
      if (start > 0) {
        start--;
        renderItems();
      }
    });
    downBtn.addEventListener('click', function () {
      if (start + visibleCount < allItems.length) {
        start++;
        renderItems();
      }
    });
    renderItems();
  } else {
    upBtn.style.display = 'none';
    downBtn.style.display = 'none';
  }
});
