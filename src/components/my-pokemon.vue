<template>
    <button @click="getPokemon">Get Pokemon</button>

    <div v-for="(pokemon, i) in pokemons">
        <h4 :key="i">{{ pokemon.name }}</h4>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Pokemon {
    name: string;
    url: string;
}
const pokemons = ref([] as Pokemon[]);
async function getPokemon(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    const pokemon = await response.json()
    console.log(pokemon)
    pokemons.value = pokemon.results
}
    
</script>

<style scoped>

</style>