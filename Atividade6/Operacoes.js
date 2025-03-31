        var num1 = parseFloat(prompt("Digite o 1° numero: "));
        var num2 = parseFloat(prompt("Digite o 1° numero: "));

        var soma = (num1 + num2);
        var sub = (num1 - num2);
        var produto = (num1 * num2);
        var div = (num1 / num2);
        var restDiv = (num1 % num2);

        alert("Soma = " + soma + "\nSubtração = " + sub + "\nProduto = " + produto + "\nDivisão = " + div + "\nResto da Divisão = " + restDiv);
    
        let resposta = confirm("Você tem certeza de que deseja continuar?");


        if (resposta) {
                alert("Você escolheu 'OK'");
        } else {
                alert("Você escolheu 'Cancelar'");
        }