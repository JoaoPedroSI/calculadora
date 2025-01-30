const resultado = document.querySelector('#resultado');

document.querySelector('#soma').addEventListener('click', () => {
    const n1 = parseFloat(document.querySelector('#n1').value);
    const n2 = parseFloat(document.querySelector('#n2').value);
    resultado.value = n1 + n2;
});

document.querySelector('#subtracao').addEventListener('click', () => {
    const n1 = parseFloat(document.querySelector('#n1').value);
    const n2 = parseFloat(document.querySelector('#n2').value);
    resultado.value = n1 - n2;
});

document.querySelector('#multiplicacao').addEventListener('click', () => {
    const n1 = parseFloat(document.querySelector('#n1').value);
    const n2 = parseFloat(document.querySelector('#n2').value);
    resultado.value = n1 * n2;
});

document.querySelector('#divisao').addEventListener('click', () => {
    const n1 = parseFloat(document.querySelector('#n1').value);
    const n2 = parseFloat(document.querySelector('#n2').value);
    
    if (n2 !== 0) {
        resultado.value = n1 / n2;
    } else {
        resultado.value = "Não é possível dividir por 0";
    }
});