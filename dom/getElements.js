//Função sem argumento
function avisar() {
    alert("Essa é uma função")
} 

avisar ()

//Exemplo getElementById
let novo = document.getElementById("idNome")

function mudar() {
    document.getElementById("titulo").innerHTML = novo.value
}

//Exemplo por getElementsByClassName
function inserir() {
    let novo = document.getElementById("novo").value
    let numero = document.getElementById("posicao").value -1
    document.getElementsByClassName("corredor")[numero].innerHTML = novo
}

// Exemplo por getElementsByTagName
function mostrar() {
    let numero = document.getElementById("numero").value -1
    let mes = document.getElementsByTagName("li")[numero].innerHTML;
    document.getElementById("resultado").innerHTML = mes
}
