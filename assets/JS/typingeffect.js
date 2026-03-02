// word transition effect
document.addEventListener("DOMContentLoaded", ()=>{
    const roles = ['Full Stack Python Developer','Computer Science Student'];
    const roleElement = document.getElementById('role');
    let roleIndex = 0;
    let letterIndex = 0;
    let typingInterval;

    function typeRole(){
        roleElement.style.opacity=0;
        setTimeout(() => {
            roleElement.textContent = "";
            letterIndex = 0;

            typingInterval = setInterval(() => {
                if (letterIndex < roles[roleIndex].length) {
                    roleElement.textContent += roles[roleIndex].charAt(letterIndex);
                    letterIndex++;
                }
                else{
                    clearInterval(typingInterval);
                    setTimeout(() => {
                        roleIndex = (roleIndex + 1) % roles.length;
                        typeRole();
                    }, 1000);
                }
            }, 150);

            roleElement.style.opacity = 1;
        }, 500);
    }
    // start typing the first role
    typeRole();
});

//project filter
document.addEventListener("DOMContentLoaded", function(){
    const filterButtons = document.querySelectorAll('.project-list li');
    const projects = document.querySelectorAll('.project-box');

    filterButtons.forEach((button) => {
        button.addEventListener("click", ()=>{
            filterButtons.forEach((btn)=> btn.classList.remove("active"));
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            projects.forEach((project)=>{
                if (filter === "all" || project.getAttribute("data-category") === filter){
                    project.style.display = "block";
                }
                else{
                    project.style.display = "none";
                }
            });
        });
    });
});

