<template>
    <h1>{{texto}}</h1>
</template>

<script>
export default {
    props: {
        texto: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>

</style>