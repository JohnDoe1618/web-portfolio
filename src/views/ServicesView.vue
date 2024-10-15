<template>
    <Dialog v-model:visible="visibleOrderServiceDialog" modal header="Оформление Услуги" :style="{ width: '45rem' }">

        <div class="main_content-dialog">

            <span class="text-surface-500 dark:text-surface-400 block mb-4" style="color: #79898a; text-align: center;">
                Вы выбрали одну из наших услуг. Заполните
                форму, для того чтобы известить нас о деталях услуги, а также
                связаться с нами для дальнейшего сотрудничества.
            </span>

            <div class="form_service">
                <span class="text-surface-500 dark:text-surface-400 block mb-3"
                    style="color: #79898a; text-align: center; text-align: start;">
                    Вы выбрали: <span class="choice_service_label">{{ selectedService }}</span>
                </span>

                <div class="gap-4 mb-2">
                    <div style="display: flex; flex-direction: column;">
                        <span class="error">{{ errors.username }}</span>
                        <InputText v-model="inquiry.username" id="username" class="flex-auto" autocomplete="off"
                            placeholder="Введите ваше полное имя" />
                    </div>
                </div>
                <div class="gap-4 mb-2">
                    <div style="display: flex; flex-direction: column;">
                        <span class="error">{{ errors.email }}</span>
                        <InputText v-model="inquiry.email" id="email" class="flex-auto" autocomplete="off"
                            placeholder="Укажите ваш адрес электронной почты для связи." />
                    </div>
                </div>
                <div class="gap-4 mb-2">
                    <div style="display: flex; flex-direction: column;">
                        <span class="error">{{ errors.budget }}</span>
                        <InputText v-model="inquiry.budget" id="budget" class="flex-auto" autocomplete="off"
                            placeholder="Укажите бюджет проекта" />
                    </div>
                </div>
                <div class="gap-4 mb-2">
                    <div style="display: flex; flex-direction: column;">
                        <span class="error">{{ errors.purpose }}</span>
                        <InputText v-model="inquiry.purpose" id="purpose" class="flex-auto" autocomplete="off"
                            placeholder="Кратко укажите тему вашего обращения." />
                    </div>
                </div>

                <div class="card flex justify-center">
                    <IftaLabel>
                        <span class="error">{{ errors.desc }}</span>
                        <Textarea id="description" v-model="inquiry.desc" rows="8" cols="59" style="resize: none;"
                            placeholder="Описание" />
                        <label for="description">Описание</label>
                    </IftaLabel>
                </div>
                <div class="flex gap-3" style="justify-content: end;">
                    <primary-button class="standart-hover-effect-2" :color-text-hex="'black'" :color-hex="'black'"
                        :outlined="true" :text="'Закрыть'" @click="visibleOrderServiceDialog = false"></primary-button>
                    <primary-button class="standart-hover-effect-2" :color-text-hex="'black'" :color-hex="'#29cba9'"
                        :outlined="true" :text="'Оформить'" @click="onMakeOrder()"></primary-button>
                </div>
            </div>

        </div>

    </Dialog>

    <!-- More Service Dialog -->
    <Dialog v-model:visible="visibleMoreService" modal header="Подробноее описание"
        :style="{ width: '65rem', height: '50rem' }" style="overflow: auto;">

        <div class="main_content-dialog">

            <!-- Part: Base info of service -->
            <div class="msd_top_content">

                <img :src="serviceInfo.imageSrc" width="300px" height="200px" class="msd_top_content-image">

                <div class="msd_top_content-introduction">
                    <span id="msd_top_content-label">
                        {{ serviceInfo.label }}
                    </span>

                    <span id="msd_top_content-desc">
                        {{ serviceInfo.desc }}
                    </span>
                </div>

            </div>

            <!-- Part: Technologies and tools for service -->
            <div class="tech_tools-content">
                <h3 class="tech_tools-label">
                    Технологии и инструменты
                </h3>

                <div class="tech_tools-grid_tech">
                    <div class="grid">
                        <div class="col-6" v-for="it in serviceInfo.technologies" :key="it.id">
                            <div class="tech_item">

                                <img :src="it.icon" class="tech_item-icon">

                                <div class="tech_item-info">

                                    <span class="tech_item-label">
                                        {{ it.label }}
                                    </span>

                                    <span class="tech_item-desc">
                                        {{ it.desc }}
                                    </span>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Part: Timeline component -->
            <div class="msd_process_stages-content">
                <h3 class="msd_process_stages-title">
                    Этапы процесса разработки
                </h3>

                <!-- TIMELINE COMPONENT -->
                <div class="timeline_component-wrapper">

                    <Timeline :value="serviceInfo.stages" align="alternate" class="customized-timeline">
                        <template #marker="{ item }">
                            <img :src="item.icon" width="40px" height="40px" style="border-radius: 10rem;">
                        </template>
                        <template #content="{ item }">
                            <Card class="mt-4">
                                <template #title>
                                    {{ item.status }}
                                </template>
                                <template #subtitle>
                                    В среднем <span style="color: teal;"> {{ item.timeline }} </span> дней
                                </template>
                                <template #content>
                                    <img v-if="item.image"
                                        :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`"
                                        :alt="item.name" width="200" class="shadow-sm" />
                                    <p style="color: black;">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
                                        consequuntur error repudiandae numquam deserunt quisquam repellat libero
                                        asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                                        neque quas!
                                    </p>
                                </template>
                            </Card>
                        </template>
                    </Timeline>

                </div>
            </div>


            <!-- Part: FAQ component -->
            <div class="faq_content">

                <h3 class="faq_content-title">
                    FAQ - Часто задаваеммые вопросы
                </h3>

                <!-- FAQ COMPONENT -->
                <div class="faq_component">

                    <Accordion value="0">
                        <AccordionPanel v-for="it in serviceInfo.faq" :key="it.value" :value="it.value">
                            <AccordionHeader>{{ it.title }}</AccordionHeader>
                            <AccordionContent>
                                <p class="m-0" style="color: black;">
                                    {{ it.content }}
                                </p>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>

                </div>

            </div>

        </div>

    </Dialog>


    <div class="container">
        <div class="sidebar">
            <!-- Содержимое левой панели (25%) -->

            <div class="our_services_title">
                Наши услуги
            </div>

            <div class="desc_services">
                Мобильные приложения, десктопные и веб-приложения, серверные решения и многое другое.
            </div>

            <div class="filter_group" v-for="it in filterGroupItems" :key="it.id" @click="selectFilterGroupItem(it)"
                :style="selectedFilterGroupItem.id === it.id ? { 'color': '#00f7ff' } : undefined">
                {{ it.label }}
            </div>

        </div>
        <div class="main-content">
            <!-- Содержимое основной панели (75%) -->

            <!-- title поиск -->
            <div class="search_services_title">
                Список услуг:
            </div>

            <!-- Input поиск -->
            <div class="search_input">
                <InputGroup>
                    <InputGroupAddon>
                        <!-- <i class="pi pi-search"></i> -->
                        Поиск
                    </InputGroupAddon>
                    <InputText v-model="inputText" placeholder="Введите название услуги..." />
                    <Button icon="pi pi-times" severity="contrast" @click="cleanInputText" />
                </InputGroup>
            </div>

            <!-- Сетка карточек(items) -->
            <div class="grid_items">

                <div class="grid">
                    <div class="col-12 md:col-6 lg:col-4 service_item blurred-box" v-for="it in filteredServicesComputed"
                        :key="it.id"
                        :style="{ ...blurBoxStyle, ...{ padding: '10px', margin: '10px', display: 'flex', border: '1px solid #cacaca' } }">
                        <div class="text-center p-0 border-round-sm bg-primary font-bold">

                            <div class="top_block">

                                <!-- img 60px/60px; radius: 10rem;-->
                                <!-- <img :src="it.icon"> -->
                                <img :src="it.icon">

                                <div class="top_block__item_info">
                                    <!-- Text - {{ it.label }} -->
                                    {{ it.label }}

                                    <div class="end_projects_count">

                                        <!-- Кружок зеленного цвета -->
                                        <div class="green_circle"></div>

                                        <span class="projects_count_label">
                                            {{ it.endProjectsCount }} проекта
                                        </span>
                                    </div>
                                </div>

                            </div>

                            <div class="middle_block">

                                {{ sliceText(it.desc) }}

                            </div>

                            <div class="action_bar">
                                <primary-button class="standart-hover-effect-1" :color-text-hex="'#1f2b2b'"
                                    :color-hex="'white'" :outlined="false" :text="'Оформить заявку'"
                                    @click="openOrderServiceDialog(it)" style="cursor: pointer;"></primary-button>

                                <primary-button class="standart-hover-effect-2" :color-text-hex="'#ffffff'"
                                    :color-hex="'#ffffff'" :outlined="true" :text="'Подробнее'"
                                    @click="openMoreServiceDialog(it)"></primary-button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup>
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import PrimaryButton from '@/components/ui/Buttons/PrimaryButton.vue';
import Textarea from 'primevue/textarea';

// MoreServiceDialog
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

// Timeline
import Timeline from 'primevue/timeline';
import Card from 'primevue/card';

// Init
import { useBlurBox } from '@/components/ui/Effects/blurred.box';
import { computed, reactive, ref } from 'vue';
import axios from 'axios';
const { blurBoxStyle } = useBlurBox({ width: '400px', height: '300px' });


// arrays, maps reactive vars
const visibleOrderServiceDialog = ref(false);
const selectedFilterGroupItem = ref({});
const selectedService = ref('');
const inputText = ref('');
const filterGroupItems = ref([
    {
        id: 0,
        label: "Веб разработка",
        code: "web"
    },
    {
        id: 1,
        label: "Мобильная разработка",
        code: "mobile"
    },
    {
        id: 2,
        label: "Серверная разработка",
        code: "server"
    },
    {
        id: 3,
        label: "Десктоп разработка",
        code: "desktop"
    },
    {
        id: 4,
        label: "Разработка плагинов",
        code: "plugs"
    },
])
const serviceList = ref([
    {
        id: 0,
        label: 'Мобильные приложения',
        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/mobile_phone_14388.png?alt=media&token=f41ccd8c-b193-46e8-84f7-98ac2af45c7b',
        endProjectsCount: 4,
        desc: "Мобильные приложения, десктопные и веб-приложения, серверные решения и многое другое",
        category: "mobile",
    },
    {
        id: 1,
        label: 'Дизайн мобильных приложений',
        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/mobile_phone_14388.png?alt=media&token=f41ccd8c-b193-46e8-84f7-98ac2af45c7b',
        endProjectsCount: 6,
        desc: "Мобильные приложения, десктопные и веб-приложения, серверные решения и многое другое",
        category: "desktop",
    },
    {
        id: 2,
        label: 'Прототипирование моб приложений',
        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/mobile_phone_14388.png?alt=media&token=f41ccd8c-b193-46e8-84f7-98ac2af45c7b',
        endProjectsCount: 2,
        desc: "Мобильные приложения, десктопные и веб-приложения, серверные решения и многое другое",
        category: "web",
    },
    {
        id: 3,
        label: 'Доработка приложения',
        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/mobile_phone_14388.png?alt=media&token=f41ccd8c-b193-46e8-84f7-98ac2af45c7b',
        endProjectsCount: 2,
        desc: "Мобильные приложения, десктопные и веб-приложения, серверные решения и многое другое",
        category: "server",
    },
])

// Input features
const cleanInputText = () => inputText.value = '';

// Utility features
function selectService(service) {
    selectedService.value = service
}

function sliceText(text) {
    if (typeof text === 'string') {
        return text.trim().slice(0, 100) + '...';
    } else {
        return 'Ошибка';
    }
}

// < Filtered features >
function selectFilterGroupItem(it) {
    if(selectedFilterGroupItem?.value?.id === it.id) {
        selectedFilterGroupItem.value = {id: -1};
        return;
    }
    selectedFilterGroupItem.value = it;
}

// Фильтрация по категории и по названию
function filterServiceItems(value) {
    let filteredServicesList = serviceList.value;

    // Фильтрация по названию
    if (value) {
        const searchTerm = value.toLowerCase();
        filteredServicesList = filteredServicesList.filter(service =>
            service.label.toLowerCase().includes(searchTerm)
        );
    }

    // Фильтрация по категории
    if (selectedFilterGroupItem.value.code) {
        filteredServicesList = filteredServicesList.filter(service =>
            service.category === selectedFilterGroupItem.value.code
        );
    }

    return filteredServicesList;
}

function openOrderServiceDialog(service) {
    console.log("open order service dialog");
    selectService(service?.label);
    visibleOrderServiceDialog.value = true;
}

// form inquiry / validation / http request
const inquiry = reactive({
    username: '',
    email: '',
    budget: '',
    purpose: '',
    desc: '',
})

const errors = reactive({
    username: '',
    email: '',
    budget: '',
    purpose: '',
    desc: '',
});

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validateInquiry() {
    let isValid = true;

    // Username validation
    if (!inquiry.username) {
        errors.username = 'Имя обязательно для заполнения.';
        isValid = false;
    } else {
        errors.username = '';
    }

    // Email validation
    if (!inquiry.email) {
        errors.email = 'Email обязателен для заполнения.';
        isValid = false;
    } else if (!validateEmail(inquiry.email)) {
        errors.email = 'Неверный формат email.';
        isValid = false;
    } else {
        errors.email = '';
    }

    // Budget validation
    if (!inquiry.budget) {
        errors.budget = 'Бюджет обязателен для заполнения.';
        isValid = false;
    } else if (isNaN(inquiry.budget)) {
        errors.budget = 'Бюджет должен быть числом.';
        isValid = false;
    } else {
        errors.budget = '';
    }

    // Purpose validation
    if (!inquiry.purpose) {
        errors.purpose = 'Цель обращения обязательна для заполнения.';
        isValid = false;
    } else {
        errors.purpose = '';
    }

    // Description validation
    if (!inquiry.desc) {
        errors.desc = 'Описание обязательно для заполнения.';
        isValid = false;
    } else {
        errors.desc = '';
    }

    return isValid;
}

function onMakeOrder() {
    if (validateInquiry()) {
        console.log('Confirmed order', inquiry);
        // Здесь будет сетевой запрос
        // например, axios.post('/api/orders', inquiry)
    } else {
        console.log('Валидация не пройдена', errors);
    }
}

// Запрос на модерацию\регистрацию услуги
async function onRequestMakeOrder() {
    try {
        const response = await axios.post('/api/v1/orders', inquiry);
        console.log('Order successfully created', response.data);
    } catch (error) {
        console.error('Error while creating order', error);
    }
}

/** 
 * More Dialog features
 */
const visibleMoreService = ref(false);
const serviceInfo = reactive({
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/6ebfde4e-42b0-45e5-af28-3f6e8ba9b212.jpeg?alt=media&token=8e916660-f863-4aba-ba7a-7e252deaa62a',
    label: 'Разработка мобильных приложений в Abstergo',
    desc: 'В Abstergo мы предлагаем профессиональные услуги по разработке мобильных приложений, используя современные технологии и инструменты, такие как Dart и Flutter. Наша команда опытных разработчиков создает высококачественные, производительные и эстетически привлекательные приложения для платформ iOS и Android.',
    technologies: [
        {
            id: 0,
            label: 'Dart',
            desc: 'Язык программирования для разработки мобильных приложений и не только...',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/seamonkey_browser_logo_icon_152961.ico?alt=media&token=6948a145-b9a4-4427-9d3a-f28d3d13fd2a',
        },
        {
            id: 1,
            label: 'Flutter',
            desc: 'Flutter - платформа для разработки кросплатформенных приложений под различные устройства, включая android и ios',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/seamonkey_browser_logo_icon_152961.ico?alt=media&token=6948a145-b9a4-4427-9d3a-f28d3d13fd2a',
        },
        {
            id: 2,
            label: 'Облачные сервисы',
            desc: 'Используем различные облачные сервисы для разработки приложений: AWS, Google cloud, Azure...',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/seamonkey_browser_logo_icon_152961.ico?alt=media&token=6948a145-b9a4-4427-9d3a-f28d3d13fd2a',
        },
        {
            id: 3,
            label: 'Базы данных',
            desc: 'В разработке мобильных приложений мы используем различные базы данных MySql, Postgresql, mongodb, supabase...',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/seamonkey_browser_logo_icon_152961.ico?alt=media&token=6948a145-b9a4-4427-9d3a-f28d3d13fd2a',
        },
    ],
    stages: [
        { status: 'Processing', timeline: '30-45', icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2F1490889638-app-store_82517.png?alt=media&token=0ca0785a-cd56-4694-877a-00bb5ef0d9cd', color: '#673AB7' },
        { status: 'Shipped', timeline: '20-50', icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2F1490889638-app-store_82517.png?alt=media&token=0ca0785a-cd56-4694-877a-00bb5ef0d9cd', color: '#FF9800' },
        { status: 'Delivered', timeline: '10-20', icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fcodinghtml_117796.png?alt=media&token=f92b4e4b-404a-4300-b2e1-56538046c8b5', color: '#607D8B' },
    ],
    faq: [
        { title: 'Что делать если 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', value: '0' },
        { title: 'Что делать если 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', value: '1' },
        { title: 'Что делать если 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', value: '2' }
    ],
})
function openMoreServiceDialog(service) {
    visibleMoreService.value = true;
}

// computed
const filteredServicesComputed = computed(() => {
    return filterServiceItems(inputText.value);
});

</script>

<style scoped>
.container {
    display: flex;
    width: 100%;
    height: 93vh;
    /* Задайте нужную высоту */
    overflow: auto;
}

.sidebar {
    flex: 0 0 25%;
    /* Зает 30% ширины */
    padding: 70px;

    display: flex;
    flex-direction: column;
}

.main-content {
    flex: 1;
    /* Зает оставшееся пространство (70%) */
    padding: 70px;
}

/* Дополнительные стили для адаптивности, если нужно */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
        /* На маленьких экранах можно изменить направление */
    }

    .sidebar {
        flex: 0 0 auto;
        /* Сохраняем фиксированную высоту для боковой панели */
    }
}

/* Inner sidebar */

* {
    color: white;
}

.our_services_title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 12px;
}

.desc_services {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
    opacity: .8;
}

.filter_group {
    font-size: 16px;
    margin-top: 18px;
    font-weight: 700;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

/* Hover effects */
.filter_group:hover {
    cursor: pointer;
    color: #c7c7c7;
    transition: .3s ease;
}


/* Inner mainContainer */

.search_services_title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 40px;
}

.search_input {
    width: 100%;
    height: fit-content;
    margin-bottom: 100px;
}

.grid_items {
    width: 100%;
    height: 100%;
}

/* main container - grid customization */
.top_block {
    width: 100%;
    padding: 20px;
    display: flex;
    text-align: start;
}

.top_block img {
    width: 60px;
    height: 60px;
    border-radius: 10rem;
    margin-right: 20px;
}

.top_block__item_info {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.end_projects_count {
    display: flex;
    align-items: center;
}

.green_circle {
    margin-right: 10px;
    width: 7px;
    height: 7px;
    border-radius: 10rem;
    background-color: #00ff0a;
}

.projects_count_label {
    font-size: 14px;
    color: #cccccc;
}

/* main container - middle block customize */

.middle_block {
    padding: 0px 20px;
    text-align: start;
}

/* main container - actions block custimize */

.action_bar {
    margin-top: 20px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

/* Animations transition group - from vue3 official recomend css styles -  https://vuejs.org/guide/built-ins/transition-group*/

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}



/* Dialog style */

.main_content-dialog {
    width: 100%;
    height: 100%;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.form_service {
    width: 80%;
    height: 100%;
    padding: 22px;
    color: #000000;
    /* border: 1px solid #d3d3d3; */
    border-radius: 4px;

}

.choice_service_label {
    color: #29cba9;
    font-weight: 700;
}

.error {
    color: red;
}

/* Диалоговое окно - "Подробнее" \ MoreServiceDialog styles */
.msd_top_content {
    width: 100%;
    height: auto;
    padding: 10px;
    display: flex;
    align-items: center;
}

.msd_top_content-image {
    border-radius: 10px;
}

.msd_top_content-introduction {
    margin-left: 22px;
    display: flex;
    flex-direction: column;
}

.msd_top_content-introduction #msd_top_content-label {
    font-size: 20px;
    font-weight: 700;
    color: #556068;
}

.msd_top_content-introduction #msd_top_content-desc {
    font-size: 16px;
    color: #556368;
    margin-top: 10px;
}

.tech_tools-content {
    width: 100%;
    height: fit-content;
    padding: 10px;
    margin-top: 30px;
}

.tech_tools-label {
    color: #556368;
    font-size: 16px;
    font-weight: 500;
}

.tech_tools-grid_tech {
    color: #383838;
    margin-top: 20px;
}

.tech_item {
    display: flex;
    align-items: center;
    border: 1px solid #d8d8d8;
    padding: 15px;
    height: 150px;
    border-radius: 5px;
}

.tech_item-icon {
    width: 60px;
    height: 60px;
}

.tech_item-info {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
}

.tech_item-info .tech_item-label {
    font-size: 18px;
    font-weight: 700;
    color: #383838;
}

.tech_item-info .tech_item-desc {
    color: #556068;
}

/* PROCESS STAGES styles */

.msd_process_stages-content {
    margin-top: 20px;
    width: 100%;
    padding: 10px;
}

.msd_process_stages-title {
    color: #556368;
    font-size: 16px;
    font-weight: 500;
}

.timeline_component-wrapper {
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
}

/* MEDIA FOR TIMELINE */
@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row;

            .p-timeline-event-content {
                text-align: left;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }
    }
}

/* FAQ */

.faq_content {
    margin-top: 20px;
    width: 100%;
    padding: 10px;
}

.faq_content-title {
    color: #556368;
    font-size: 16px;
    font-weight: 500;
}

.faq_component {
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>