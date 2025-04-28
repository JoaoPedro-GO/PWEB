function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.calcularArea = function() {
        return this.base * this.altura;
    };
}

function calcularAreaRetangulo() {
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);

    var retangulo = new Retangulo(base, altura);
    var area = retangulo.calcularArea();
    document.getElementById('resultadoRetangulo').innerText = "A área do retângulo é: " + area + " unidades quadradas.";
}


class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this.nomeCorrentista = nomeCorrentista;
        this.banco = banco;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    exibirDados() {
        return `Correntista: ${this.nomeCorrentista}<br>Banco: ${this.banco}<br>Conta: ${this.numeroConta}<br>Saldo: R$ ${this.saldo.toFixed(2)}`;
    }
}


class Corrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this.tipoConta = "Corrente";
    }
}


class Poupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this.tipoConta = "Poupança";
        this.juros = juros;
        this.dataVencimento = dataVencimento;
    }

    exibirDados() {
        let dados = super.exibirDados();
        dados += `<br>Juros: ${this.juros}%<br>Data de Vencimento: ${this.dataVencimento}`;
        return dados;
    }
}


function criarContaCorrente() {
    var nome = document.getElementById('nomeCorrente').value;
    var banco = document.getElementById('bancoCorrente').value;
    var numeroConta = document.getElementById('numeroContaCorrente').value;
    var saldo = parseFloat(document.getElementById('saldoCorrente').value);

    var contaCorrente = new Corrente(nome, banco, numeroConta, saldo);
    document.getElementById('dadosContaCorrente').innerHTML = contaCorrente.exibirDados();
}


function criarContaPoupanca() {
    var nome = document.getElementById('nomePoupanca').value;
    var banco = document.getElementById('bancoPoupanca').value;
    var numeroConta = document.getElementById('numeroContaPoupanca').value;
    var saldo = parseFloat(document.getElementById('saldoPoupanca').value);
    var juros = parseFloat(document.getElementById('jurosPoupanca').value);
    var dataVencimento = document.getElementById('dataVencimentoPoupanca').value;

    var contaPoupanca = new Poupanca(nome, banco, numeroConta, saldo, juros, dataVencimento);
    document.getElementById('dadosContaPoupanca').innerHTML = contaPoupanca.exibirDados();
}
