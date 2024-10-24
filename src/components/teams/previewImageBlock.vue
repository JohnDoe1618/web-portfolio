<!-----------------------------------------------------------TEMPLATE----------------------------------------------------------------------------->
<template>
    <div class="preview-block">
        <div class="preview-block__fg">
            <div class="title-block mt-auto mr-auto mb-6 px-6 mx-4">
                <h2 id="tm-pr-name">{{ props.data?.fullname }}</h2>
                <h4 id="tm-pr-jobtitle" class="ml-3 mb-auto mt-3">{{ props.data?.jobTitle }}</h4>
                <Button 
                id="tm-pr-lnkbtn"
                class="contact-btn " 
                :label="mainTeamsStore.lnkBtn.value" 
                outlined 
                severity="secondary" 
                />
            </div>
        </div>
        <img v-if="!isLoadingImg" class="preview-block__image" :src="mainTeamsStore.previewImageSrc" alt="Preview Image">
    </div>
</template>

<!-----------------------------------------------------------SCRIPTS----------------------------------------------------------------------------->

<script setup>
import { defineProps, watch, onMounted } from 'vue';
import { useAnimTeamsStore } from '@/stores/teams/animStore';
import { useRoute } from 'vue-router';
import { usePreviewImage } from '@/composables/teams/previewImage';
import { useMainTeamsStore } from '@/stores/teams/mainStore';

// #######################################   PROPS   #######################################
const props = defineProps({
    data: {
        type: Object,
        required: false,
        default: null,
    }
});

// #######################################   COMPOSABLES   #######################################
const animStore = useAnimTeamsStore();
const mainTeamsStore = useMainTeamsStore();
const { 
    isLoadingImg,
    initInnerAnimation,
    setDefaultStylesInnerItems,
} = usePreviewImage(props);


// #######################################   COMPOSABLES   #######################################
const route = useRoute();


// #######################################   WATCH   #######################################
// Внутренние анимации выпоняются после того как завершится анимация появления главного компонента
// watch(() => animStore.animationExecuteState, (newValue) => {
//     if(newValue === false) {
//         setDefaultStylesInnerItems();
//         initInnerAnimation(0.18, 0);
//     }
// });

// Изменение виджета. Если виджет меняется, то у ранее открытого виджета сбрасываются данные и откатываются стили для повторного применения анимаций
// watch(() => route.params['id'], async (newVal, oldVal) => {
//     if(!!newVal && !!oldVal) {
//         setDefaultStylesInnerItems();
//         updatePreviewData();
//     }
// })

// #######################################   HOOKS   #######################################
onMounted(() => {
    console.log(mainTeamsStore.previewImageSrc);
});
</script>

<!----------------------------------------------------------STYLES------------------------------------------------------------------------>

<style scoped>
/* ДЛЯ АНИМАЦИИ ЭЛЕМЕНТОВ */
#tm-pr-name, #tm-pr-jobtitle, #tm-pr-lnkbtn {
    position: relative;
    transform: translateX(0px);
    opacity: 1;
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