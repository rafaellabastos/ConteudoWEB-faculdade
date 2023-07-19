// Para salvar uma informação no localStorage
localStorage.setItem("chave", "valor");

// Para recuperar uma informação no localStorage
localStorage.getItem("chave");

// Para remover um item do localStorage
localStorage.removeItem("chave");

//Para limpar tudo do localStorage
localStorage.clear();


//Salvando matrizes no localStorage
var ourArray = [1, 2, 3, 4, 5]; 
localStorage.setItem("ourarraykey", JSON.stringify(ourArray));

//Recuperando dados no localStorage
var storedArray = localStorage.getItem("ourarraykey");
ourArray = JSON.parse(storedArray);


//Exemplo prático

//Lista para armazenar todos os usuários
let listaDeUsuários = []; 

//Objeto usuário base
function Usuario (nome, email) {
    this.nome = nome;
    this.email = email;
}

//Botão disparador
const botaoEnviar = document.querySelector("#btnSubmit");

botaoEnviar.addEventListener("click", () => {
    //inputs
    const inputUser = document.querySelector("#idUser");
    const inputEmail = document.querySelector("#idEmail");

    let usuario = new Usuario (inputUser.value,inputEmail.value); //evento do botão
    listaDeUsuários.push(usuario); //lista de usuários recebendo o objeto usuário
    localStorage.setItem("users", listaDeUsuários); //localStorage armazenando a lista de usuários
});