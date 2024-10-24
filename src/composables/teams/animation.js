import { useMainTeamsStore } from "@/stores/teams/mainStore";
import gsap from "gsap";

export default function useAnimationTeams() {

    // ##############################   COMPOSABLES   ##########################
    const mainTeamStore = useMainTeamsStore();


    // ##############################   DATA   ##########################
    const { animationIds: { preview: [prevId, childrens], summary, infoSection }} = mainTeamStore;
    const nameElId = childrens['name'];
    const jobtitleElId = childrens['jobtitle'];
    const lnkbtnElId = childrens['lnkbtn'];
    const previewId = prevId;
    const summaryId = summary[0];
    const infoSectionId = infoSection[0];


    // ##############################   METHODS   ##########################
    function clearTimerLnkBtn() {
        // if(mainTeamStore.lnkBtn.timerId) mainTeamStore.lnkBtn.stoppedValue = mainTeamStore.lnkBtn.value;
        clearInterval(mainTeamStore.lnkBtn.timerId);
        mainTeamStore.lnkBtn.timerId = null;
    }
    // Анимация отрисовки текста
    function showTextAnimation(
        input='', 
        callback = (output='', done=false) => {}, 
        config = { duration: 200 },
    ) {
        try {
            if(!input) throw 'input required arg';
            let output = '';
            let index = 0;
            clearTimerLnkBtn();
            const { stoppedValue } = mainTeamStore.lnkBtn;
            if(stoppedValue) {
                computeNewInput = stoppedValue
                mainTeamStore.lnkBtn.value = stoppedValue;
            }
            mainTeamStore.lnkBtn.timerId = setInterval(() => {
                output += input.at(index);
                // Выход из анимации
                if(output.length >= input.length) {
                    clearTimerLnkBtn()
                    mainTeamStore.lnkBtn.stoppedValue = null;
                    return callback(output, true);
                }
                mainTeamStore.lnkBtn.stoppedValue = output;
                callback(output, false);
                index++;
            }, config.duration)
        } catch (err) {
            throw err;
        }
    }

    // Анимация скрытия текста
    function hideTextAnimation(
        input='', 
        callback = (output='', done=false) => {}, 
        config = { duration: 200, direction: 'to' /* left | right */ },
    ) {
        try {
            if(!input) throw 'input required arg';
            const correctConfig = { duration: 200, direction: 'left', ...config }
            let computeNewInput = input;
            clearTimerLnkBtn();
            // stoppedValue - состояние хранит значение которое было получено на момент аварийной остановки 
            // какого-либо таймера, который выполнялся ранее
            const { stoppedValue } = mainTeamStore.lnkBtn;
            if(stoppedValue) {
                computeNewInput = stoppedValue
                mainTeamStore.lnkBtn.value = stoppedValue;
            }
            mainTeamStore.lnkBtn.timerId = setInterval(() => {
                if(correctConfig.direction === 'left') computeNewInput = computeNewInput.slice(0, -1);
                else if (correctConfig.direction === 'right') computeNewInput = computeNewInput.slice(1);
                // Выход из анимации
                if(computeNewInput.length === 0) {
                    clearTimerLnkBtn();
                    mainTeamStore.lnkBtn.stoppedValue = null;
                    return callback(computeNewInput, true);
                }
                callback(computeNewInput, false);
            }, correctConfig.duration)
        } catch (err) {
            throw err;
        }
    }

    // Применение анимации для кнопки "Связаться"
    function animateLnkBtnText({ mode, duration, direction }/* 'hide' | 'show' */) {
        return new Promise((resolve, reject) => {
            // lnkBtnTitle.value = '';
            if(mode === 'hide') {
                hideTextAnimation(mainTeamStore.lnkBtn.example, (result, done) => {
                    mainTeamStore.lnkBtn.value = result;
                    if(done === true) {
                        resolve(result)
                    }
                }, { direction: direction ?? 'right', duration: duration ?? 80 });
            }
            else if (mode === 'show') {
                showTextAnimation(mainTeamStore.lnkBtn.example, (result, done) => {
                    mainTeamStore.lnkBtn.value = result;
                    if(done === true) {
                        resolve(result)
                    }
                }, { duration: duration ?? 80 });
            }
        });
    }

    // Анимация отображает секцию и её внутрениие элементы
    async function showSection(duration, delay) {
        // Отображение общего контейнера
        await gsap.to(`#${infoSectionId}`, { 
            duration: 0.1, 
            delay: delay ?? 0.2,
            opacity: 1,
            width: 1200,
        })
        // Отображение Внутренних элементов контейнера
        await Promise.all([
            gsap.to(`#${previewId}`, { 
                duration: duration ?? 0.18, 
                delay: delay ?? 0.1,
                scale: 1, 
                opacity: 1, 
                transform: `translate(0, 0px)`
            }),
            gsap.to(`#${summaryId}`, { 
                duration: duration ?? 0.18, 
                delay: delay ?? 0.1,
                scale: 1, 
                opacity: 1, 
                transform: `translate(0, 0px)`
            }),
        ]);
        // Отобразить внутренние элементы Preview-картинки
        await previewImageInnerShowAnim(0.18, 0);
    }

    // Анимация скрывает секцию и внутренние её элементы
    async function hideSection(duration, delay) {
        // Скрыть внутренние элементы Preview-картинки
        await previewImageInnerHideAnim(0.18, 0.1);
        // Скрытие Внутренних элементов контейнера
        await Promise.all([
            gsap.to(`#${previewId}`, { 
                duration: duration ?? 0.18, 
                delay: delay ?? 0.1,
                scale: 0, 
                opacity: 0, 
                transform: `translate(-350px, 0px)`
            }),
            gsap.to(`#${summaryId}`, { 
                duration: duration ?? 0.18, 
                delay: delay ?? 0.1,
                scale: 0, 
                opacity: 0, 
                transform: `translate(350px, 0px)`
            }),
        ])
        // Скрытие общего контейнера
        await gsap.to(`#${infoSectionId}`, { 
            duration: 0.1, 
            delay: 0,
            opacity: 0.3,
            width: '50px',
        })
    }

    // Анимация скрытия внутренних элементов Превью картинки
    async function previewImageInnerHideAnim(duration=0.18, delay=0.4) {
        let [dur, del] = [duration, delay];
        const tl = gsap.timeline();
        animateLnkBtnText({ mode: 'hide', duration: 50, direction: 'right' });
        await tl.to(`#${nameElId}`, { duration: dur, delay: del, opacity: 0, transform: 'translateX(150px)' });
        await tl.to(`#${jobtitleElId}`, { duration: dur, opacity: 0, transform: 'translateX(150px)' });
        await tl.to(`#${lnkbtnElId}`, { duration: dur, opacity: 0, transform: 'translateX(150px)' });
    }


    // Стартовая анимация вложенных элементов при начальной отрисовке компонента
    async function previewImageInnerShowAnim(duration=0.18, delay=0.4) {
        try {
            let [dur, del] = [duration, delay];
            const tl = gsap.timeline();
            await tl.to(`#${nameElId}`, { duration: dur, delay: del, opacity: 1, transform: 'translateX(0px)' });
            await tl.to(`#${jobtitleElId}`, { duration: dur, opacity: 1, transform: 'translateX(0px)' });
            await tl.to(`#${lnkbtnElId}`, { duration: dur, opacity: 1, transform: 'translateX(0px)' });
            await animateLnkBtnText({ mode: 'show', duration: 80 });
        } catch (err) {
            throw err;
        }
    }

    return {
        animateLnkBtnText,
        previewImageInnerHideAnim,
        previewImageInnerShowAnim,
        showSection,
        hideSection,
    }
}