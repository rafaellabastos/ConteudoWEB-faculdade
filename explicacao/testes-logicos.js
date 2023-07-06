    //Verificação if
let valor1 = 10
if (valor1 > 7) {
    console.log("O valor é maior que 7")
}

//Verificação if else
let valor2 = 10
if (valor2 >= 15) {
    console.log("O valor é maior ou igual a 15")
} else {
    console.log("O valor é menor que 15")
}

//Verificação if else if else
let idade = 19
if (idade <= 12) {
    console.log("É uma criança")
} else if (idade <= 17) {
    console.log("É um adolescente")
} else if (idade <= 29) {
    console.log("É um jovem")
} else {
    console.log("É um adulto")
}

//Mais de um teste lógico
let valor3 = 15
if (valor3 > 10 && valor3 < 20) {
    console.log("Este valor é válido")
} else if (valor3 < 1 || valor3 < 10) {
    console.log("Este valor não é válido")
}

//Switch case
let teste = 2
switch (teste) {
    case 1:
        console.log("Foi de primeira")
        break;
    case 2:
        console.log("Foi de segunda")
        break;
    default:
        console.log("Não foi nem de primeira nem de segunda")
        break;
}

//Incremento e decremento
let valor4 = 7
console.log(valor4); //7
valor4 = valor4 + 1
console.log(valor4); // 8
valor4++
console.log(valor4); //9
valor4 += 3
console.log(valor4) //12
valor4 --
console.log(valor4) //11
valor4 -= 4
console.log(valor4); //7
valor4 *= 4
console.log(valor4); //28
valor4 /= 8
console.log(valor4) //3.5

//For
for (let i = 0; i < 10; i++) { //Inicialização, condição, incremento
    console.log("Agora i vale " + i);
}

//Percorre o array
let frutas1 = ["maçã", "banana", "uva", "pera"]
for (let i = 0; i < frutas1.length; i++) {
    console.log(frutas1[i]);
}

let frutas2 = ["maçã", "banana", "uva", "pera"]
for (let fruta of frutas2) {
    console.log(fruta);
}

//While
let cont1 = 0
while (cont1 < 10) {
    console.log("Passagem " + cont1);
    cont1 ++
}

//Do while
let cont2 = 0
do {
    console.log("Passagem " + cont2);
    cont2++
} while (cont2 == 0)

let cont3 = 0
do {
    console.log("Passagem " + cont3);
    cont3++
} while (cont3 < 0)
