<template>
    <section
    class="employee-info-block"
    :id="infoSectionId" 
    >
        <previewImageBlock 
        :data="mainTeamsStore.widgetData?.preview"
        />
        <previewSummaryBlock 
        :data="mainTeamsStore.widgetData?.about"
        />
    </section>
</template>

<script setup>
import previewImageBlock from '@/components/teams/previewImageBlock.vue';
import previewSummaryBlock from '@/components/teams/previewSummaryBlock.vue';
import { useMainTeamsStore } from '@/stores/teams/mainStore';

// #####################################  COMPOSABLES  ###################################
const mainTeamsStore = useMainTeamsStore();

// ##############################   DATA   ##########################
const { animationIds: { infoSection }} = mainTeamsStore;
const infoSectionId = infoSection[0];
</script>


<style scoped>
.employee-info-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50px;
    opacity: 0.3;
    height: 68%;
    border: 1px solid var(--base-border-color);
    border-radius: var(--base-rounded);
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px;
    transition: width 0.3s;
}
#teams-preview-block {
    scale: 0.4;
    opacity: 0;
    transform: translate(-350px, 0px);
}
#teams-summary-block {
    scale: 0.4;
    opacity: 0;
    transform: translate(350px, 0px);
}
</style>