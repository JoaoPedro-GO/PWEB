let Funcionario1 = {
  matricula: 304823,
  nome: "João Pedro",
  funcao: "Desenvolvedor da Fatec"
};


let resultado = `
  <h2>Objeto criado pela Forma 1 (Notação Literal):</h2>
  <pre>${JSON.stringify(Funcionario1, null, 2)}</pre>
`;


function Funcionario(matricula, nome, funcao) {
  this.matricula = matricula;
  this.nome = nome;
  this.funcao = funcao;
}


let Funcionario2 = new Funcionario(34890, "Migel", "Desempregado");


resultado += `
  <h2>Objeto criado pela Forma 2 (Função Construtora):</h2>
  <pre>${JSON.stringify(Funcionario2, null, 2)}</pre>
`;


let Funcionario3 = Object.create(Object.prototype);
Funcionario3.matricula = 34823;
Funcionario3.nome = "Thales Carro On";
Funcionario3.funcao = "Estagiario Milionario";


resultado += `
  <h2>Objeto criado pela Forma 3 (Object.create()):</h2>
  <pre>${JSON.stringify(Funcionario3, null, 2)}</pre>
`;


document.getElementById('resultado').innerHTML = resultado;
