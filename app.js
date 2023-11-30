let amigosArray = []
let nomeAmigos = document.getElementById('nome-amigo');
let lista = document.getElementById('lista-amigos');
let sorteio = document.getElementById('lista-sorteio')
function adicionar () { 
    if (amigosArray.includes(nomeAmigos.value)) {
        nomeAmigos.value = ''
        alert ('Nome já inserido!')
        return;
    }

    if (nomeAmigos.value == '') {
        alert ('Nenhum nome inserido!')
        return;
    }

    if (lista.textContent == '') {
        lista.textContent = nomeAmigos.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nomeAmigos.value;
    }

    amigosArray.push(nomeAmigos.value);
    console.log (amigosArray);

    nomeAmigos.value = '';
}

function sortear () {
    if (amigosArray.length < 4) {
        alert ('Adicione no minimo 4 pessoas')
        return;
    }
    embaralhar(amigosArray)
    for (let i = 0; i < amigosArray.length; i ++) {
        if (i == amigosArray.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigosArray[i] + ' --> ' + amigosArray [0] + '<br/>'
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigosArray[i] + ' --> ' + amigosArray [i+1] + '<br/>'
        }
        
    }
}

function embaralhar (lista)  {
        for (let indice = lista.length; indice; indice--) {
            const indiceAleatorio = Math.floor(Math.random() * indice);
            [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
        }
}  

function reiniciar () {
    amigosArray = []
    sorteio.textContent = ''
    lista.textContent = ''
    nomeAmigos.value = ''

}