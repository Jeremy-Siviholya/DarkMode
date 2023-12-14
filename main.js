const DarkIcon = document.querySelector(".bxs-moon");
const LightIcon = document.querySelector(".bxs-sun");
const SystemIcon = document.querySelector(".bx-laptop");

const WindowMatch = () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
};

const EnableDarkMode = () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
};

const EnableLightMode = () => {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
};

const EnableSystemTheme = () => {
  localStorage.removeItem("theme");
};

const setTheme = () => {
  DarkIcon.addEventListener("click", EnableDarkMode);
  LightIcon.addEventListener("click", EnableLightMode);
  SystemIcon.addEventListener("click", EnableSystemTheme);
};

const Activelinks=()=>{
  const icons = document.querySelectorAll("i");
  icons.forEach((icon) => {
    icon.addEventListener("click", () => {
      document.querySelector(".text-blue-500")?.classList.remove("text-blue-500");
      icon.classList.add("text-blue-500");
    });
  });
}

WindowMatch()
setTheme()
Activelinks()
