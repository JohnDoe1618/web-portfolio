<template>
    <div class="blurred-box service__item" :style="{ ...blurBoxStyle, marginTop: '10px', display: 'flex' }">
        <div class="service__inner_container">
            <div class="top__container">
                <img :src="props.icon" class="service__icon">
                <span class="service__label">{{ props.label }}</span>
            </div>
            <div class="down__container">{{ props.desc }}</div>
        </div>
    </div>
</template>

<script setup>
import { useBlurBox } from '@/components/ui/Effects/blurred.box';
const { blurBoxStyle } = useBlurBox({ width: '400px', height: '230px' });

const props = defineProps({
    icon: String,
    label: String,
    desc: String,
})
</script>

<style scoped>

.service__inner_container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.service__inner_container .top__container {
    width: 100%;
    height: fit-content;
    padding: 5px;
    display: flex;
    align-items: center;
}

.top__container .service__icon {
    width: 50px;
    height: 50px;
    object-fit: contain;
    border-radius: 10rem;
    margin-right: 15px;
}

.top__container .service__label {
    font-size: 15px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 500;
    color: white;
}

.service__inner_container .down__container {
    width: 100%;
    height: fit-content;
    margin-top: 10px;
    padding: 5px;
    display: flex;
    text-align: start;
    text-wrap: wrap;
    color: rgb(219, 219, 219);
}

</style>
