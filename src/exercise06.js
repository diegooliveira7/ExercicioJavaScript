
//E.6 Imprima a soma das idades (sugestão: utilizar o método reduce)



window.exercise06 = function() {//Verificação se está ou não exibida
    var status = document.getElementById('group6').style.display;
    if(status === "none"){
        document.getElementById('group6').style.display = 'block';
        check6();
    }else{
        document.getElementById('group6').style.display = 'none'
    }
};


//Função que soma as idades e retorna a soma 
function check6(){
    let group = [
        {id: 1, first_name: 'Juca', last_name: 'Da Silva', age: 42},
        {id: 2, first_name: 'Daniel', last_name: 'Gonçalves',  age: 21},
        {id: 3, first_name: 'Matheus', last_name: 'Garcia', age: 28},
        {id: 4, first_name: 'Gabriel', last_name: 'Dorneles',  age: 21}
    ]

    const reduce = group.reduce((a,b) => a + b.age,0);

    document.getElementById('camp6').innerHTML = 'Soma das idades: ' + reduce;
}
  

