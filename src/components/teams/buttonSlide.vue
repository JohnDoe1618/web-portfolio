<template>
    <Button 
    class="btn-slide"
    :icon="`pi pi-angle-${props.iconDirection}`" 
    outlined
    />
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    iconDirection: {
        type: String,
        required: true,
        validator: (value) => ['left', 'right'].includes(value),
    }
})

</script>

<style scoped>
.btn-slide {
    color: white;
}
</style>