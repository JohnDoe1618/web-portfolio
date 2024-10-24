import { useMainTeamsStore } from "@/stores/teams/mainStore";
import gsap from "gsap";

export default function useAnimationTeams() {

    // ##############################   COMPOSABLES   ##########################
    const mainTeamStore = useMainTeamsStore();


    // ##############################   DATA   ##########################
    const { animationIds: { preview: [_, childrens] } } = mainTeamStore;
    const nameElId = childrens['name'];
    const jobtitleElId = childrens['jobtitle'];
    const lnkbtnElId = childrens['lnkbtn'];


    // ##############################   METHODS   ##########################
    // Анимация отрисовки текста
    function showTextAnimation(
        input='', 
        callback = (output='', done=false) => {}, 
        config = { duration: 200 },
    ) {
        try {
            let output = '';
            if(!input) throw 'input required arg';
            for (let i = 0; i < input.length; i++) {
                const element = input.at(i);
                setTimeout(() => {
                    output += element;
                    if(output.length >= input.length) {
                        return callback(output, true);
                    }
                    callback(output, false);
                }, i*config.duration);
            }
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
            for (let i = 0; i < computeNewInput.length; i++) {
                setTimeout(() => {
                    if(correctConfig.direction === 'left') computeNewInput = computeNewInput.slice(0, -1);
                    else if (correctConfig.direction === 'right') computeNewInput = computeNewInput.slice(1);
                    if(computeNewInput.length === 0) {
                        return callback(computeNewInput, true);
                    }
                    callback(computeNewInput, false);
                }, i*correctConfig.duration);
            }
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


    // Анимация скрытия внутренних элементов Превью картинки
    async function previewImageInnerHideAnim(duration=0.18, delay=0.4) {
        let [dur, del] = [duration, delay];
        const tl = gsap.timeline();
        animateLnkBtnText({ mode: 'hide', duration: 50, direction: 'right' });
        await tl.to(`#${nameElId.value}`, { duration: dur, delay: del, opacity: 1, transform: 'translateX(0px)' });
        await tl.to(`#${jobtitleElId.value}`, { duration: dur, opacity: 1, transform: 'translateX(0px)' });
        await tl.to(`#${lnkbtnElId.value}`, { duration: dur, opacity: 1, transform: 'translateX(0px)' });
    }


    // Стартовая анимация вложенных элементов при начальной отрисовке компонента
    async function initInnerAnimation(duration=0.18, delay=0.4) {
        try {
            let [dur, del] = [duration, delay];
            const tl = gsap.timeline();
            await tl.to(`#${nameElId.value}`, { duration: dur, delay: del, opacity: 1, transform: 'translateX(0px)' });
            await tl.to(`#${jobtitleElId.value}`, { duration: dur, opacity: 1, transform: 'translateX(0px)' });
            await tl.to(`#${lnkbtnElId.value}`, { duration: dur, opacity: 1, transform: 'translateX(0px)' });
        } catch (err) {
            throw err;
        }
    }

    return {
        initInnerAnimation,
        animateLnkBtnText,

    }
}