const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    document.body.style.background = "#111";
    document.body.style.color = "white";
    themeButton.textContent = "☀️";
  } else {
    document.body.style.background = "#f5f5f5";
    document.body.style.color = "#222";
    themeButton.textContent = "🌙";
  }
});
// ===== SCROLL ANIMATION =====

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

sections.forEach(function(section) {
  section.classList.add("hidden");
  observer.observe(section);
});