
function maiorNumero() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    
    const maior = Math.max(num1, num2, num3);
    document.getElementById('resultadoMaior').textContent = `Resultado: O maior número é ${maior}`;
}

function ordenarCrescente() {
    const num4 = parseFloat(document.getElementById('num4').value);
    const num5 = parseFloat(document.getElementById('num5').value);
    const num6 = parseFloat(document.getElementById('num6').value);

    const numeros = [num4, num5, num6];
    numeros.sort((a, b) => a - b);
    document.getElementById('resultadoOrdenacao').textContent = `Resultado: Números em ordem crescente: ${numeros.join(', ')}`;
}

function verificarPalindromo() {
    const texto = document.getElementById('texto').value.toUpperCase().replace(/\s/g, '');
    const textoReverso = texto.split('').reverse().join('');
    
    if (texto === textoReverso) {
        document.getElementById('resultadoPalindromo').textContent = `Resultado: A palavra é um palíndromo!`;
    } else {
        document.getElementById('resultadoPalindromo').textContent = `Resultado: A palavra NÃO é um palíndromo.`;
    }
}


function verificarTriangulo() {
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);

    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        if (lado1 === lado2 && lado2 === lado3) {
            document.getElementById('resultadoTriangulo').textContent = `Resultado: Triângulo Equilátero`;
        } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
            document.getElementById('resultadoTriangulo').textContent = `Resultado: Triângulo Isósceles`;
        } else {
            document.getElementById('resultadoTriangulo').textContent = `Resultado: Triângulo Escaleno`;
        }
    } else {
        document.getElementById('resultadoTriangulo').textContent = `Resultado: Não forma um triângulo`;
    }
}
