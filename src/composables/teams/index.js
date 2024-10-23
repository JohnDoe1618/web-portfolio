import { useAnimTeamsStore } from '@/stores/teams/animStore';
import { useMainTeamsStore } from '@/stores/teams/mainStore';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export function useTeamsComposable() {

    // ##############################   COMPOSABLES   ##########################
    const animStore = useAnimTeamsStore();
    const { 
        animationIds: { infoSection, preview, summary }, 
        executeAllTeamsAnimation, 
        infoSectionAnim, 
    } = animStore;
    const mainTeamStore = useMainTeamsStore();
    const route = useRoute();
    const router = useRouter();

    // ##############################   DATA   ###################################
    const previewId = preview[0];
    const summaryId = summary[0];
    const infoSectionId = infoSection[0];
    const currentWidget = ref(1);


    // ##############################   METHODS   ###################################
    // Выбрать предыдущий виджет
    async function choosePrevWidget() {
        if (currentWidget.value - 1 <= 0) {
            return;
        }
        // await hideSection();
        currentWidget.value--;
        await router.push({
            name: "selectedEmployee",
            params: { id: currentWidget.value },
        });
        // await showSection();
    }

    // Выбрать следующий виджет
    async function chooseNextWidget() {
        if ( (currentWidget.value + 1) > mainTeamStore.teams.length ) {
            return;
        }
        // await hideSection();
        currentWidget.value++;
        await router.push({ name: 'selectedEmployee', params: { id: currentWidget.value } })
        // await showSection();
    }

    // Анимация отображает секцию и её внутрениие элементы
    async function showSection() {
        // Основной виджет
        await infoSectionAnim(infoSectionId, { delay: 0.3, duration: 0.2 });
        // Внутренние виджеты
        await executeAllTeamsAnimation([
            { id: previewId, config: { delay: 100, duration: 0.4, scale: 1, opacity: 1, transform: { x: 0, y: 0 } } },
            { id: summaryId, config: { delay: 100, duration: 0.4, scale: 1, opacity: 1, transform: { x: 0, y: 0 } } },
        ]);
    }

    // Анимация скрывает секцию и внутренние её элементы
    async function hideSection() {
        await executeAllTeamsAnimation([
            { id: previewId, config: { delay: 0, duration: 0.4, scale: 0, opacity: 0, transform: { x: -350, y: 0 } } },
            { id: summaryId, config: { delay: 0, duration: 0.4, scale: 0, opacity: 0, transform: { x: 350, y: 0 } } },
        ])
        await infoSectionAnim(infoSectionId, { delay: 0.2, duration: .4, isFade: true, width: 50, opacity: 0 });
    }

    function initCurrentWidget() {
        currentWidget.value = +route.params['id'];
    } 

    return {
        choosePrevWidget,
        chooseNextWidget,
        showSection,
        hideSection,
        initCurrentWidget,
    };
}
