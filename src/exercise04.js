

//4- Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada imprima o seu endereço no formato 
//‘ENDERECO, NUMERO, CIDADE/ESTADO’. 
//Utilize a fetch API para realizar a requisição.

window.exercise04 = function() {
    var status = document.getElementById('group4').style.display;
    if(status === "none"){
        document.getElementById('group4').style.display = 'block';
    }else{
        document.getElementById('group4').style.display = 'none'
    }
};

function search(){
    let cep = document.getElementById('campC4').value.replace("-","");
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`, options).then(resp =>{ resp.json().then( data => showDate(data))}).catch(erro => console.log('Deu Erro: '+ erro, message));

}

//Eu tomei a liberdade de retornar "NULL" para o usuário
//Na parte de endereço eu coloque número e bairro
function showDate(data){
    console.log(data.cep);
    let text = (data.ddd.length > 0 ? data.ddd + ", " : "Null, ") + (data.bairro.length > 0 ? data.bairro + ", " : "Null, ") + (data.localidade.length > 0 ? data.localidade : "Null") + "/" + ((data.uf.length > 0 ? data.uf : "Null"));
    document.getElementById('camp4').innerHTML = text;
}



