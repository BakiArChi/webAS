async function spsp(URL) {
    const response = await fetch(URL);
    const data = await response.json()
    console.log(data);
}

async function poke(id1, id2) {
    const response1 = await fetch("https://pokeapi.co/api/v2/pokemon/" + id1);
    const pj1 = await response1.json();

    const response2 = await fetch("https://pokeapi.co/api/v2/pokemon/" + id2);
    const pj2 = await response2.json();

    if (pj1.stats[1].base_stat > pj2.stats[1].base_stat) {
        console.log("el personaje 1 tiene mas es",pj1.name," daño con ", pj1.stats[1].base_stat);
    } else {
        console.log("el personaje 2 tiene mas",pj2.name," daño con ", pj2.stats[1].base_stat);
    }




}
spsp("https://pokeapi.co/api/v2/pokemon/?limit=1000000");