
let checkbox = document.querySelector("#check");
let senha = document.querySelector("#senha");

checkbox.addEventListener("change", () => {
    
    if(checkbox.checked){

        senha.setAttribute("type", "text");

    }else{

        senha.setAttribute("type", "password");

    }

})

