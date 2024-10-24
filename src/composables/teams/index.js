import { useMainTeamsStore } from '@/stores/teams/mainStore';
import { useRoute, useRouter } from 'vue-router';
import useAnimationTeams from './animation';

export function useTeamsComposable() {

    // ##############################   COMPOSABLES   ##########################
    const mainTeamStore = useMainTeamsStore();
    const animTeamsComposable = useAnimationTeams();
    const route = useRoute();
    const router = useRouter();

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
        // 1. Скрытие текущего контейнера
        await animTeamsComposable.hideSection();
        // 2. Навигационный переход на другого участника команды
        // В этот момент компонент TeamsView отслеживает и применяет обновление данных виджета по id из роута
        await router.push({
            name: "selectedEmployee",
            params: { id: mainTeamStore.currentWidget },
        });
        // 3. Отображение контейнера с новыми данными
        await animTeamsComposable.showSection(0.18, 0.2);
    }

    // Включение виджета (смена активного виджета другим)
    function chooseAnotherWidget({ direction }) {
        try {
            updateCounterWidget({ direction });
            handlerChangeWidget();
        } catch (err) {
            if(err?.type === 'nothing') return;
        }
    }

    // Установка айдишника открытого виджета на данный момент
    function initCurrentWidget() {
        mainTeamStore.currentWidget = +route.params['id'];
    } 

    return {
        chooseAnotherWidget,
        initCurrentWidget,
        filledWidgetData,
    };
}
