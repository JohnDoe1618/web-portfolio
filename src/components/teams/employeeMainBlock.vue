<template>
    <section
    class="employee-info-block"
    :id="infoSectionId" 
    >
        <previewImageBlock 
        :main-id="previewId"
        :data="mainTeamsStore.widgetData?.preview"
        />
        <previewSummaryBlock 
        :main-id="summaryId"
        :data="mainTeamsStore.widgetData?.about"
        />
    </section>
</template>

<script setup>
import previewImageBlock from '@/components/teams/previewImageBlock.vue';
import previewSummaryBlock from '@/components/teams/previewSummaryBlock.vue';
import { useAnimTeamsStore } from '@/stores/teams/animStore';
import { useMainTeamsStore } from '@/stores/teams/mainStore';
import { onMounted, watch } from 'vue';

// #####################################  COMPOSABLES  ###################################
const animStore = useAnimTeamsStore();
const mainTeamsStore = useMainTeamsStore();


// #####################################  DATA  ###################################
const { animationIds: { infoSection, preview, summary } } = animStore;
const previewId = preview[0];
const summaryId = summary[0];
const infoSectionId = infoSection[0];

watch(() => mainTeamsStore.widgetData, (data) => {
    console.log('WATCH', data);
});

onMounted(() => {
})

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