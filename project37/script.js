const poke_container = document.getElementById('poke-container')
const poke_count = 150
const colors = {
    fire:'#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}


const fetchPokemons = async() => {
    for (let i=1; i<=poke_count; i++) {
        await getPokemon(i)

    }
}
const getPokemon =async (id) => {
    const url =`https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)

}

const createPokemonCard =(pokemon) => {
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    const pokemoninnerHTML=` <div class="img-container">
    <img src="https://images.unsplash.com/photo-1627693685101-687bf0eb1222?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGlrYWNodXxlbnwwfHwwfHx8MA%3D%3D" alt="">
</div>
<div class="info">
    <span class="number">#001</span>
    <h3 class="name">Pikachu</h3>
    <small class="type">Type: <span>Land</span></small>
</div>`

pokemonEl.innerHTML = pokemoninnerHTML
poke_container.appendChild(pokemonEl)

}

fetchPokemons()