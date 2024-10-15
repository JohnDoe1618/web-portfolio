<template>
    <glitch-text :text="props.text"></glitch-text>
</template>

<script setup>
import GlitchText from '../ui/Effects/GlitchText.vue';

const props = defineProps({
    text: String,
})

</script>
