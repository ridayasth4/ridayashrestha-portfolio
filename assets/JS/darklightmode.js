document.addEventListener("DOMContentLoaded", () => {

    const toggleButton = document.querySelector(".dark-light-btn");
    const htmlElement = document.documentElement;

    // =========================
    // THEME (Light Default)
    // =========================
    const savedMode = localStorage.getItem("mode");

    const setTheme = (mode) => {
        if (mode === "dark") {
            htmlElement.classList.remove("light-mode");
            toggleButton.innerHTML = "<i class='fa-regular fa-sun'></i>";
        } else {
            htmlElement.classList.add("light-mode");
            toggleButton.innerHTML = "<i class='fa-regular fa-moon'></i>";
        }
        localStorage.setItem("mode", mode);
    };

    // Default to light if nothing saved
    setTheme(savedMode === "dark" ? "dark" : "light");

    toggleButton.addEventListener("click", () => {
        const isLight = htmlElement.classList.contains("light-mode");
        setTheme(isLight ? "dark" : "light");
    });


    // =========================
    // ACTIVE NAV ON SCROLL (Optimized)
    // =========================
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("ul li a");

    const setActiveLink = () => {
        let current = "";

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();

            if (rect.top <= 150 && rect.bottom >= 150) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${current}`
            );
        });
    };

    window.addEventListener("scroll", setActiveLink);

    // Run once on page load
    setActiveLink();
});