import { ref, nextTick } from 'vue';
import gsap from 'gsap';


export function usePreviewImage(props) {
    // #######################################   DATA   #######################################
    const isLoadingImg = ref(false);
    const nameElId = ref('tm-pr-name');
    const jobtitleElId = ref('tm-pr-jobtitle');
    const lnkbtnElId = ref('tm-pr-lnkbtn');


    // #######################################   METHODS   #######################################
    // Сбрасывает основные данные компонента (например при именении роута)
    function resetDataComponent() {
        isLoadingImg.value = false;
    }

    // Стартовая анимация вложенных элементов при начальной отрисовке компонента
    async function initInnerAnimation(duration=0.18, delay=0.4) {
        try {
            let dur = duration;
            let del = delay;
            const tl = gsap.timeline();
            await tl.to(`#${nameElId.value}`, { duration: dur, delay: del, opacity: 1, transform: 'translateX(0px)' });
            await tl.to(`#${jobtitleElId.value}`, { duration: dur, opacity: 1, transform: 'translateX(0px)' });
            await tl.to(`#${lnkbtnElId.value}`, { duration: dur, opacity: 1, transform: 'translateX(0px)' });
        } catch (err) {
            throw err;
        }
    }

    // Установить значение стиелей по умолчанию для внутренних элементов превью-блока
    function setDefaultStylesInnerItems() {
        let innerElements = ['tm-pr-name', 'tm-pr-jobtitle', 'tm-pr-lnkbtn']
        innerElements.forEach((el) => {
            const docEl = document.getElementById(el);
            docEl.style.position = 'relative';
            docEl.style.transform = 'translateX(150px)';
            docEl.style.opacity = 0;
        });
    }




    return {
        isLoadingImg,
        initInnerAnimation,
        setDefaultStylesInnerItems,
    }
}