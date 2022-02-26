function escolha() {
    let escolha1 = parseInt(prompt("Pedra, papel ou tesoura? [1] [2] [3]"));
    if (escolha1 == 1) {
        alert("Você escolheu pedra")
    } else if (escolha1 == 2) {
        alert("Você escolheu papel")
    } else {
        alert("Você escolheu tesoura")
    }
    return escolha1
}

function escolhaPC() {
    let escolhaPC1 = parseInt(Math.random() * 3 + 1)
    if (escolhaPC1 == 1) {
        alert("O computador escolheu pedra")
    } else if (escolhaPC1 == 2) {
        alert("O computador escolheu papel")
    } else {
        alert("O computador escolheu tesoura")
    }
    return escolhaPC1
}

let pontosJogador = 0;
let pontosPC = 0;

for (let i = 1; i <= 3; i++) {

    switch (escolha()) {
        case 1:
            switch (escolhaPC()) {
                case 1:
                    alert("Empate")
                    break
                case 2:
                    alert("O vencedor da rodada foi o computador!")
                    pontosPC += 1
                    break
                case 3:
                    alert("O vencedor da rodada foi o jogador!")
                    pontosJogador += 1
                    break
            }
            break
        case 2:
            switch (escolhaPC()) {
                case 1:
                    alert("O vencedor da rodada foi o jogador!")
                    pontosJogador += 1
                    break
                case 2:
                    alert("Empate")
                    break
                case 3:
                    alert("O vencedor da rodada foi o computador!")
                    pontosPC += 1
                    break
            }
            break
        case 3:
            switch (escolhaPC()) {
                case 1:
                    alert("O vencedor da rodada foi o computador!")
                    pontosPC += 1
                    break
                case 2:
                    alert("O vencedor da rodada foi o jogador!")
                    pontosJogador += 1
                    break
                case 3:
                    alert("Empate")
                    break
            }
            break
    }
}

if (pontosJogador > pontosPC)
    alert("O vencedor da partida foi o jogador!")
else if (pontosJogador < pontosPC)
    alert("O vencedor da partida foi o computador!")
else   
    alert("Empate")




