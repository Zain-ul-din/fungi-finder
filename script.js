const navToggle = document.querySelector(`[aria-controls="primary-nav"]`);
const primaryNav = document.getElementById("primary-nav");

navToggle.addEventListener("click", () => {
  const isNavOpen = navToggle.getAttribute("aria-expanded");
  navToggle.setAttribute(
    "aria-expanded",
    isNavOpen === "true" ? "false" : "true"
  );
});
