const API_URL = "https://pokeapi.co/api/v2/";

// make an API call to "Pokemon API" to get a list of pokemons
const apiCall = async (endpoint) => {
    const response = await fetch(`${API_URL}${endpoint}`);
    const data = await response.json();
    return data;
};

// get a list of pokemons
export const fetchPokemons = async (count = 151) => {
    return apiCall(`pokemon?limit=${count}`);
};

// fetch specific pokemon data
export const fetchPokemonData = async (pokemonId) => {
    return apiCall(`pokemon/${pokemonId}`);
};
