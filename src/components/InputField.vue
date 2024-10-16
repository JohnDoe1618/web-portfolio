<template>
    <div class="input-field">
        <span class="error" v-if="error">{{ error }}</span>
        <input :id="id" v-model="props.modelValue" :placeholder="placeholder" :autocomplete="autocomplete"
            @input="$emit('update:modelValue', modelValue)" class="input" />
    </div>
</template>

<script setup>
const props = defineProps({
    modelValue: String,
    id: String,
    placeholder: String,
    autocomplete: {
        type: String,
        default: 'off'
    },
    error: String
});
</script>

<style scoped>
.input-field {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

.input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.error {
    color: red;
    font-size: 12px;
    margin-bottom: 4px;
}
</style>