<template>
  <div>
    <Titulo texto="Lista de Pokemones" />
    <div v-for="(item, index) in pokemonList" :key="item">
      <router-link :to="`/pokemones/${index + 1}`">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script>
import Titulo from "../components/Titulo";
export default {
    name: 'Pokemones',
    components: {
        Titulo
    },
    data() {
      return {
        pokemonList: []
      }
    },
    methods: {
      async getPokemonList() {
        try {
          const data = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151'); // traemos de la API
          const obj = await data.json(); // configuramos
          this.pokemonList = obj.results;
        } catch (error) {
          console.log(error);
        }
      }
    },
    created() {
      this.getPokemonList();
    }
}
</script>

<style>

</style>