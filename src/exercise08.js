//E.8 Imprima todos os elementos em que a idade é menor que 30.

window.exercise08 = function() {//Verificação se está ou não exibida

    var status = document.getElementById('group8').style.display;
    if(status === "none"){
        document.getElementById('group8').style.display = 'block';
        check8();
    }else{
        document.getElementById('group8').style.display = 'none'
    }
};

//Função para descobrir as pessoas que tem a idade menor que 30 anos.
function check8(){
    
    let group = [
        {id: 1, first_name: 'Juca', last_name: 'Da Silva', age: 42},
        {id: 2, first_name: 'Daniel', last_name: 'Gonçalves',  age: 21},
        {id: 3, first_name: 'Matheus', last_name: 'Garcia', age: 28},
        {id: 4, first_name: 'Gabriel', last_name: 'Dorneles',  age: 21}
    ]

    let value = 0;
    let text = "";
    for (let i = 0; i < group.length; i++) {
        if(group[i].age < 30){
            text = text + group[i].first_name + "<br>";
            value = 1;
        }
    }
    if(value == 1){
        document.getElementById('camp8').innerHTML = text;
    }
}


