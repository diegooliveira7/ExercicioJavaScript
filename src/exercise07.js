
//E.7 Encontre o primeiro objeto que possui uma pessoa com a idade menor que 25 e imprima seu nome. 
//Caso não encontre, imprima que nenhum resultado foi encontrado.

window.exercise07 = function() {
    
    var status = document.getElementById('group7').style.display;
    if(status === "none"){
        document.getElementById('group7').style.display = 'block';
        check7();
    }else{
        document.getElementById('group7').style.display = 'none'
    }

};

function check7(){
    let group = [
        {id: 1, first_name: 'Juca', last_name: 'Da Silva', age: 42},
        {id: 2, first_name: 'Daniel', last_name: 'Gonçalves',  age: 21},
        {id: 3, first_name: 'Matheus', last_name: 'Garcia', age: 28},
        {id: 4, first_name: 'Gabriel', last_name: 'Dorneles',  age: 21}
    ]

    let value = 0;
    for (let i = 0; i < group.length; i++) {
        if(group[i].age < 25){
            document.getElementById('camp7').innerHTML = group[i].first_name;
            value = 1;
            break;
        }
    }
    if(value != 1){
        document.getElementById('camp7').innerHTML = "Nenhum resultado foi engraçado!";
    }
}


