

document.querySelector("i").addEventListener("click", () => {
  document.documentElement.classList.toggle(
    localStorage.getItem("theme") === "dark"
      ? localStorage.setItem("theme","light") 
      : localStorage.setItem("theme","dark")
  );
});
document.documentElement.classList.add(localStorage.getItem('theme'))