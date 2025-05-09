let NombreUno, NombreDos, Nombre3, Nombre4, Nombre5, Nombre6
let ImagenUno, ImagenDos, Imagen3, Imagen4, imagen5, imagen6

let AtaqueUno = 0
let Atkdos = 0
let defensauno = 0
let defdos


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
                        AtaqueUno = data.stats[i].base_stat;
                    }
                    if (data.stats[i].stat.name === 'defense') {
                        document.getElementById('defPokemonUno').innerHTML = (' defensa: ' + data.stats[i].base_stat)
                        defensauno = data.stats[i].base_stat;
                    }
                }

            }
            break;
            case 1:{
                NombreDos = document.getElementById('TituloPokemonUno').innerHTML = (data.name)
                ImagenDos = document.getElementById('ImagenPokemonUno').src = data.sprites.front_default
        
                for (let i = 0; i < data.stats.length; i++) {
                    if (data.stats[i].stat.name === 'attack') {
                        document.getElementById('listaPokemonUno').innerHTML = (' Daño: ' + data.stats[i].base_stat)
                        AtaqueUno = data.stats[i].base_stat;
                    }
                    if (data.stats[i].stat.name === 'defense') {
                        document.getElementById('defPokemonUno').innerHTML = (' defensa: ' + data.stats[i].base_stat)
                        defensauno = data.stats[i].base_stat;
                    }
                }

            }
            break;
            case 2:{
                Nombre3 = document.getElementById('TituloPokemonUno').innerHTML = (data.name)
                Imagen3 = document.getElementById('ImagenPokemonUno').src = data.sprites.front_default
        
                for (let i = 0; i < data.stats.length; i++) {
                    if (data.stats[i].stat.name === 'attack') {
                        document.getElementById('listaPokemonUno').innerHTML = (' Daño: ' + data.stats[i].base_stat)
                        AtaqueUno = data.stats[i].base_stat;
                    }
                    if (data.stats[i].stat.name === 'defense') {
                        document.getElementById('defPokemonUno').innerHTML = (' defensa: ' + data.stats[i].base_stat)
                        defensauno = data.stats[i].base_stat;
                    }
                }

            }
            break;
            case 3:{
                Nombre4 = document.getElementById('TituloPokemonUno').innerHTML = (data.name)
                Imagen4 = document.getElementById('ImagenPokemonUno').src = data.sprites.front_default
        
                for (let i = 0; i < data.stats.length; i++) {
                    if (data.stats[i].stat.name === 'attack') {
                        document.getElementById('listaPokemonUno').innerHTML = (' Daño: ' + data.stats[i].base_stat)
                        AtaqueDos = data.stats[i].base_stat;
                    }
                    if (data.stats[i].stat.name === 'defense') {
                        document.getElementById('defPokemonUno').innerHTML = (' defensa: ' + data.stats[i].base_stat)
                        defensaDos = data.stats[i].base_stat;
                    }
                }

            }
            break;
            case 4:{
                Nombre5 = document.getElementById('TituloPokemonUno').innerHTML = (data.name)
                Imagen5 = document.getElementById('ImagenPokemonUno').src = data.sprites.front_default
        
                for (let i = 0; i < data.stats.length; i++) {
                    if (data.stats[i].stat.name === 'attack') {
                        document.getElementById('listaPokemonUno').innerHTML = (' Daño: ' + data.stats[i].base_stat)
                        AtaqueDos = data.stats[i].base_stat;
                    }
                    if (data.stats[i].stat.name === 'defense') {
                        document.getElementById('defPokemonUno').innerHTML = (' defensa: ' + data.stats[i].base_stat)
                        defensaDos = data.stats[i].base_stat;
                    }
                }

            }
            break;
            case 2:{
                Nombre6 = document.getElementById('TituloPokemonUno').innerHTML = (data.name)
                Imagen6 = document.getElementById('ImagenPokemonUno').src = data.sprites.front_default
        
                for (let i = 0; i < data.stats.length; i++) {
                    if (data.stats[i].stat.name === 'attack') {
                        document.getElementById('listaPokemonUno').innerHTML = (' Daño: ' + data.stats[i].base_stat)
                        AtaqueDos = data.stats[i].base_stat;
                    }
                    if (data.stats[i].stat.name === 'defense') {
                        document.getElementById('defPokemonUno').innerHTML = (' defensa: ' + data.stats[i].base_stat)
                        defensados = data.stats[i].base_stat;
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

    if ((AtakUno - defensados) > (AtakDos - defensauno)) {
        document.getElementById('TituloPokemonGanador').innerHTML = (NombreUno)
        document.getElementById('ImagenPokemonGanador').src = (ImagenUno)
        document.getElementById('listaPokemonGanador').innerHTML = (' Daño: ' + AtakUno)
    } else if ((AtakDos - defensauno) > (AtakUno - defensados)) {
        document.getElementById('TituloPokemonGanador').innerHTML = (NombreDos)
        document.getElementById('ImagenPokemonGanador').src = (ImagenDos)
        document.getElementById('listaPokemonGanador').innerHTML = (' Daño: ' + AtakDos)
    } else {
        document.getElementById('TituloPokemonGanador').innerHTML = ('EMPATE')
        document.getElementById('listaPokemonGanador').innerHTML = ('Elige otro pokemon')
        //POKEMON PARA EMPATE: 300 y 299
    }
}





