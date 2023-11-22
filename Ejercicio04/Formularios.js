let signUp = document.getElementById("signUp")
let sigIn = document.getElementById("sigIn")
let nameInput = document.getElementById("nameImput")
let title = document.getElementById("title")

sigIn.onclick = function(){
    nameInput.style.maxHeight="0"
    title.innerHTML="Login"
    signUp.classList.remove("disable")
    sigIn.classList.add("disable")
}
signUp.onclick=function(){
    nameInput.style.maxHeight="60px"
    title.innerHTML="Registro"
    signUp.classList.remove("disable")
    sigIn.classList.add(disable)
}