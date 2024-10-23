import { images } from '@/assets/preview';
import { ref, nextTick } from 'vue';
import gsap from 'gsap';


export function usePreviewImage(props) {
    // #######################################   DATA   #######################################
    const lnkBtnTitle = ref('');
    const imageSrc = ref('');
    const isLoadingImg = ref(false);
    const nameElId = ref('tm-pr-name');
    const jobtitleElId = ref('tm-pr-jobtitle');
    const lnkbtnElId = ref('tm-pr-lnkbtn');


    // #######################################   METHODS   #######################################
    // Сбрасывает основные данные компонента (например при именении роута)
    function resetDataComponent() {
        lnkBtnTitle.value = '';
        imageSrc.value = '';
        isLoadingImg.value = false;
    }

    // Применение анимации для кнопки "Связаться"
    function animateLnkBtn() {
        lnkBtnTitle.value = '';
        animStore.initTextAnimation('Связаться', (output) => lnkBtnTitle.value += output, { duration: 80 });
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
            animateLnkBtn();
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

    // Функция отрабатывает в момент обновления или первичной инициализации данных виджета
    async function updatePreviewData() {
        try {
            resetDataComponent();
            isLoadingImg.value = true;
            await nextTick();
            imageSrc.value = importImage(images[props.data?.image]);
        } finally {
            isLoadingImg.value = false;
        }
    }

    // Импорт изображения и корректное создание его URl
    function importImage(imageName) {
        return new URL(`../../assets/preview/${imageName}`, import.meta.url).href;
    }

    return {
        lnkBtnTitle,
        imageSrc,
        isLoadingImg,
        initInnerAnimation,
        setDefaultStylesInnerItems,
        updatePreviewData,
    }
}