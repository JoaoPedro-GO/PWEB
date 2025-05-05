const janela = document.getElementById('janela');
const estado = document.getElementById('estadoJanela');
const tituloEstado = document.getElementById('tituloEstado');
let quebrada = false;

function atualizarTitulo() {
  if (quebrada) {
    tituloEstado.textContent = '';
    estado.textContent = 'Janela Quebrada';
  } else if (estado.textContent === 'Janela Fechada') {
    tituloEstado.textContent = 'Abra a Janela';
  } else {
    tituloEstado.textContent = ''; 
  }
}

janela.addEventListener('mouseover', () => {
  if (!quebrada) {
    janela.src = 'JNaberta.jpg';
    estado.textContent = 'Janela Aberta';
    atualizarTitulo();
  }
});

janela.addEventListener('mouseout', () => {
  if (!quebrada) {
    janela.src = 'JNfechada.jpg';
    estado.textContent = 'Janela Fechada';
    atualizarTitulo();
  }
});

janela.addEventListener('click', () => {
  janela.src = 'JNquebrada.jpg';
  quebrada = true;
  atualizarTitulo();
});
