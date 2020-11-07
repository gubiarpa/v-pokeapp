<template>
  <div>
    <Titulo :texto="name" />
    <img :src="image" :alt="name" :title="name.toUpperCase()" />
  </div>
</template>

<script>
import Titulo from "../components/Titulo";
export default {
    components: {
        Titulo,
    },
    data() {
        return {
            name: '',
            image: ''
        }
    },
    methods: {
        async getPokemon() {
            try {
                const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}/`);
                const obj = await data.json();
                this.name = obj.name;
                this.image = obj.sprites.other.dream_world.front_default;
            } catch (error) {
                console.log(error);
            }
        }
    },
    created () {
        this.getPokemon();
    },
}
</script>

<style>

</style>