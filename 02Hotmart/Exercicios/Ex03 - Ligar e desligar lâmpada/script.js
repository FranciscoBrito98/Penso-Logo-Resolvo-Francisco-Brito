function TurnOnOff(){
    var image = document.getElementById('image');

    if(image.src.match('lampadaOFF')){
        image.src = 'src/lampadaON.jpg';
    }
    else
    {
        image.src = 'src/lampadaOFF.jpg';
    }
}