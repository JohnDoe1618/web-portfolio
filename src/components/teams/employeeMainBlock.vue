<template>
    <section
    class="employee-info-block"
    :id="infoSectionId" 
    >
        <previewImageBlock 
        :main-id="previewId"
        :preview-data="widgetData?.preview"
        />
        <previewSummaryBlock 
        :main-id="summaryId"
        />
    </section>
</template>

<script setup>
import previewImageBlock from '@/components/teams/previewImageBlock.vue';
import previewSummaryBlock from '@/components/teams/previewSummaryBlock.vue';
import { useMainTeamsStore } from '@/stores/teams/mainStore';
import { useAnimTeamsStore } from '@/stores/teams/animStore';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


const animStore = useAnimTeamsStore();
const mainTeamStore = useMainTeamsStore();
const { previewId, summaryId, infoSectionId } = animStore;
const route = useRoute();

const widgetData = ref(null);

function findWidgetData() {
    try {
        return mainTeamStore.teams.find((value) => value.widget == route.params['id'])
    } catch (err) {
        throw err;
    }
}

onMounted(async () => {
    widgetData.value = findWidgetData();
});


</script>
<style scoped>
.employee-info-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50px;
    opacity: 0;
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