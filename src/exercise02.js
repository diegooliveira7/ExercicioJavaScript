
window.exercise02 = function() {
    var status = document.getElementById('group2').style.display;
    if(status === "none"){
        document.getElementById('group2').style.display = 'block';
    }else{
        document.getElementById('group2').style.display = 'none'
    }

};

function change(){
    let frase = document.getElementById('campB1').value;

    for (let i = 0; i <= frase.length; i++) {
        if(!isNaN(frase[i])){
            if(frase[i] !== " "){
                frase = frase.replace(frase[i],"$");
            }
                
        }
        
    }
    document.getElementById('answer2').innerHTML = "Frase: "+frase;
}


