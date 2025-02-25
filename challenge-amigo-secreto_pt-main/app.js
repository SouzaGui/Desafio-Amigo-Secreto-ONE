let amigos = []

function adicionarAmigo(){
    nome = document.getElementById("amigo").value;
    if(nome.length == 0){
        alert("O campo nome está vazio ! Preencha corretamente.");
    }else{
        amigos.push(nome);
    }
    document.getElementById("amigo").value='';
}


//Verificar se o nome foi adicionado corretamente ao array amigos
//console.log(amigos) 