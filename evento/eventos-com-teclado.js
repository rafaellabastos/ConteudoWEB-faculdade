//Exemplo com keydown
var pressionarTecla1 = document.querySelector('#inputOnKeyDown')
pressionarTecla1.addEventListener('keydown', () => {
    var respostaOKD = document.querySelector('#respostaOnKeyDown')
    respostaOKD.innerHTML = pressionarTecla1.value

})

//Exemplo com keyup
var pressionarTecla2 = document.querySelector('#inputOnKeyUp')
pressionarTecla2.addEventListener('keyup', (event) => {
    var respostaOKU = document.querySelector('#respostaOnKeyUp')
    respostaOKU.innerHTML = "A tecla " + pressionarTecla2.value + " = " + event.keyCode
})



