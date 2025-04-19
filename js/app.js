const hamburger_menu_icon = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

hamburger_menu_icon.addEventListener("click", () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

sidebar.querySelectorAll("a").forEach((element) => {
  element.addEventListener("click", () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  })
})

overlay.addEventListener("click", () => {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
})
