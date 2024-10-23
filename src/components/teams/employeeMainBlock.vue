<template>
    <section
    class="employee-info-block"
    :id="infoSectionId" 
    >
        <previewImageBlock 
        :main-id="previewId"
        :data="widgetData?.preview"
        />
        <previewSummaryBlock 
        :main-id="summaryId"
        :data="widgetData?.about"
        />
    </section>
</template>

<script setup>
import previewImageBlock from '@/components/teams/previewImageBlock.vue';
import previewSummaryBlock from '@/components/teams/previewSummaryBlock.vue';
import { useMainTeamsStore } from '@/stores/teams/mainStore';
import { useAnimTeamsStore } from '@/stores/teams/animStore';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';


const animStore = useAnimTeamsStore();
const mainTeamStore = useMainTeamsStore();
const { animationIds: { infoSection, preview, summary } } = animStore;
const previewId = preview[0];
const summaryId = summary[0];
const infoSectionId = infoSection[0];
const route = useRoute();

const widgetData = ref(null);

// Получение данных открытого виджета
function findWidgetData(id) {
    try {
        return mainTeamStore.teams.find((value) => value.widget == id)
    } catch (err) {
        throw err;
    }
}

// Отслеживание изменения
watch(() => route.params['id'], (newValue, oldValue) => {
    if(!!newValue && !!oldValue) {
        widgetData.value = findWidgetData(+newValue);
    }
})

onMounted(() => {
    widgetData.value = findWidgetData(route.params['id'])
});
</script>


<style scoped>
.employee-info-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 1200px;
    opacity: 1;
    height: 68%;
    border: 1px solid var(--base-border-color);
    border-radius: var(--base-rounded);
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    transition: width 0.3s;
}
#teams-preview-block {
    /* scale: 0.4;
    opacity: 0;
    transform: translate(-350px, 0px); */
    scale: 1;
    opacity: 1;
    transform: translate(0px, 0px);
}
#teams-summary-block {
    /* scale: 0.4;
    opacity: 0;
    transform: translate(350px, 0px); */
    scale: 1;
    opacity: 1;
    transform: translate(0px, 0px);
}
</style>