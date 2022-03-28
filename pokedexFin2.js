const pokecard = document.querySelector('[data-pokecard]');
const pokenombre = document.querySelector('[data-poke-nombre]');
const pokefigura = document.querySelector('[data-poke-figura]');
const pokefiguracontenedor = document.querySelector('[data-poke-figura-contenedor]');
const tittipos = document.querySelector('[tit-tipos]');
const titstats = document.querySelector('[tit-stats]');
const titmoves = document.querySelector('[tit-moves]');
const pokemoves = document.querySelector('[data-poke-moves]');
const pokestats = document.querySelector('[data-poke-stats]');
const poketipos = document.querySelector('[data-poke-tipos]');

const fetchPokemon = () => {
  const pokeName = document.getElementById("pokeName");
  let pokeInput = pokeName.value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
  fetch(url).then((res) => {
    if (res.status != "200") {
        console.log(res);
        pokeImage("./pokerror.jpg");
        pokenombre.textContent = 'No se encontro';
        tittipos.textContent = '';
        titstats.textContent = '';
        titmoves.textContent = '';
        poketipos.innerHTML = '';
        pokestats.innerHTML = '';
        pokemoves.innerHTML = '';
    }
    else{
        return res.json();  
    }
  }).then((data) => {
     console.log(data);
    let pokeimg = data.sprites.front_default;
     console.log(pokeimg);
     pokeImage(pokeimg);
     pokenombre.textContent = data.name;
     tittipos.textContent = 'TIPOS'
     titstats.textContent = 'ESTADISTICAS'
     titmoves.textContent = 'MOVIMIENTOS'
     const { stats, types, moves } = data;
     genpokemontipos(types);
     genpokemonstats(stats);
     genpokemonmoves(moves); 
  })
}

//fetchPokemon();

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;


}

const genpokemonmoves = moves => {
    pokemoves.innerHTML = '';
    moves.forEach(move => {
      const typeTextElement = document.createElement("div");
      typeTextElement.textContent = move.move.name;
      pokemoves.appendChild(typeTextElement);
      
    });
}

const genpokemonstats = stats => {
    pokestats.innerHTML = '';
    stats.forEach(stat => {
      const statElement = document.createElement("div");
      const statElementName = document.createElement("div"); 
      const statElementAmount = document.createElement("div");
      statElementName.textContent = stat.stat.name;
      statElementAmount.textContent = stat.base_stat;
      statElement.appendChild(statElementName);
      statElement.appendChild(statElementAmount);
      pokestats.appendChild(statElement);
         
    });
    
}

const genpokemontipos = types => {
  poketipos.innerHTML = '';
  types.forEach(type => {
    const typeTextElement = document.createElement("div");
    typeTextElement.textContent = type.type.name;
    poketipos.appendChild(typeTextElement);
    
  });
}

//const imprimir = () => {
//    const pokeName = document.getElementById("pokeName");
//    let pokeInput = pokeName.value;
//    console.log("Hola " + pokeInput);
//}