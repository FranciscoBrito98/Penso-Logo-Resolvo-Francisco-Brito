function Rock(){
    var random = Math.floor(Math.random() * 3) + 1;

    if(random == 1){
        alert('A escolha da máquina foi pedra, então ficou empatado!')
    }
    else{
        if(random == 2){
            alert('A escolha da máquina foi papel, então ficou perdeste!')
        }
        else{
            alert('A escolha da máquina foi tesoura, então ficou ganhaste!')
        }
    }
}

function Paper(){
    var random = Math.floor(Math.random() * 3) + 1;

    if(random == 1){
        alert('A escolha da máquina foi pedra, então ficou ganhaste!')
    }
    else{
        if(random == 2){
            alert('A escolha da máquina foi papel, então ficou empate!')
        }
        else{
            alert('A escolha da máquina foi tesoura, então ficou derrota!')
        }
    }
}

function Scissors(){
    var random = Math.floor(Math.random() * 3) + 1;

    if(random == 1){
        alert('A escolha da máquina foi pedra, então ficou derrota!')
    }
    else{
        if(random == 2){
            alert('A escolha da máquina foi papel, então ficou ganhaste!')
        }
        else{
            alert('A escolha da máquina foi tesoura, então ficou empate!')
        }
    }
}