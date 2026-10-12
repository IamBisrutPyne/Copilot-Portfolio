document.getElementById("currentYear").textContent = new Date().getFullYear();

const navLinks = document.querySelectorAll(".navbar .nav-link");
const navbarCollapse = document.getElementById("navLinks");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).hide();
    }
  });
});
