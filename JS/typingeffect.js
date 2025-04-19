// word transition effect
document.addEventListener("DOMContentLoaded", ()=>{
    const roles = ['Computer Science Student', 'Information Technology Student'];
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

