
let checkbox = document.querySelector("#check");
let senha = document.querySelector("#senha");

checkbox.addEventListener("change", () => {
    
    if(checkbox.checked){

        senha.setAttribute("type", "text");

    }else{

        senha.setAttribute("type", "password");

    }

})





let button = document.querySelector(".botao");
let alert = document.querySelector(".alert-imp");

button.addEventListener("click", () => {

    if(alert.classList.length == 1){
        alert.classList.toggle("alert-imp--active");

    } else {
        alert.classList.remove("alert-imp--active");
        alert.classList.add("alert-imp--active");
    }
    


})


