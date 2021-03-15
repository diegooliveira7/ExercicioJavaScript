
//E.5 Imprima uma mensagem de saudação com o nome completo para cada um dos objetos.



window.exercise05 = function() {
    var status = document.getElementById('group5').style.display;
    if(status === "none"){
        document.getElementById('group5').style.display = 'block';
        check5();
    }else{
        document.getElementById('group5').style.display = 'none'
    }
};

function check5(){
    let group = [
        {id: 1, first_name: 'Juca', last_name: 'Da Silva', age: 42},
        {id: 2, first_name: 'Daniel', last_name: 'Gonçalves',  age: 21},
        {id: 3, first_name: 'Matheus', last_name: 'Garcia', age: 28},
        {id: 4, first_name: 'Gabriel', last_name: 'Dorneles',  age: 21}
    ]
    let name = "";
    for (let i = 0; i < group.length; i++) {

        name = name + " " + "Olá, "+group[i].first_name +" "+group[i].last_name + "<br>";
        

        console.log("Olá, "+group[i].first_name +" "+group[i].last_name);
    }
    document.getElementById('camp5').innerHTML = name;
}







