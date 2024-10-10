<template>
    <div class="container">

        <Dock :model="items" :position="position">
            <template #itemicon="{ item }">
                <img class="dock__icon" v-tooltip.top="item.label" :alt="item.label" :src="item.icon" style="width: 90%" />
            </template>
        </Dock>

        <div class="left__section">

            <div class="left__section_container">

                <div>
                    <glitch-text :text="'Добро пожаловать в Abstergo'"></glitch-text>
                </div>

                <div class="left__section_container-aboutUs_text">
                    <h1 class="aboutUs-text">
                        Мы — команда экспертов, создающая инновационные решения для вашего бизнеса. Разрабатываем
                        мобильные приложения, десктопные и веб-приложения, серверные решения и многое другое. Дайте нам
                        шанс превратить ваши идеи в реальность и вывести ваш проект на новый уровень
                    </h1>
                </div>

                <div class="left__section_container-button">
                    <primary-button :color-text-hex="'#ffffff'" :color-hex="'#ffffff'" :outlined="true"
                        :text="'Оформить заявку'"></primary-button>
                </div>

                <div class="bottom__container">
                    <div class="phone__number">+7 999 600 22 11</div>
                    <div class="pascal__text">100 Main St. New York NY 10002. USA  - Сайт написан на vue3 + typescript</div>
                </div>

            </div>

        </div>

        <div class="right__section">
            <div v-for="it in baseServicesList" :key="it.id" class="blurred-box service__item"
                :style="{ ...blurBoxStyle, ...{ marginTop: '10px', display: 'flex' } }">
                <div class="service__inner_container">

                    <div class="top__container">
                        <img :src="it.icon" class="service__icon">
                        <span class="service__label">{{ it.label }}</span>
                    </div>

                    <div class="down__container">
                        {{ it.desc }}
                    </div>


                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
import GlitchText from '@/components/ui/Effects/GlitchText.vue';
import PrimaryButton from '@/components/ui/Buttons/PrimaryButton.vue';

import Dock from 'primevue/dock';

import { useBlurBox } from '@/components/ui/Effects/blurred.box';

import botIcon from '@/assets/icons/services-icons/develop-bots.png';
import mobIcon from '@/assets/icons/services-icons/develop-mob.png';
import serverIcon from '@/assets/icons/services-icons/servers-icon.png';

import { ref } from 'vue';

const { blurBoxStyle } = useBlurBox({ width: '400px', height: '230px' });

// Init data

const baseServicesList = ref([
    {
        id: 0,
        right: false,
        label: 'Мобильные приложения',
        desc: 'Разработка мобильных приложений для iOS и Android. Наша команда обеспечивает полный цикл услуг: от концепции и дизайна до разработки и поддержки',
        // icon: 'develop-mob.png',
        icon: mobIcon,
    },
    {
        id: 1,
        right: true,
        label: 'Боты, парсеры, плагины',
        desc: 'Разработке ботов, парсеров и плагинов. Наша команда создает эффективные решения для автоматизации процессов, извлечения данных и интеграции с различными платформами',
        // icon: 'develop-bots.png',
        icon: botIcon,
    },
    {
        id: 2,
        right: false,
        label: 'Сервера, Базы данных',
        desc: 'Разработка и управлении серверами и базами данных. Мы предоставляем услуги по настройке, мониторингу и оптимизации серверной инфраструктуры',
        // icon: 'servers-icon.png',
        icon: serverIcon,
    },
])

// Dock features
import telegramIcon from '@/assets/icons/networks/telegram-icon.png';
import githubIcon from '@/assets/icons/networks/github-icon.png';
import twitterIcon from '@/assets/icons/networks/twitter.png';

const items = ref([
    {
        label: 'App Store',
        icon: twitterIcon
    },
    {
        label: 'Photos',
        icon: telegramIcon
    },
    {
        label: 'Trash',
        icon: githubIcon
    }
]);
const position = ref('right');

// Асинхронное получение динамичного пути по спецификации vite сборщика
async function getIconPath(icon) {
    try {
        const image = await import(`@/assets/icons/services-icons/${icon}`);
        return image.default; // Возвращаем путь к изображению
    } catch (error) {
        console.error('Ошибка загрузки изображения:', error);
        return ''; // Возвращаем пустую строку в случае ошибки
    }
}
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

/* Нижняя часть слева */
.bottom__container {
    width: 100%;
    height: fit-content;
    /* margin-top: auto; */
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
}

.bottom__container .phone__number {
    color: white;
    padding-left: 20px;
    border-left: 1px solid #ffffff;
    font-size: 15px;
}

.bottom__container .pascal__text {
    color: #bcd4e7;
    font-size: 12px;
    margin-left: 20px;
}


/* RIGHT SIDE */
.right__section {
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.service__inner_container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

.service__inner_container .top__container {
    width: 100%;
    height: fit-content;
    padding: 5px;
    display: flex;
    align-items: center;
}

.top__container .service__icon {
    width: 50px;
    height: 50px;
    object-fit: contain;
    border-radius: 10rem;
    margin-right: 15px;
}

.top__container .service__label {
    font-size: 15px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 500;
    color: white;
}

.service__inner_container .down__container {
    width: 100%;
    height: fit-content;
    margin-top: 10px;
    padding: 5px;
    display: flex;
    text-align: start;
    text-wrap: wrap;
    color: rgb(219, 219, 219);
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



/* Effects */
</style>