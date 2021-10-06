function calcular() {
    let name = document.getElementById('inputName').value
    let altura = parseFloat(document.getElementById('inputAltura').value)
    let peso = parseFloat(document.getElementById('inputPeso').value)
    let imgResposta = document.getElementById('imcImg')
    altura /= 100

    let imc = peso / (altura * altura)
    imc = imc.toFixed(2)
    const txtResultado = document.getElementById('txtResultado')
    var classificacao = '';

    if (imc < 16) {
        imgResposta.src = 'imgs/magreza.jpg'
        classificacao = 'Baixo peso muito grave';

    } else if (imc >= 16 && imc <= 16.99) {
        imgResposta.src = 'imgs/abaixodopesograve.jpg'
        classificacao = 'Baixo peso grave';

    } else if (imc >= 17 && imc <= 18.49) {
        imgResposta.src = 'imgs/Abaixodopeso.jpg'
        classificacao = 'Baixo peso';

    } else if (imc >= 18.50 && imc <= 24.99) {
        imgResposta.src = 'imgs/Pesonormal.jpg'
        classificacao = 'Peso normal';

    } else if (imc >= 25 && imc <= 29.99) {
        imgResposta.src = 'imgs/Sobrepeso.jpg'
        classificacao = 'Sobrepeso';

    } else if (imc >= 30 && imc <= 34.99) {
        imgResposta.src = 'imgs/obgrau1.jpg'
        classificacao = 'Obesidade grau I';

    } else if (imc >= 35 && imc <= 39.99) {
        imgResposta.src = 'imgs/obgrau2.jpg'
        classificacao = 'Obesidade grau II';

    } else { //se não estiver enquadrado em nenhum critério acima, imc só pode ser maiorque 40
        imgResposta.src = 'imgs/obgrau3.jpg'
        classificacao = 'Obesidade grau III';
    }
    txtResultado.innerText = name + ' possui índice de massa corporal igual a ' + imc + ' sendo classificado como: ' + classificacao

}