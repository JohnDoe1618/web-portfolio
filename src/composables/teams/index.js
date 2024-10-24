import { useAnimTeamsStore } from '@/stores/teams/animStore';
import { useMainTeamsStore } from '@/stores/teams/mainStore';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useAnimationTeams from './animation';
// import { images } from '@/assets/preview';


export function useTeamsComposable() {

    // ##############################   COMPOSABLES   ##########################
    const animStore = useAnimTeamsStore();
    const { 
        animationIds: { infoSection, preview, summary }, 
        executeAllTeamsAnimation, 
        infoSectionAnim, 
    } = animStore;
    const mainTeamStore = useMainTeamsStore();
    const animTeamsComposable = useAnimationTeams();
    const route = useRoute();
    const router = useRouter();

    // ##############################   DATA   ###################################
    const previewId = preview[0];
    const summaryId = summary[0];
    const infoSectionId = infoSection[0];

    // ##############################   METHODS   ###################################
    // Поиск данных виджета по его ID и заполнение объекта 
    function filledWidgetData(id) {
        try {
            mainTeamStore.widgetData = mainTeamStore.teams.find((value) => value.widget == id);
        } catch (err) {
            throw err;
        }
    }

    // Обновляет айдишник открытого виджета при отрисовке нового виджета
    function updateCounterWidget({ direction }) {
        if(direction === 'less') {
            if (mainTeamStore.currentWidget - 1 <= 0) {
                throw { type: 'nothing' };
            }
            mainTeamStore.currentWidget--;
        }
        else if (direction === 'greater') {
            if ( (mainTeamStore.currentWidget + 1) > mainTeamStore.teams.length ) {
                throw { type: 'nothing' };
            }
            mainTeamStore.currentWidget++;
        }
    }

    // Функция обрабатывает случай включения другого виджета (изменение текущего открытого виджета)
    async function handlerChangeWidget() {
        // 1
        // await hideSection();
        // 2
        // await router.push({
        //     name: "selectedEmployee",
        //     params: { id: mainTeamStore.currentWidget },
        // });
        // 3
        // await showSection();
    }

    // Выбрать предыдущий виджет
    function choosePrevWidget() {
        try {
            updateCounterWidget({ direction: 'less' });
            handlerChangeWidget();
        } catch (err) {
            if(err?.type === 'nothing') console.log('Всё нормально')
        }
    }

    // Выбрать следующий виджет
    async function chooseNextWidget() {
        try {
            updateCounterWidget({ direction: 'greater' });
            handlerChangeWidget();
        } catch (err) {
            if(err?.type === 'nothing') console.log('Всё нормально')
        }
 
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
        // await infoSectionAnim(infoSectionId, { delay: 0.2, duration: .4, isFade: true, width: 50, opacity: 0 });
    }

    function initCurrentWidget() {
        mainTeamStore.currentWidget = +route.params['id'];
    } 

    return {
        choosePrevWidget,
        chooseNextWidget,
        showSection,
        hideSection,
        initCurrentWidget,
        filledWidgetData,
    };
}
