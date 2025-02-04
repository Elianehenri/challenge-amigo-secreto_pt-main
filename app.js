//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.onclick = () => removerAmigo(index);
        
        li.appendChild(botaoRemover);
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário pelo menos 2 amigos para realizar o sorteio.");
        return;
    }
    
    let sorteio = [...amigos];
    let resultado = {};
    
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let possiveis = sorteio.filter(a => a !== amigo);
        
        if (possiveis.length === 0) {
            return sortearAmigo(); // Reinicia o sorteio se não houver opções válidas
        }
        
        let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
        resultado[amigo] = sorteado;
        
        sorteio = sorteio.filter(a => a !== sorteado);
    }
    
    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    
    for (const [amigo, sorteado] of Object.entries(resultado)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${sorteado}`;
        listaResultado.appendChild(li);
    }
}
