<template>
    <h1 class="aboutUs-text">{{ props.text }}</h1>
</template>

<script setup>

const props = defineProps({
    text: String,
})

</script>
<style scoped>

.aboutUs-text {
    font-size: 18px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-wrap: wrap;
    color: #ffffff;
    line-height: 1.5;
}

</style>