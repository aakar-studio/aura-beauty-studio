const nav = document.getElementById("mainNav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Close mobile navigation after clicking a link.
document.querySelectorAll("#navMenu .nav-link, #navMenu .btn").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navMenu");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
