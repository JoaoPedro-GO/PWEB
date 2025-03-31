function escolhaComputador() {
    const escolhas = ['pedra', 'papel', 'tesoura'];
    const escolhaAleatoria = Math.floor(Math.random() * 3);
    return escolhas[escolhaAleatoria];
}

function resultado(jogador, computador) {
    if (jogador === computador) {
        return 'Empate!';
    }

    if (
        (jogador === 'pedra' && computador === 'tesoura') ||
        (jogador === 'papel' && computador === 'pedra') ||
        (jogador === 'tesoura' && computador === 'papel')
    ) {
        return 'Você Venceu!';
    }

    return 'Você Morreu!';
}

function jogar(jogador) {
    const computador = escolhaComputador();
    const resultadoJogo = resultado(jogador, computador);

    document.getElementById('gameResult').textContent = `Você escolheu ${jogador}. O seu oponente escolheu ${computador}. Resultado: ${resultadoJogo}`;
}

document.getElementById('pedra').addEventListener('click', () => jogar('pedra'));
document.getElementById('papel').addEventListener('click', () => jogar('papel'));
document.getElementById('tesoura').addEventListener('click', () => jogar('tesoura'));
