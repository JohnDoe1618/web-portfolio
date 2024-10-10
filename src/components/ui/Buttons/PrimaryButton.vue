<template>
    <div>
        <Button :label="text" :outlined="outlined" :style="buttonStyle" />
    </div>
</template>

<script setup>
// Import
import { reactive } from 'vue';

// Init
const props = defineProps({
    text: String,
    outlined: Boolean,
    colorHex: String,
    colorTextHex: String,
})

// Bind styles
const buttonStyle = reactive({
    "border": `1px solid ${props.colorHex}`,
    "backgroundColor": !props.outlined ? props.colorHex : '',
    "color": props.colorTextHex,
})

</script>