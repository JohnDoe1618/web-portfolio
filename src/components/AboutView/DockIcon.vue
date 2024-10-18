<template>
    <img class="dock__icon" v-tooltip.top="props.item.label" :alt="props.item.label" :src="props.item.icon" style="width: 90%" />
</template>

<script setup>

const props = defineProps({
    item: Object,
});

</script>

<style scoped>

.dock__icon:hover {
    cursor: pointer;
    opacity: .5;
    transition: .5s ease;
}

</style>