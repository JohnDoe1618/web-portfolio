<template>
    <Dialog class="p-2" v-model:visible="props.visibleMoreCaseDialog" modal
        :header="`Подронее о проекте: ${selectedProject?.name}`" :style="{ width: '55rem' }">
        <div class="mcd_main_content">
            <div v-if="selectedProject != {} || selectedProject != null" class="mcd_image_section">
                <img v-for="image in selectedProject?.images" :src="image" class="mcd_image">
            </div>
            <div class="mcd_info_section">
                <span class="ctc">Задача проекта:</span>
                <h6 class="cdc">{{ selectedProject?.detailInfo.objective }}</h6>
                <span class="mt-3 ctc">Реализация:</span>
                <h6 class="cdc">{{ selectedProject?.detailInfo.realization }}</h6>
                <span class="mt-3 ctc">Используемые технологии:</span>
                <div class="flex flex-wrap justify-center gap-2 mt-2">
                    <Tag v-for="tag in selectedProject?.detailInfo.technologyUsed" :key="tag.id" :value="tag.label">
                    </Tag>
                </div>
                <span class="mt-3 ctc">Время реализации:</span>
                <h6 class="cdc"> ~ {{ selectedProject?.detailInfo.timeRealization }}</h6>
            </div>
        </div>

        <template #closeicon>
            <div @click="$emit('closeDialog', false)">
                X
            </div>
        </template>
    </Dialog>
</template>

<script setup>
import Dialog from 'primevue/dialog';
import Tag from 'primevue/tag';

const props = defineProps({
    selectedProject: Object,
    visibleMoreCaseDialog: Boolean,
})

</script>

<style scoped>
.mcd_main_content {
    width: 100%;
    height: 500px;
    padding: 12px;
    display: flex;
    overflow: auto;
}

.mcd_image_section {
    flex: 0 0 40%;
    padding: 10px;
    display: flex;
    flex-direction: column;
}

.mcd_image {
    width: 100%;
    height: 180px;
    margin-top: 10px;
    border-radius: 10px;
}

.mcd_info_section {
    flex: 1;
    padding: 30px;
    display: flex;
    flex-direction: column;
}

/* Общий класс для title */
/* .common_title_class */
.ctc {
    font-weight: 700;
    color: #565e63;
}

/* Общий класс для описаний desc */
/* .common_desc_class */
.cdc {
    font-size: 14px;
}
</style>
