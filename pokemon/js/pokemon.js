let NombreUno, NombreDos, Nombre3, Nombre4, Nombre5, Nombre6
let ImagenUno, ImagenDos, Imagen3, Imagen4, imagen5, imagen6

let AtaqueUno = 0
let AtaqueDos =0
let defensauno = 0
let defensaDos = 0

let dado1= 0
let dado2= 0




document.getElementById('IngresoPokemon').addEventListener('click',

    async function () {

        await PrimerPokemon(6)
        PokemonGanador(AtaqueUno, AtaqueDos)
    })


async function PrimerPokemon(cant) {
    for (let i = 0; i < cant; i++) {

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1025)}`)
        const data = await response.json()
        switch (i) {
            case 0:{
                NombreUno = document.getElementById('TituloPokemonUno').innerHTML = (data.name)
                ImagenUno = document.getElementById('ImagenPokemonUno').src = data.sprites.front_default
        
                for (let i = 0; i < data.stats.length; i++) {
                    if (data.stats[i].stat.name === 'attack') {
                        document.getElementById('listaPokemonUno').innerHTML = (' Daño: ' + data.stats[i].base_stat)
                        AtaqueUno =AtaqueUno+ data.stats[i].base_stat;
                    }
                    if (data.stats[i].stat.name === 'defense') {
                        document.getElementById('defPokemonUno').innerHTML = (' defensa: ' + data.stats[i].base_stat)
                        defensauno =defensauno+ data.stats[i].base_stat;
                    }
                }

            }
            break;
            case 1:{
                NombreDos = document.getElementById('TituloPokemonDos').innerHTML = (data.name)
                ImagenDos = document.getElementById('ImagenPokemonDos').src = data.sprites.front_default
        
                for (let i = 0; i < data.stats.length; i++) {
                    if (data.stats[i].stat.name === 'attack') {
                        document.getElementById('listaPokemonUno').innerHTML = (' Daño: ' + data.stats[i].base_stat)
                        AtaqueUno =AtaqueUno+ data.stats[i].base_stat;
                    }
                    if (data.stats[i].stat.name === 'defense') {
                        document.getElementById('defPokemonUno').innerHTML = (' defensa: ' + data.stats[i].base_stat)
                        defensauno =defensauno+ data.stats[i].base_stat;
                    }
                }

            }
            break;
            case 2:{
                Nombre3 = document.getElementById('TituloPokemonTres').innerHTML = (data.name)
                Imagen3 = document.getElementById('ImagenPokemonTres').src = data.sprites.front_default
        
                for (let i = 0; i < data.stats.length; i++) {
                    if (data.stats[i].stat.name === 'attack') {
                        document.getElementById('listaPokemonUno').innerHTML = (' Daño: ' + data.stats[i].base_stat)
                        AtaqueUno =AtaqueUno+ data.stats[i].base_stat;
                    }
                    if (data.stats[i].stat.name === 'defense') {
                        document.getElementById('defPokemonUno').innerHTML = (' defensa: ' + data.stats[i].base_stat)
                        defensauno =defensauno+ data.stats[i].base_stat;
                    }
                }

            }
            break;
            case 3:{
                Nombre4 = document.getElementById('TituloPokemon4').innerHTML = (data.name)
                Imagen4 = document.getElementById('ImagenPokemon4').src = data.sprites.front_default
        
                for (let i = 0; i < data.stats.length; i++) {
                    if (data.stats[i].stat.name === 'attack') {
                        document.getElementById('listaPokemonDos').innerHTML = (' Daño: ' + data.stats[i].base_stat)
                        AtaqueDos =AtaqueDos+ data.stats[i].base_stat;
                    }
                    if (data.stats[i].stat.name === 'defense') {
                        document.getElementById('defPokemonDos').innerHTML = (' defensa: ' + data.stats[i].base_stat)
                        defensaDos =defensaDos+ data.stats[i].base_stat;
                    }
                }

            }
            break;
            case 4:{
                Nombre5 = document.getElementById('TituloPokemon5').innerHTML = (data.name)
                Imagen5 = document.getElementById('ImagenPokemon5').src = data.sprites.front_default
        
                for (let i = 0; i < data.stats.length; i++) {
                    if (data.stats[i].stat.name === 'attack') {
                        document.getElementById('listaPokemonDos').innerHTML = (' Daño: ' + data.stats[i].base_stat)
                        AtaqueDos =AtaqueDos +data.stats[i].base_stat;
                    }
                    if (data.stats[i].stat.name === 'defense') {
                        document.getElementById('defPokemonDos').innerHTML = (' defensa: ' + data.stats[i].base_stat)
                        defensaDos =defensaDos+ data.stats[i].base_stat;
                    }
                }

            }
            break;
            case 5:{
                Nombre6 = document.getElementById('TituloPokemon6').innerHTML = (data.name)
                Imagen6 = document.getElementById('ImagenPokemon6').src = data.sprites.front_default
        
                for (let i = 0; i < data.stats.length; i++) {
                    if (data.stats[i].stat.name === 'attack') {
                        document.getElementById('listaPokemonDos').innerHTML = (' Daño: ' + data.stats[i].base_stat)
                        AtaqueDos =AtaqueDos+ data.stats[i].base_stat;
                    }
                    if (data.stats[i].stat.name === 'defense') {
                        document.getElementById('defPokemonDos').innerHTML = (' defensa: ' + data.stats[i].base_stat)
                        defensados =defensaDos+ data.stats[i].base_stat;
                    }
                }

            }
            break;
            default:
                break;
            }
        }
}


async function PokemonGanador(AtakUno, AtakDos) {

    if ((AtaqueUno - defensados) > (AtaqueDos - defensauno)) {
        document.getElementById('TituloPokemonGanador').innerHTML = (NombreUno)
        document.getElementById('ImagenPokemonGanador').src = (ImagenUno)
        document.getElementById('TituloPokemonGanador2').innerHTML = (NombreDos)
        document.getElementById('ImagenPokemonGanador2').src = (ImagenDos)
        document.getElementById('TituloPokemonGanador3').innerHTML = (Nombre3)
        document.getElementById('ImagenPokemonGanador3').src = (Imagen3)
        document.getElementById('listaPokemonGanador').innerHTML = (' Daño: ' + AtakUno)
    } else if ((AtaqueDos - defensauno) > (AtaqueUno - defensados)) {
        document.getElementById('TituloPokemonGanador').innerHTML = (Nombre4)
        document.getElementById('ImagenPokemonGanador').src = (Imagen4)
        document.getElementById('TituloPokemonGanador2').innerHTML = (Nombre5)
        document.getElementById('ImagenPokemonGanador2').src = (Imagen5)
        document.getElementById('TituloPokemonGanador3').innerHTML = (Nombre6)
        document.getElementById('ImagenPokemonGanador3').src = (Imagen6)
        document.getElementById('listaPokemonGanador').innerHTML = (' Daño: ' + AtakDos)
    } else {
        document.getElementById('TituloPokemonGanador').innerHTML = ('EMPATE')
        document.getElementById('listaPokemonGanador').innerHTML = ('Elige otro pokemon')
        //POKEMON PARA EMPATE: 300 y 299
    }
}

async function dadomagico(dado1,dado2) {
    for (let i = 0; i < 3; i++) {
        dado1=Math.floor(Math.random() * 5)+1
            if (dado1[i]>dado[i-1]) {
                dado1=dado[i]
            }else{
                dado1=dado1[i-1]
            }
        dado2=Math.floor(Math.random() * 5)+1
            if (dado2[i]>dado[i-1]) {
                dado2=dado[i]
            }else{
                dado2=dado2[i-1]
            }
    }
    
}




