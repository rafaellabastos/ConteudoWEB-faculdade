//Escrever no console do navegador
console.log("Está é uma impressão no console")

//Variável com valor definido
let nome;

//Variável vazia
let disciplina = null;

//Variável com valor
let texto = "Este é um exemplo"

//Exemplo
let carro = {
    cor: "preto",
    numPortas: 4,
    tipo: "Sedan",
    modelo: "Ônix",
    marca: "GM",
    correr: function() {
        alert("Estou correndo")
    }
}

console.log(carro.modelo);
carro.correr()

//Transforma o número float em inteiro
let numFloat = 123.5432
console.log(parseInt(numFloat));

//Transforma a string em float
let numString = "123.5432"
console.log(parseFloat(numString));

//Transforma o número float em string
let numeFloat = 123.5432
console.log(numeFloat.toString());

//Verifica o tipo da variável
let verificar = typeof numString
console.log(verificar);

//Verifica o tamanho da variável
let pedido = "Quero um copo d\'água"
alert(pedido.length)

//Posição da primeira ocorrência de uma string no texto
let txt1 = "Estão chegando as provas"
console.log(txt1.indexOf("as"));

//Posição da última ocorrência de uma string no texto
let txt2 = "Estão chegando provas as"
console.log(txt2.lastIndexOf("as"));

//Extrair uma parte do texto
let txt3 = "Estão chegando as provas"
console.log(txt3.slice(0, 5));

//Substituir um trecho do texto
let txt4 = "Estão chegando as provas"
console.log(txt4.replace("provas", "avaliações"));

//Converte string em letra maiúscula
let txt5 = "Estão chegando as provas"
console.log(txt5.toUpperCase());

//Converte string em letra minúscula
let txt6 = "Estão chegando as provas"
console.log(txt6.toLowerCase());

//Define o número de casas decimais
let num1 = 123.5432
console.log(num1.toFixed(2));

//Define o número de casas numéricas
let num2 = 123.5432
console.log(num2.toPrecision(4));

//Caixa de alerta
alert("Sou uma caixa de alerta")

//Caixa de confirmação
let caixaTeste = confirm("Você é um aluno?")
console.log("Resultado da caixa confirme: ", caixaTeste);

//Caixa de texto
let caixaTexto = prompt("Qual seu nome?", "escreva aqui")
console.log("O nome dele é", caixaTexto);
