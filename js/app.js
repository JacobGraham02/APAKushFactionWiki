const hamburger_menu_icon = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const content = document.querySelector('.content');
const pages   = document.querySelectorAll('.content .page');
const links   = document.querySelectorAll('nav.sidebar a[data-section]');
const default_active_page = "#home";

hamburger_menu_icon.addEventListener("click", () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

// call this after you swap the .page.active
function updateNavHighlight(selector) {
  links.forEach(link => {
    if (link.getAttribute('data-section') === selector) {
      link.classList.add('active');
      // if you prefer styling the <li>, you could do:
      // link.parentElement.classList.add('active-item');
    } else {
      link.classList.remove('active');
      // link.parentElement.classList.remove('active-item');
    }
  });
}

sidebar.querySelectorAll("a").forEach((element) => {
  element.addEventListener("click", () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
});

function showSection(selector) {
  // 1) fade out
  content.classList.remove('transition-in');
  content.classList.add('transition-out');

  // wait for the fade‑out to finish
  content.addEventListener('transitionend', function handler(ev) {
    if (ev.propertyName !== 'opacity') return;
    content.removeEventListener('transitionend', handler);

    // 2) swap the “active” class on pages
    pages.forEach(p => p.classList.remove('active'));
    document.querySelector(selector).classList.add('active');

    updateNavHighlight(selector);

    // 3) fade back in
    content.classList.remove('transition-out');
    content.classList.add('transition-in');
  }, { once: true });
}

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();                                 // don’t jump immediately
    const section = link.getAttribute('data-section');
    showSection(section);

    // also close your sidebar if on mobile:
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });
});

/*
Initially after the page first loads, automatically highlight the 'home' section list item
 */
updateNavHighlight(default_active_page);
