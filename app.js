const input = document.querySelector("#input");

const eyeIcon = document.querySelector("#eye-close");

eyeIcon.addEventListener("click", ()=>{
    if(input.type === "password") {
        input.type = "text";
        eyeIcon.src = "eye-open.png";
    } else {
        input.type = "password";
        eyeIcon.src = "eye-close.png";
        
    }
})