//Função anônima
document.querySelector('#anonima').onclick = function () {
    alert("Evento de função anônima")
}

//Arrow Function
document.querySelector('#arrowFunction').onclick = () => {
    console.log("Ele clicou")
}

//Método addEventListener
document.querySelector('#addEventListener').addEventListener('click', function() {
    alert("Evento do método addEventListener")
})

//Organizando o código com addEventListener
var botao = document.querySelector('#orgAddEvLi')
botao.addEventListener('click', clicou)
botao.addEventListener('mouseenter', entrou)

function clicou() {
    botao.innerHTML = "Clicou"
}

function entrou() {
    botao.innerHTML = "Entrou"
}

//removeEventListener
var botao = document.querySelector('#removeEventListener')
botao.addEventListener('click', clicou)
botao.addEventListener('mouseenter', entrou)
botao.addEventListener('mouseout', saiu)

function clicou() {
    botao.innerHTML = "Clicou"
    botao.removeEventListener('mouseenter', entrou)
    botao.removeEventListener('mouseout', saiu)
}

function entrou() {
    botao.innerHTML = "Entrou"
}

function saiu() {
    botao.innerHTML = "Saiu"
}

//Array de elementos
var botoes = document.querySelectorAll('.arrayElementos')
botoes.forEach((arrayElementos) => {
    arrayElementos.addEventListener('click', () => console.log("Clicou"))
});

