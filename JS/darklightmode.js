// Dark Light mode
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".dark-light-btn");
    const htmlElement = document.documentElement;

    const currentMode = localStorage.getItem("mode");

    if (currentMode === "light"){
        htmlElement.classList.add("light-mode");
        toggleButton.innerHTML = "<i class='fa-regular fa-moon' ></i>";
    }
    
    toggleButton.addEventListener("click", ()=>{
        htmlElement.classList.toggle("light-mode");

        //update the button icon
        const isLightMode = htmlElement.classList.contains("light-mode");
        toggleButton.innerHTML = isLightMode ? "<i class='fa-regular fa-moon' ></i>" : "<i class='fa-regular fa-sun' ></i>";

        //save mode in local storage
        localStorage.setItem("mode", isLightMode ? "light" : "dark");
    });

    // nav auto active on their section
    const section = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("ul li a");

    function setActiveLink(){
        let currentSection = "";

        section.forEach((section)=>{
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link)=>{
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        })
    }
    window.addEventListener("scroll", setActiveLink);
});

