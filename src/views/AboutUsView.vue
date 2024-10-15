<template>
    <div class="container">
        <Dock :model="items" :position="position">
            <template #itemicon="{ item }">
                <DockIcon :item="item" />
            </template>
        </Dock>

        <div class="left__section">
            <div class="left__section_container">
                <WelcomeText text="Добро пожаловать в Abstergo" />
                <AboutUsText class="mt-6" :text="aboutUsDescription" />
                <div class="left__section_container-button">
                    <primary-button :color-text-hex="'#ffffff'" :color-hex="'#ffffff'" :outlined="true"
                        :text="'Посмотреть услуги'" @click="goOurServices()" />
                </div>
                <ContactInfo phone="+7 999 600 22 11"
                    address="100 Main St. New York NY 10002. USA - Сайт написан на vue3 + typescript" />
            </div>
        </div>

        <div class="right__section">
            <div v-for="it in baseServicesList" :key="it.id">
                <ServiceItem :icon="it.icon" :label="it.label" :desc="it.desc" />
            </div>
        </div>
    </div>
</template>

<script setup>
import WelcomeText from '@/components/AboutView/WelcomeText.vue';
import AboutUsText from '@/components/AboutView/AboutUsText.vue';
import ContactInfo from '@/components/AboutView/ContactInfo.vue';
import ServiceItem from '@/components/AboutView/ServiceItem.vue';
import DockIcon from '@/components/AboutView/DockIcon.vue';

import PrimaryButton from '@/components/ui/Buttons/PrimaryButton.vue';
import Dock from 'primevue/dock';
import { useRouter } from 'vue-router';
import { useAboutView } from '@/composables/views/AboutView/useAboutView';
import { ref } from 'vue';

// Инициализация
const router = useRouter();
const { baseServicesList, items, position } = useAboutView();

const aboutUsDescription = ref(
    `
    Мы — команда экспертов, создающая инновационные решения для вашего бизнеса. Разрабатываем
    мобильные приложения, десктопные и веб-приложения, серверные решения и многое другое. Дайте нам
    шанс превратить ваши идеи в реальность и вывести ваш проект на новый уровень
    `
);

// Переход на страницу сервесов
const goOurServices = () => router.push({ name: 'our-services' });

</script>

<style scoped>
.container {
    width: 100%;
    height: 93vh;
    display: flex;
    overflow: hidden;
}

.dock__icon:hover {
    cursor: pointer;
    opacity: .5;
    transition: .5s ease;
}

.left__section {
    width: 50%;
    height: 100%;
    padding: 50px;
}

.left__section_container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    padding-bottom: 300px;
}

.left__section_container-aboutUs_text {
    margin-top: 40px;
}

.aboutUs-text {
    font-size: 18px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-wrap: wrap;
    /* color: #3c505b; */
    color: #ffffff;
    /* background-color: #c5c5c5; */
    line-height: 1.5;
}

.left__section_container-button {
    margin-top: 20px;
}

/* RIGHT SIDE */
.right__section {
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.inner__container {
    width: 200px;
    height: 200px;
}

.right__section {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.responsive-image {
    object-fit: contain;
    top: 0;
    left: 0;
}

.responsive-image {
    width: 1000px;
    height: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    transform: perspective(500px) rotateY(-42deg);
    -webkit-transform: perspective(500px) rotateY(-42deg);
    -moz-transform: perspective(500px) rotateY(-42deg);
    -ms-transform: perspective(500px) rotateY(-42deg);
    -o-transform: perspective(500px) rotateY(-42deg);
    animation-name: rotate-windows;
    animation-iteration-count: infinite;
    animation-duration: 3s;
    animation-fill-mode: forwards;
}

@keyframes rotate-windows {
    0% {
        transform: perspective(500px) rotateY(-42deg);
        -webkit-transform: perspective(500px) rotateY(-42deg);
        -moz-transform: perspective(500px) rotateY(-42deg);
        -ms-transform: perspective(500px) rotateY(-42deg);
        -o-transform: perspective(500px) rotateY(-42deg);
    }

    50% {
        transform: perspective(500px) rotateY(0deg);
        -webkit-transform: perspective(500px) rotateY(0deg);
        -moz-transform: perspective(500px) rotateY(0deg);
        -ms-transform: perspective(500px) rotateY(0deg);
        -o-transform: perspective(500px) rotateY(0deg);
    }

    100% {
        transform: perspective(500px) rotateY(-42deg);
        -webkit-transform: perspective(500px) rotateY(-42deg);
        -moz-transform: perspective(500px) rotateY(-42deg);
        -ms-transform: perspective(500px) rotateY(-42deg);
        -o-transform: perspective(500px) rotateY(-42deg);
    }
}

</style>