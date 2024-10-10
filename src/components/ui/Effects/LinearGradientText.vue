<template>
    <div>
        <h1 class="textH1" :style="textStyle">{{ text }}</h1>
    </div>
</template>

<script setup>
import { reactive, defineProps } from 'vue';

const props = defineProps({
    fontSizePx: Number,
    fontWeight: Number,
    leftColorHex: String,
    rightColorHex: String,
})

const textStyle = reactive({
    "font-size": `${props.fontSizePx}px`,
    "font-weight": props.fontWeight,
    background: `linear-gradient(to right, ${props.leftColorHex}, ${props.rightColorHex})`
})

</script>

<style scoped>
.textH1 {
    /* Для обрезки фона по тексту */
    -webkit-background-clip: text;
    /* Делаем текст прозрачным */
    -webkit-text-fill-color: transparent;
    /* Смещение */
    text-wrap: wrap;
}
</style>