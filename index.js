import gerarTabuleiro from './tabuleiro.js';
import makeMove from './jogadas.js';

let dragged = undefined

document.addEventListener("dragstart", event => {
    dragged = event.target;
    event.target.style.opacity = 5;
}, false);

document.addEventListener("dragover", event => {
    event.preventDefault()
}, false);

document.addEventListener("dragenter", event => {
    if (event.target.id == "dragzone") {
        event.target.style.background = "dark";
    }
}, false);

document.addEventListener("drop", event => {
    event.preventDefault();

    if (event.target.id == "dragzone") {

        const posicao = event.target.className.split(' ')[1];
        const cor = event.target.className.split(' ')[2];
        
        const nome = dragged.className.split(' ')[1];

        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);

        makeMove(posicao, cor, nome)
    }
}, false)

document.addEventListener("DOMContentLoaded", () => {
    gerarTabuleiro();
}, false)