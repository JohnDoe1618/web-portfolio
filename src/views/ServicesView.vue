<template>
    <Dialog v-model:visible="visibleOrderServiceDialog" modal header="Оформить заявку" :style="{ width: '25rem' }">
        
        <div class="flex justify-end gap-2">
            <Button type="button" label="Cancel" severity="secondary" @click="visibleOrderServiceDialog = false"></Button>
            <primary-button class="standart-hover-effect-2" :color-text-hex="'black'"
            :color-hex="'black'" :outlined="true" :text="'Закрыть'" @click="visibleOrderServiceDialog = false"></primary-button>
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
                    <div class="col-12 md:col-6 lg:col-4 service_item blurred-box" v-for="it in filteredServices"
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
                                    :color-hex="'white'" :outlined="false" :text="'Оформить заявку'" @click="openOrderServiceDialog" style="cursor: pointer;"></primary-button>

                                <primary-button class="standart-hover-effect-2" :color-text-hex="'#ffffff'"
                                    :color-hex="'#ffffff'" :outlined="true" :text="'Подолбнее'"></primary-button>
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

import { useBlurBox } from '@/components/ui/Effects/blurred.box';
import { computed, ref } from 'vue';

const { blurBoxStyle } = useBlurBox({ width: '400px', height: '300px' });

const selectedFilterGroupItem = ref({});

// visible reactive vars
const visibleOrderServiceDialog = ref(false);

// arrays, maps reactive vars
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

// Input features
const inputText = ref('');

const cleanInputText = () => inputText.value = '';


// Grid items features
const serviceList = ref([
    {
        id: 0,
        label: 'Мобильные приложения',
        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/mobile_phone_14388.png?alt=media&token=f41ccd8c-b193-46e8-84f7-98ac2af45c7b',
        endProjectsCount: 4,
        desc: "Мобильные приложения, десктопные и веб-приложения, серверные решения и многое другое",
        category: "mob",
    },
    {
        id: 1,
        label: 'Дизайн мобильных приложений',
        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/mobile_phone_14388.png?alt=media&token=f41ccd8c-b193-46e8-84f7-98ac2af45c7b',
        endProjectsCount: 6,
        desc: "Мобильные приложения, десктопные и веб-приложения, серверные решения и многое другое",
        category: "mob",
    },
    {
        id: 2,
        label: 'Прототипирование моб приложений',
        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/mobile_phone_14388.png?alt=media&token=f41ccd8c-b193-46e8-84f7-98ac2af45c7b',
        endProjectsCount: 2,
        desc: "Мобильные приложения, десктопные и веб-приложения, серверные решения и многое другое",
        category: "mob",
    },
    {
        id: 3,
        label: 'Доработка приложения',
        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/mobile_phone_14388.png?alt=media&token=f41ccd8c-b193-46e8-84f7-98ac2af45c7b',
        endProjectsCount: 2,
        desc: "Мобильные приложения, десктопные и веб-приложения, серверные решения и многое другое",
        category: "mob",
    },
])

// Utility features
function sliceText(text) {
    if (typeof text === 'string') {
        return text.trim().slice(0, 100) + '...';
    } else {
        return 'Ошибка';
    }
}

function selectFilterGroupItem(it) {
    selectedFilterGroupItem.value = it;
    filterServiceListByFilterGroup();
}

function filterServiceListByFilterGroup() {
    console.info('Filtered service items');
}

function filterServiceItemsBySearchField(value) {
    if (!value) {
        // Если значение пустое, возвращаем весь список услуг
        return serviceList.value;
    }

    const searchTerm = value.toLowerCase(); // Приводим ввод к нижнему регистру

    return serviceList.value.filter(service => {
        return service.label.toLowerCase().includes(searchTerm); // Проверяем, содержится ли поисковый термин в названии услуги
    });
}

function openOrderServiceDialog() {
    console.log("open order service dialog")
    visibleOrderServiceDialog.value = true;
}

// Computed properties
const filteredServices = computed(() => {
    return filterServiceItemsBySearchField(inputText.value);
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

.service_item {}


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
</style>