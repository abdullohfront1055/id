let id = document.querySelector(".id");
let pass = document.querySelector(".pass");
let button = document.querySelector("button");

button.addEventListener("click",() =>{
    if(id.value === "12345" && pass.value === "953444660") {
        alert("Siz Mars space ga kirdingiz ");
    } else {
        alert("Siz tizimga kirmadingiz");
    }
})