// ── Year in footer ───────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  var yrEl = document.getElementById('yr');
  // Grabs the current year automatically so you never have to update it
  if (yrEl) yrEl.textContent = new Date().getFullYear();
});

// ── Page navigation ──────────────────────────────────────────────
function showPage(id) {
  // 1. Hide all pages
  document.querySelectorAll('.page').forEach(function (p) {
    p.classList.remove('active');
  });
  
  // 2. Show the target page
  var target = document.getElementById('page-' + id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // 3. Update the active state in the navbar (Optional Polish)
  // This removes 'active' from all nav items, then finds the one you clicked
  document.querySelectorAll('.nav-item').forEach(function (nav) {
    nav.classList.remove('active');
  });
  
  // Find the nav label that matches the page we are going to and make it active
  const activeNavLabel = Array.from(document.querySelectorAll('.nav-label')).find(
    label => label.getAttribute('onclick') && label.getAttribute('onclick').includes(`showPage('${id}')`)
  );
  if (activeNavLabel) {
    activeNavLabel.closest('.nav-item').classList.add('active');
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
    if (label === String(y).toLowerCase().trim()) {
      b.classList.add('active');
    }
  });
  
  // Navigate to publications page
  showPage('pubs');
}
