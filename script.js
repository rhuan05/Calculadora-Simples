var select = document.getElementById('select');
var calculo = document.querySelector('.calculo');

function selectAlterado(){
    var selectEscolhido = select.options[select.selectedIndex].value;
    if(selectEscolhido === 'soma'){
        calculo.innerHTML = '+';
    } else if (selectEscolhido === 'subtracao') {
        calculo.innerHTML = '-';
    } else if (selectEscolhido === 'multiplicacao'){
        calculo.innerHTML = 'x';
    } else {
        calculo.innerHTML = '÷';
    }
    return selectEscolhido;
}

function digitouMais3(elemento){
    var tamanhoInput = Number(elemento.value.length);
    elemento.style.width = `${20 * tamanhoInput}px`;
}

function verResultado(){
    var result = document.querySelector('.result');
    var nmr1 = document.getElementById('nmr1');
    var nmr1Valor = Number(nmr1.value);
    var nmr2 = document.getElementById('nmr2');
    var nmr2Valor = Number(nmr2.value);
    if(nmr1.value.length === 0 || nmr2.value.length === 0){
        result.innerHTML = 'Preencha todos os campos.';
    } else if (selectAlterado() == 'soma'){
        result.innerHTML = `${nmr1Valor + nmr2Valor}`;
    } else if (selectAlterado() == 'subtracao'){
        result.innerHTML = `${nmr1Valor - nmr2Valor}`;
    } else if (selectAlterado() == 'multiplicacao'){
        result.innerHTML = `${nmr1Valor * nmr2Valor}`;
    } else {
        result.innerHTML = `${nmr1Valor / nmr2Valor}`;
    }
}