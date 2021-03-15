
window.exercise02 = function() {//Verificação se está ou não exibida
    var status = document.getElementById('group2').style.display;
    if(status === "none"){
        document.getElementById('group2').style.display = 'block';
    }else{
        document.getElementById('group2').style.display = 'none'
    }

};

//Função que retira os números e coloca $
function change(){
    let frase = document.getElementById('campB1').value;

    for (let i = 0; i <= frase.length; i++) {//For pecorre todos as letras da frase
        if(!isNaN(frase[i])){//Verificando se são números 
            if(frase[i] !== " "){//Verificando se o que passou pelo if anterior não é um espaço, mas sim um número
                frase = frase.replace(frase[i],"$");//Trocando
            }
                
        }
        
    }
    document.getElementById('answer2').innerHTML = "Frase: "+frase;
}


