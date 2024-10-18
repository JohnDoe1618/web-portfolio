<template>
    <div class="team-view">
        <buttonSlide icon-direction="left"/>
        <div>
            
        </div>
        <section 
        :id="infoSectionId" 
        class="employee-info-block"
        v-for="item in mainTeamStore.teams"
        :key="item.id"
        >
            <previewImageBlock 
            :main-id="previewId"
            :preview-data="item.preview"
            />
            <previewSummaryBlock 
            :main-id="summaryId"
            />
        </section>
        <buttonSlide icon-direction="right"/>
    </div>
</template>


<script setup>
import previewImageBlock from '@/components/teams/previewImageBlock.vue';
import previewSummaryBlock from '@/components/teams/previewSummaryBlock.vue';
import buttonSlide from '@/components/teams/buttonSlide.vue';
import { useAnimTeamsStore } from '@/stores/teams/animStore';
import { onMounted } from 'vue';
import { useMainTeamsStore } from '@/stores/teams/mainStore';

const animStore = useAnimTeamsStore();
const mainTeamStore = useMainTeamsStore();
const { previewId, summaryId, infoSectionId } = animStore;

const { executeAllTeamsAnimation, infoSectionAnim, adaptiveInfoSection, debounce } = useAnimTeamsStore()
onMounted(async () => {
    // Провяление анимаций
    await infoSectionAnim(infoSectionId, { delay: 0.3, duration: 0.2 });
    await executeAllTeamsAnimation([
        { id: previewId, config: { delay: 100, duration: 0.4, scale: 1, opacity: 1, transform: { x: 0, y: 0 } } },
        { id: summaryId, config: { delay: 100, duration: 0.4, scale: 1, opacity: 1, transform: { x: 0, y: 0 } } },
    ]);

    // // Ичезновение 
    // setTimeout(async () => {
    //     await executeAllTeamsAnimation([
    //         { id: previewId.value, config: { delay: 0, duration: 0.4, scale: 0, opacity: 0, transform: { x: -350, y: 0 } } },
    //         { id: summaryId.value, config: { delay: 0, duration: 0.4, scale: 0, opacity: 0, transform: { x: 350, y: 0 } } },
    //     ])
    //     await infoSectionAnim(infoSectionId.value, { delay: 0.2, duration: .4, isFade: true, width: 50, opacity: 0 });
    // }, 3400)
    console.log(window.outerHeight);
    window.addEventListener('resize', debounce((e) => {
        adaptiveInfoSection(e.target.outerWidth, e.target.outerHeight);
    }, 100));
});
</script>

<style scoped>
.team-view {
    width: 100vw;
    overflow: hidden;
    height: calc(var(--router-layout-height) + 1vh);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
}
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