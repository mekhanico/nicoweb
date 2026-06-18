const selector = document.querySelector('#theme-select');

const storeTheme = (theme) => localStorage.setItem("theme", theme);

const setTheme = () => {
  const activeTheme = localStorage.getItem("theme");
  if (activeTheme) {
    document.documentElement.dataset.theme = activeTheme;
    selector.value = activeTheme;
  }
};

selector.addEventListener("change", () => {
  document.documentElement.dataset.theme = selector.value;
  storeTheme(selector.value);
});

document.addEventListener("DOMContentLoaded", setTheme);
