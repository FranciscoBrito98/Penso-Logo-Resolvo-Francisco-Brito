function Sum(){
    var FirstNumber = parseInt(document.getElementById('FNumber').value);
    var secondNumber = parseInt(document.getElementById('SNumber').value);
    var result = FirstNumber + secondNumber

    alert('A soma entre os dois número é: ' + result);
}

function Subtractation(){
    var FirstNumber = parseInt(document.getElementById('FNumber').value);
    var secondNumber = parseInt(document.getElementById('SNumber').value);
    var result = FirstNumber - secondNumber

    alert('A subtração entre os dois número é:' + result);
}

function Multiplication(){
    var FirstNumber = parseInt(document.getElementById('FNumber').value);
    var secondNumber = parseInt(document.getElementById('SNumber').value);
    var result = FirstNumber * secondNumber

    alert('A multiplicação entre os dois número é: ' + result);
}

function Division(){
    var FirstNumber = parseInt(document.getElementById('FNumber').value);
    var secondNumber = parseInt(document.getElementById('SNumber').value);
    var result = FirstNumber / secondNumber

    alert('A divisão entre os dois número é: ' + result);
}