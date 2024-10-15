<template>
    <div class="filter_group mb-5">
        <primary-button class="filter_button_item" v-for="it in buttonsFilterGroupList" :key="it.id"
            :color-text-hex="it.colorText" :color-hex="it.colorHex" :outlined="it.outlined" :text="it.text"
            @click="selectFilterGroupItem(it)"></primary-button>
    </div>
    <span style="margin-top: 10px; color: white; font-size: 17px;">Категория: {{ selectedFilterGroupItem?.text }}</span>
</template>

<script setup>
import PrimaryButton from '@/components/ui/Buttons/PrimaryButton.vue';

const props = defineProps({
    buttonsFilterGroupList: Array,
    selectFilterGroupItem: Object,
    selectedFilterGroupItem: Object,
})

</script>

<style scoped>
.filter_group {
    width: 100%;
    height: fit-content;
    display: flex;
}

.filter_button_item {
    margin-left: 20px;
}

.filter_button_item:first-child {
    margin: 0;
}
</style>
