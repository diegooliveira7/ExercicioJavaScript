
//E.9 Ordene o array de forma decrescente por idade, em caso de empate o desempate é pelo id(em ordem crescente).



window.exercise09 = function() {
    var status = document.getElementById('group9').style.display;
    if(status === "none"){
        document.getElementById('group9').style.display = 'block';
        check9();
    }else{
        document.getElementById('group9').style.display = 'none'
    }
    
};

function check9(){
    let group = [
        {id: 1, first_name: 'Juca', last_name: 'Da Silva', age: 42},
        {id: 2, first_name: 'Daniel', last_name: 'Gonçalves',  age: 21},
        {id: 3, first_name: 'Matheus', last_name: 'Garcia', age: 28},
        {id: 4, first_name: 'Gabriel', last_name: 'Dorneles',  age: 21}
    ]

    //Método de Ordenação Bubble Sort
    for (let i = 0; i < group.length; i++) {
        for (let j = 0; j < group.length; j++) {
            if(group[i].age > group[j].age){
                let a = group[i];
                group[i] = group[j];
                group[j] = a;
            }else if(group[i].age === group[j].age){
                if(group[i].id < group[j].id){
                    let a = group[i];
                    group[i] = group[j];
                    group[j] = a;
                }
            }
        }
    }

    //Contrução da string
    let text = "";
    for (let i = 0; i < group.length; i++) {
        text = text + "Idade: " + group[i].age + " " + " - " + group[i].id + " " + " - " + group[i].first_name + "<br>"; 
    }

    document.getElementById('camp9').innerHTML = text;
}








