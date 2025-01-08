const navToggle = document.querySelector(`[aria-controls="primary-nav"]`);
const primaryNav = document.getElementById("primary-nav");

navToggle.addEventListener("click", () => {
  const isNavOpen = navToggle.getAttribute("aria-expanded");
  navToggle.setAttribute(
    "aria-expanded",
    isNavOpen === "true" ? "false" : "true"
  );
});

const resizeObserver = new ResizeObserver((entries) => {
  document.body.classList.add("resizing");

  requestAnimationFrame(() => {
    document.body.classList.remove("resizing");
  });
});

resizeObserver.observe(document.body);
