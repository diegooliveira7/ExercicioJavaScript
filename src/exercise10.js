
//E.10 Faça uma função que receba 2 parâmetros: um array de movies e um array de actors. 
//A função deve retornar um array de movies, onde cada movie possui a propriedade actors, 
//que sera um array com os nomes dos atores. Por ex:


window.exercise10 = function() {
    var status = document.getElementById('group10').style.display;
    if(status === "none"){
        document.getElementById('group10').style.display = 'block';
        check10();
    }else{
        document.getElementById('group10').style.display = 'none'
    }
};

function check10(){
    const movies = [
        { id: 1, name: 'Joker' },
        { id: 2, name: 'Parasite' },
        { id: 3, name: 'Avengers' },
        { id: 4, name: 'Her' }
    ]
    const actors = [
        { id: 1, name: 'Cho Yeo-jeong', movie_ids: [2] },
        { id: 2, name: 'Robert Downey Jr.', movie_ids: [3] },
        { id: 3, name: 'Joaquin Phoenix', movie_ids: [1, 4] },
        { id: 4, name: 'Scarlett Johansson', movie_ids: [3] }
    ]

    let y = moviesAc(movies,actors);
    printMovies(y);
}

//Função receb dois arrays e cria outro incluindo os autores
function moviesAc(movies, actors){
    let y = [];
    for(let movie in movies){
        let x = {id: movies[movie].id, name: movies[movie].name, actors: []};
        for (let i = 0; i < actors.length; i++) {
            for (let j = 0; j < actors[i].movie_ids.length; j++) {
                if(actors[i].movie_ids[j] == movies[movie].id){
                    x.actors.push(actors[i].name);
                }
            }
        }
        y.push(x);
    }
    return y;
}

//Essa função fica somente para imprimir os dados na tela
function printMovies(movies){ 
    let text = "";
    for (let i = 0; i < movies.length; i++) {
        let text_ac = "";
        text = text + movies[i].name + ",";
        for (let j = 0; j < movies[i].actors.length; j++) {
            text_ac = text_ac + " " + movies[i].actors[j] + " ";
        }
        text = text + text_ac + "<br>";
    }

    document.getElementById('camp10').innerHTML = text;
}





