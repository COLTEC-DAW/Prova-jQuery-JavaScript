
const checkbox = document.querySelector("#check");
const senha = document.querySelector("#senha");

checkbox.addEventListener("change", () => {
    
    if(checkbox.checked){

        senha.setAttribute("type", "text");

    }else{

        senha.setAttribute("type", "password");

    }

})

