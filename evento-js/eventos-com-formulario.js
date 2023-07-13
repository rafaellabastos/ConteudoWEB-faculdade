//Exemplo com onfocus
var nomeFocus = document.querySelector('#idNomeFocus')
var span = document.querySelector('#acaoFocus')

nomeFocus.addEventListener('focus', () => {
    nomeFocus.style.outlineColor = 'blue'
    span.innerHTML = "O usuário acessou o campo"
})

//Exemplo com onblur
var nomeBlur = document.querySelector('#idNomeBlur')
var span = document.querySelector('#acaoBlur')

nomeBlur.addEventListener('blur', () => {
    nomeBlur.style.borderColor = 'red'
    span.innerHTML = "O usuário saiu do campo"
})

//Exemplo com onchange
var range = document.querySelector('#idBarra')
range.addEventListener('change', () => {
    document.querySelector('#idValor').innerHTML = range.value
})

//Exemplo com onsubmit
var form = document.querySelector('#idForm')

form.addEventListener('submit', () => {
    alert('Obrigada por preencher nossa pesquisa')
})