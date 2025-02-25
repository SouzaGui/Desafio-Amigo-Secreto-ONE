let amigos = []

function adicionarAmigo(){
    nome = document.getElementById("amigo").value;
    if(nome.length == 0){
        alert("O campo nome está vazio ! Preencha corretamente.");
    }else{
        amigos.push(nome);
    }
    document.getElementById("amigo").value='';

    

    listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = "";


    
    for(let i = 0; i < amigos.length; i++){
        let lista = document.createElement("li");
        lista.innerHTML = amigos[i];
        listaAmigos.appendChild(lista);
    }
}

function sortearAmigo(){
    if(amigos.length == 0){
        alert("Você precisa adicionar nomes a serem sorteados !");
    }else if(amigos.length == 1){
        alert("Você precisa adicionar mais de um nome para sortear !");
    }
    

    sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    console.log(sorteado);

    resultado = document.getElementById("resultado");
    resultado.innerHTML = "O nome sorteado é: " + sorteado;

}

