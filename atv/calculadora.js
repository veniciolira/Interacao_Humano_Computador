let resultado = 0;

function operacao(tipo) {
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    if (isNaN(numero1) || isNaN(numero2)) {
        alert('Por favor, insira números válidos');
        return;
    }

    switch(tipo) {
        case 'somar':
            resultado = numero1 + numero2;
            break;
        case 'subtrair':
            resultado = numero1 - numero2;
            break;
        case 'multiplicar':
            resultado = numero1 * numero2;
            break;
        case 'dividir':
            if (numero2 === 0) {
                alert('Divisão por zero não é permitida');
                return;
            }
            resultado = numero1 / numero2;
            break;
    }
    document.getElementById('resultado').innerText = resultado;
}

function confirmar() {
    alert('O resultado da operação é: ' + resultado);
}
