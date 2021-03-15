

window.exercise03 = function() {//Verificação se está ou não exibida
    var status = document.getElementById('group3').style.display;
    if(status === "none"){
        document.getElementById('group3').style.display = 'block';
    }else{
        document.getElementById('group3').style.display = 'none'
    }

};

//Função que troca as letras baseado nos indices e valores
function changeC(){
    const objectt = {
        4: 'a', 
        3: 'e', 
        1: 'i', 
        5: 's'
    }
    let frase = document.getElementById('campC1').value;
    for (atributo in objectt) {
        let letra = "";
        for (let i = 0; i < frase.length; i++) {
            letra = frase[i].toLowerCase();//convertendo a letra para maiscula e passando para a variável letra
            if(letra === objectt[atributo]){
                frase = frase.replace(frase[i], atributo);
            }
            
        }
    }

    document.getElementById('answer3').innerHTML = 'Frase: '+ frase;
}
