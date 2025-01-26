//Se utilizan dos funciones principales

let friends = [];

function getRandomNumber(){
    return Math.floor(Math.random()*friends.length);
}

function agregarAmigo(){
    let name = document.getElementById("amigo").value;
    if(name == ''){
        alert("Ingrese un nombre válido.");
    }else{
        let list = document.getElementById("listaAmigos");
        friends.push(name);
        list.innerHTML += `<li> ${name} </li>`;
    }
    document.getElementById("amigo").value = '';
}

function sortearAmigo(){
    let randomIndex = getRandomNumber();
    let resultContainer = document.getElementById("resultado");
    resultContainer.innerHTML = `<li> El amigo secreto es: ${friends[randomIndex]}. </li>`;
}

