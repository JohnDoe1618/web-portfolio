<!-----------------------------------------------------------TEMPLATE----------------------------------------------------------------------------->
<template>
    <div :id="props.mainId" class="preview-block">
        <div class="preview-block__fg">
            <div class="title-block mt-auto mr-auto mb-6 px-6 mx-4">
                <h2 id="tm-pr-name">{{ props.data?.fullname }}</h2>
                <h4 id="tm-pr-jobtitle" class="ml-3 mb-auto mt-3">{{ props.data?.jobTitle }}</h4>
                <Button 
                id="tm-pr-lnkbtn"
                class="contact-btn " 
                :label="lnkBtnTitle" 
                outlined 
                severity="secondary" 
                />
            </div>
        </div>
        <img v-if="!isLoadingImg" class="preview-block__image" :src="imageSrc" alt="Preview Image">
    </div>
</template>

<!-----------------------------------------------------------SCRIPTS----------------------------------------------------------------------------->

<script setup>
import gsap from 'gsap';
import { ref, defineProps, watch, onMounted, nextTick } from 'vue';
import { useAnimTeamsStore } from '@/stores/teams/animStore';
import { images } from '@/assets/preview';
import { useRoute } from 'vue-router';
// #######################################   COMPOSABLES   #######################################
const animStore = useAnimTeamsStore();

// #######################################   PROPS   #######################################
const props = defineProps({
    mainId: {
        type: String,
        required: false,
        default: null,
    },
    data: {
        type: Object,
        required: false,
        default: null,
    }
});

// #######################################   DATA   #######################################
const lnkBtnTitle = ref('');
const imageSrc = ref('');
const isLoadingImg = ref(false);


// #######################################   COMPOSABLES   #######################################
const route = useRoute();


// #######################################   METHODS   #######################################

// Сбрасывает основные данные компонента (например при именении роута)
function resetDataComponent() {
    lnkBtnTitle.value = '';
    imageSrc.value = '';
    isLoadingImg.value = false;
}

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
        await tl.to('#tm-pr-name', { duration: dur, delay: del, opacity: 1, transform: 'translateX(0px)' });
        await tl.to('#tm-pr-jobtitle', { duration: dur, opacity: 1, transform: 'translateX(0px)' });
        await tl.to('#tm-pr-lnkbtn', { duration: dur, opacity: 1, transform: 'translateX(0px)' });
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

// #######################################   WATCH   #######################################
// Внутренние анимации выпоняются после того как завершится анимация появления главного компонента
watch(() => animStore.animationExecuteState, (newValue) => {
    if(newValue === false) {
        console.log('Animate');
        setDefaultStylesInnerItems();
        initInnerAnimation(0.18, 0);
    }
});

// Изменение виджета. Если виджет меняется, то у ранее открытого виджета сбрасываются данные и откатываются стили для повторного применения анимаций
watch(() => route.params['id'], async (newVal, oldVal) => {
    if(!!newVal && !!oldVal) {
        setDefaultStylesInnerItems();
        updatePreviewData();
    }
})

// Импорт изображения и корректное создание его URl
function importImage(imageName) {
    return new URL(`../../assets/preview/${imageName}`, import.meta.url).href;
}

// #######################################   HOOKS   #######################################
onMounted(async () => {
    console.log('MOUNTED');
    updatePreviewData();
});
</script>

<!----------------------------------------------------------STYLES------------------------------------------------------------------------>

<style scoped>
/* ДЛЯ АНИМАЦИИ ЭЛЕМЕНТОВ */
#tm-pr-name, #tm-pr-jobtitle, #tm-pr-lnkbtn {
    position: relative;
    transform: translateX(150px);
    opacity: 0;
}

.preview-block {
    position: absolute;
    left: 7.5rem;
    width: 500px;
    height: 75vh !important;
    border-radius: var(--base-rounded);
    overflow: hidden;
    box-shadow: var(--base-shadow-1);
    cursor: default;
    transition: left 0.3s;
}
.preview-block__fg {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.07) 35%, rgba(0, 0, 0, 0.8) 100%);
}
.title-block {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    color: white;
    font-family: var(--font);
}
.title-block > h2 {
    font-size: 1.6rem;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: var(--base-rounded);
    backdrop-filter: blur(3px);
    padding: 0 0.4rem;
}
.title-block > h4 {
    color: var(--text-light);
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: var(--base-rounded);
    backdrop-filter: blur(3px);
    padding: 0 0.4rem;
}
.contact-btn {
    color: rgb(219, 219, 219) !important;
}
.contact-btn:hover {
    color: black !important;
}
.preview-block__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* MEDIA QUEIES */
@media (max-width: 1280px) {
    .preview-block {
        left: 3rem;
    }
}
</style>