<template>
    <div class="team-view">
        <button class="fixed right-0 top-0 p-4" @click="stopTimerById">STOP</button>
        <buttonSlide 
        icon-direction="left"
        @click="() => chooseAnotherWidget({ direction: 'less' })"
        />

        <RouterView />

        <buttonSlide 
        icon-direction="right"
        @click="() => chooseAnotherWidget({ direction: 'greater' })"
        />
    </div>
</template>


<script setup>
import buttonSlide from '@/components/teams/buttonSlide.vue';
import { onMounted, ref, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import { useTeamsComposable } from '@/composables/teams';
import { useMainTeamsStore } from '@/stores/teams/mainStore';

// #####################################  COMPOSABLES  ###################################
const route = useRoute();
const mainTeamsStore = useMainTeamsStore();
const teamsComposable = useTeamsComposable()


// #####################################  DATA  ###################################


// #####################################  METHODS  ###################################
const { chooseAnotherWidget, initCurrentWidget, filledWidgetData } = teamsComposable;
const { debounceWatcher, stopTimerById } = mainTeamsStore;

// #####################################  WATCHERS  ###################################
// Отслеживание изменения параметра маршрута id
watch(() => route.params['id'], debounceWatcher((newValue, oldValue) => {
    if(!!newValue && !!oldValue) {
        filledWidgetData(+newValue);
    }
}))


// #####################################  HOOKS  ###################################
onMounted(async () => {
    // Получение данных виджета при монитировании
    filledWidgetData(route.params['id'])

    // Инициализация номера текущего виджета
    initCurrentWidget();

    // Анимация отображения виджета с уже полученными данными

    // Провяление анимаций
    // await showSection();

    // // Ичезновение 
    // setTimeout(async () => {
    //     await executeAllTeamsAnimation([
    //         { id: previewId.value, config: { delay: 0, duration: 0.4, scale: 0, opacity: 0, transform: { x: -350, y: 0 } } },
    //         { id: summaryId.value, config: { delay: 0, duration: 0.4, scale: 0, opacity: 0, transform: { x: 350, y: 0 } } },
    //     ])
    //     await infoSectionAnim(infoSectionId.value, { delay: 0.2, duration: .4, isFade: true, width: 50, opacity: 0 });
    // }, 3400)

    // Адаптив
    // window.addEventListener('resize', debounce((e) => {
    //     adaptiveInfoSection(e.target.outerWidth, e.target.outerHeight);
    // }, 100));
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
</style>