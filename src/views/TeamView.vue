<template>
    <div class="team-view">
        <section class="employee-info-block">
            <previewImageBlock :id="previewId" :main-id="previewId"/>
            <previewSummaryBlock :id="summaryId" :main-id="summaryId"/>
        </section>
    </div>
</template>


<script setup>
import previewImageBlock from '@/components/teams/previewImageBlock.vue';
import previewSummaryBlock from '@/components/teams/previewSummaryBlock.vue';
import { useAnimTeamsStore } from '@/stores/teams/animStore';
import { onMounted, ref } from 'vue';

const previewId = ref('teams-preview-block');       //  айдишник блока с Картинкой члена команды. Нужен для анимации появления/скрытия 
const summaryId = ref('teams-summary-block');       //  айдишник блока с Описанием члена команды. Нужен для анимации появления/скрытия 

const { executeAllTeamsAnimation } = useAnimTeamsStore()
onMounted(() => {
    // Провяление анимаций
    executeAllTeamsAnimation([
        { id: previewId.value, config: { delay: 300, duration: 0.4, scale: 1, opacity: 1, transform: { x: 0, y: 0 } } },
        { id: summaryId.value, config: { delay: 300, duration: 0.4, scale: 1, opacity: 1, transform: { x: 0, y: 0 } } },
    ]);

    // // Ичезновение 
    // setTimeout(() => {
    //     executeAllTeamsAnimation([
    //         { id: previewId.value, config: { delay: 0, duration: 0.4, scale: 0, opacity: 0, transform: { x: -350, y: 0 } } },
    //         { id: summaryId.value, config: { delay: 0, duration: 0.4, scale: 0, opacity: 0, transform: { x: 350, y: 0 } } },
    //     ]);
    // }, 3400)
});
</script>

<style scoped>
.team-view {
    width: 100vw;
    height: calc(var(--router-layout-height) + 1vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.employee-info-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 1200px;
    height: 68%;
    border: 1px solid var(--base-border-color);
    border-radius: var(--base-rounded);
}
#teams-preview-block {
    scale: 0.5;
    opacity: 0;
    transform: translate(-350px, 0px);
}
#teams-summary-block {
    scale: 0.5;
    opacity: 1;
    transform: translate(350px, 0px);
}
</style>