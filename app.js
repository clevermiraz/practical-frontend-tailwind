//icons
const lightMode = document.querySelector(".light-mode");
const darkMode = document.querySelector(".dark-mode");

// theme variables
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

// Icon Toggle
const toggleIcon = () => {
    lightMode.classList.toggle("hidden");
    darkMode.classList.toggle("hidden");
};

// initial Theme check

const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme === "dark")) {
        document.documentElement.classList.add("dark");
        darkMode.classList.add("hidden");
        return;
    }
    lightMode.classList.add("hidden");
};

// manual Theme Switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        toggleIcon();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    toggleIcon();
};

// call theme switch on Clicling button
lightMode.addEventListener("click", themeSwitch);
darkMode.addEventListener("click", themeSwitch);

// invoke theme check on initial load
themeCheck();


