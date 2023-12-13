

document.querySelector("i").addEventListener("click", () => {
  document.documentElement.classList.toggle(localStorage.getItem("theme"));
});
