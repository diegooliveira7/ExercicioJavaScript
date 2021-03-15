

window.exercise01 = function() {//Verificação se está ou não exibida
    var status = document.getElementById('group1').style.display;
    if(status === "none"){
        document.getElementById('group1').style.display = 'block';
    }else{
        document.getElementById('group1').style.display = 'none'
    }

};

//Função que verifica os campos 
function Check1(){
    var camp1 = document.getElementById('camp1').value;
    var camp2 = document.getElementById('camp2').value;
    
    if(camp1.length > camp2.length){
        document.getElementById('answer1').innerHTML = '<p>Resposta: '+ camp1 +'</p>';
    }else{
        document.getElementById('answer1').innerHTML = '<p>Resposta: '+ camp2 +'</p>';
    }
}


