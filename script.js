// ── Year in footer ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  var yrEl = document.getElementById('yr');
  if (yrEl) yrEl.textContent = new Date().getFullYear();
});

// ── Page navigation ──────────────────────────────────────────────
function showPage(id) {
  document.querySelectorAll('.page').forEach(function (p) {
    p.classList.remove('active');
  });
  var target = document.getElementById('page-' + id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ── Publications year tabs ───────────────────────────────────────
function setYear(y) {
  // Hide all tab content panels
  document.querySelectorAll('.tab-content').forEach(function (t) {
    t.classList.remove('active');
  });
  // Deactivate all year buttons
  document.querySelectorAll('.pub-year-btn').forEach(function (b) {
    b.classList.remove('active');
  });
  // Show selected tab
  var tab = document.getElementById('tab-' + y);
  if (tab) tab.classList.add('active');
  // Highlight matching button
  document.querySelectorAll('.pub-year-btn').forEach(function (b) {
    var label = b.textContent.toLowerCase().trim();
    if (label === y || label === String(y)) {
      b.classList.add('active');
    }
  });
  // Navigate to publications page
  showPage('pubs');
}
