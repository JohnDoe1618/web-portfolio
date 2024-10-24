<template>
    <div class="team-view">
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
import useAnimationTeams from '@/composables/teams/animation';

// #####################################  COMPOSABLES  ###################################
const route = useRoute();
const mainTeamsStore = useMainTeamsStore();
const teamsComposable = useTeamsComposable()


// #####################################  DATA  ###################################


// #####################################  METHODS  ###################################
const { chooseAnotherWidget, initCurrentWidget, filledWidgetData } = teamsComposable;
const { debounceWatcher } = mainTeamsStore;
const { showSection } = useAnimationTeams();

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
    showSection();

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