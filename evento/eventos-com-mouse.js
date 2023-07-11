//Exemplo com mousenter
var cliqueEntrar = document.querySelector('#entrada')
cliqueEntrar.addEventListener('mouseenter', entrar)

function entrar () {
    cliqueEntrar.innerHTML = "Você entrou"
    cliqueEntrar.style.backgroundColor = 'blue'
}

//Exemplo com mouseout
var cliqueSair = document.querySelector('#saida')
cliqueSair.addEventListener('mouseout', sair)

function sair () {
    cliqueSair.innerHTML = "Você saiu"
    cliqueSair.style.backgroundColor = 'green'
}

//Exemplo com click
var clique = document.querySelector('#clicada')
clique.addEventListener('click', clicar)

function clicar () {
    clique.innerHTML = "Você clicou"
    clique.style.backgroundColor = 'orange'
}

//Exemplo com contextmenu
var cliqueDireito = document.querySelector('#clicadaDireita')
cliqueDireito.addEventListener('contextmenu', clickDireito)

function clickDireito () {
    cliqueDireito.innerHTML = 'Clique direito'
    cliqueDireito.style.backgroundColor = 'pink'
}

//Exemplo com dblclick
var doisCliques = document.querySelector('#duasClicadas')
doisCliques.addEventListener('dblclick', clickDuplo)

function clickDuplo () {
    doisCliques.innerHTML = 'Foram 2 cliques'
    doisCliques.style.backgroundColor = 'red'
}

//Exemplo com mousedown
var pressionado = document.querySelector('#botaoPressionado')
pressionado.addEventListener('mousedown', apertou)

function apertou () {
    pressionado.innerHTML = "Botão apertado"
    pressionado.style.backgroundColor = 'aqua'
}

//Exemplo com mouseup
var solto = document.querySelector('#botaoSolto')
solto.addEventListener('mouseup', soltou)

function soltou () {
    solto.innerHTML = "Botão solto"
    solto.style.backgroundColor = 'lime'
}