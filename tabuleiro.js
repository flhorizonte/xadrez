const pecas = {
    brancas: [
        {
            nome: 'peao',
            img: './brancas/p.png',
            starter: ['2a', '2b', '2c', '2d', '2e', '2f', '2g', '2h'] //posição de inicio da peça
        },
        {
            nome: 'cavalo',
            img: './pretas/bn.png',
            starter: ['1b', '1g']
        },
        {
            nome: 'bispo',
            img: './pretas/bb.png',
            starter: ['1c', '1f']
        },
        {
            nome: 'torre',
            img: './pretas/br.png',
            starter: ['1a', '1h']
        },
        {
            nome: 'rainha',
            img: './pretas/br.png',
            starter: ['1e']
        },
        {
            nome: 'rei',
            img: './pretas/bk.png',
            starter: ['1d']
        }
    ],
    pretas: [
        {
            nome: 'peao',
            img: './pretas/p.png',
            starter: ['7a', '7b', '7c', '7d', '7e', '7f', '7g', '7h'] //posição de inicio da peça
        },
        {
            nome: 'cavalo',
            img: './pretas/bn.png',
            starter: ['8b', '8g'] //posição de inicio da peça
        },
        {
            nome: 'bispo',
            img: './pretas/bb.png',
            starter: ['8c', '8f'] //posição de inicio da peça
        },
        {
            nome: 'torre',
            img: './pretas/br.png',
            starter: ['8a', '8h'] //posição de inicio da peça
        },
        {
            nome: 'rainha',
            img: './pretas/bq.png',
            starter: ['8d'] //posição de inicio da peça
        },
        {
            nome: 'rei',
            img: './pretas/bk.png',
            starter: ['8e'] //posição de inicio da peça
        },

    ]
}

//melhorar logica futuramente
function gerarTabuleiro() {
    //9x9
    let letters = 'abcdefgh';
    let html = '';
    let row = 0;

    for (let linha = 8; linha >= 1; linha--) {
        html += '<div class="row">';

        let count = 0;
        let second = 1;

        for (let coluna = 0; coluna < 8; coluna++) {
            if (count > 0) {
                count--;
            } else {
                count++;
            }
            if (second < 1) {
                second++;
            } else {
                second--;
            }

            html += getSquare(linha, `${letters[coluna]}`, row ? second : count);
        }

        html += '</div>'

        if (row > 0) {
            row--;
        } else {
            row++;
        }
    }
    document.getElementById('tabuleiro').innerHTML = html;
}

function getSquare(linha, coluna, boolean) {
    let linha_coluna = `${linha}${coluna}`;

    let square = `<div id="dragzone" class='square ${linha_coluna} ${boolean ? 'branca' : 'preta'}'>
                <b><small style="position: absolute; left:10%; top:10%">${linha}${coluna}</small></b>`;


    for (let peca of pecas.brancas) {
        for (let posi of peca.starter) {
            if (posi === linha_coluna) {
                square += `<img draggable="true" id="peca_branca" class="img_peca ${peca.nome}" src="${peca.img}">`;
            }
        }
    }

    for (let peca of pecas.pretas) {
        for (let posi of peca.starter) {
            if (posi === linha_coluna) {
                square += `<img class="img_peca" id="peca_preta" src="${peca.img}">`;
            }
        }
    }

    square += '</div>';

    return square;

    //se for encontrado linha e coluna nas posicoes de uma peça, a pela sera adicionada na caixa
}

export default gerarTabuleiro;