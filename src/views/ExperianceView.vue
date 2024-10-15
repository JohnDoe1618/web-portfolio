<template>

    <!-- DIALOG -->
    <Dialog class="p-2" v-model:visible="visibleMoreCaseDialog" modal
        :header="`Подронее о проекте: ${selectedProject?.name}`" :style="{ width: '55rem' }">
        <div class="mcd_main_content">

            <!-- IMAGES SECTION -->
            <div v-if="selectedProject != {} || selectedProject != null" class="mcd_image_section">
                <img v-for="image in selectedProject?.images" :src="image" class="mcd_image">
            </div>


            <!-- INFO SECTION -->
            <div class="mcd_info_section">

                <!-- project objective -->
                <span class="ctc">Задача проекта:</span>
                <h6 class="cdc">{{ selectedProject?.detailInfo.objective }}</h6>

                <span class="mt-3 ctc">Реализация:</span>
                <h6 class="cdc">{{ selectedProject?.detailInfo.realization }}</h6>

                <span class="mt-3 ctc">Используемые технологии:</span>
                <div class="flex flex-wrap justify-center gap-2 mt-2">
                    <Tag v-for="tag in selectedProject?.detailInfo.technologyUsed" :key="tag.id" :value="tag.label">
                    </Tag>
                </div>

                <span class="mt-3 ctc">Время реализации:</span>
                <h6 class="cdc"> ~ {{ selectedProject?.detailInfo.timeRealization }}</h6>

            </div>
        </div>
    </Dialog>


    <div class="main_content">
        <!-- TITLE -->
        <div class="title">
            Наш опыт разработки
        </div>

        <!-- FILTER GROUP -->
        <div class="filter_group mb-5">
            <primary-button class="filter_button_item" v-for="it in buttonsFilterGroupList" :key="it.id"
                :color-text-hex="it.colorText" :color-hex="it.colorHex" :outlined="it.outlined" :text="it.text"
                @click="selectFilterGroupItem(it)"></primary-button>
        </div>

        <span style="margin-top: 10px; color: white; font-size: 17px;">Категория: {{ selectedFilterGroupItem?.text
            }}</span>

        <!-- DATAVIEW COMPONENT -->
        <div class="dataview grid">
            <div v-for="it in filteredProjects" :key="it.id" class="col-12 lg:col-3 project_item"
                :style="{ ...{ padding: '10px', margin: '10px', display: 'flex', border: '1px solid #cacaca' } }">

                <Carousel :show-indicators="false" :autoplayInterval="5_000" :value="it.images" :numVisible="1"
                    :numScroll="1" orientation="horizontal" verticalViewPortHeight="330px"
                    containerClass="flex items-center">
                    <template #item="{ data }">

                        <img :src="data" class="project_image">

                    </template>

                </Carousel>


                <div class="project_item-content">

                    <span class="content_title">
                        {{ it.name }}
                    </span>

                    <div class="content_detail_info-difficulty">
                        <span>
                            Сложность: <span style="font-weight: 700;"
                                :style="{ color: getDifficultyColor(it.difficulty) }">{{
                                    it.difficulty }}</span>
                        </span>
                    </div>

                    <div class="content_detail_info-tags">
                        <span style="font-weight: 700;">Теги:</span>
                    </div>

                    <div class="content_detail_info-tags_list flex flex-wrap justify-center gap-2 mt-2">

                        <Tag v-for="tag in it.tags" :key="tag.id" :value="tag.label"></Tag>

                    </div>

                    <div class="content_detail_info-button">
                        <primary-button class="view_more_project-button" :color-text-hex="'black'" :color-hex="'black'"
                            :outlined="true" :text="'Подробнее'" @click="onSelectProject(it)"></primary-button>
                    </div>

                </div>

            </div>
        </div>

    </div>
</template>
<script setup>
import PrimaryButton from '@/components/ui/Buttons/PrimaryButton.vue';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import Dialog from 'primevue/dialog';

import { reactive, ref, computed } from 'vue';

// buttons list values
const buttonsFilterGroupList = ref([
    {
        id: 0,
        colorText: 'black',
        colorHex: '#fff',
        outlined: false,
        text: 'Все',
        category: 'all',
    },
    {
        id: 1,
        colorText: 'white',
        colorHex: 'white',
        outlined: true,
        text: 'Прототипирование',
        category: 'prototyping',
    },
    {
        id: 2,
        colorText: 'white',
        colorHex: 'white',
        outlined: true,
        text: 'Разработка',
        category: 'development',
    },
    {
        id: 3,
        colorText: 'white',
        colorHex: 'white',
        outlined: true,
        text: 'Дизайн',
        category: 'design',
    },
    {
        id: 4,
        colorText: 'white',
        colorHex: 'white',
        outlined: true,
        text: 'Архитектура и проектирование',
        category: 'architectureAndEngineering',
    },
    {
        id: 5,
        colorText: 'white',
        colorHex: 'white',
        outlined: true,
        text: 'Плагины',
        category: 'plagins',
    },
    {
        id: 6,
        colorText: 'white',
        colorHex: 'white',
        outlined: true,
        text: 'Парсеры',
        category: 'parsers',
    },
    {
        id: 7,
        colorText: 'white',
        colorHex: 'white',
        outlined: true,
        text: 'Боты',
        category: 'bots',
    },
])

// filter group features
const selectedFilterGroupItem = ref({
    id: 0,
    colorText: 'black',
    colorHex: '#fff',
    outlined: false,
    text: 'Все',
    category: 'all',
});

function selectFilterGroupItem(item) {
    selectedFilterGroupItem.value = item;
}

// Dataview features
const projects = reactive(
    [
        {
            id: 0,
            difficulty: 'Низкая',
            name: 'Antarctica View',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/project-images%2FAntarctica%20Website.jpg?alt=media&token=a60a9e24-157a-4703-a9f8-8d74e3e1f595',
                'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/project-images%2FAntarctica%20Website.jpg?alt=media&token=a60a9e24-157a-4703-a9f8-8d74e3e1f595',
                'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/project-images%2FAntarctica%20Website.jpg?alt=media&token=a60a9e24-157a-4703-a9f8-8d74e3e1f595',
            ],
            price: 60_000,
            category: 'design',
            tags: [
                {
                    id: 0,
                    label: 'Дизайн',
                },
                {
                    id: 1,
                    label: 'Сайт',
                },
            ],
            status: 'ready',
            rating: 5,
            detailInfo: {
                objective: 'Создать современное веб-приложение для управления проектами, которое будет включать функционал для отслеживания задач, взаимодействия команды и отчетности',
                realization: 'Мы разработали удобный интерфейс, который позволяет пользователям легко создавать и управлять задачами. Используя Vue и Nuxt, мы обеспечили быструю и отзывчивую работу приложения. Серверная часть была реализована на Node.js с использованием TypeScript для повышения надежности кода. Мы интегрировали API для взаимодействия с внешними сервисами и реализовали систему аутентификации пользователей. Работая в команде, мы провели несколько итераций по сбору обратной связи и доработке функционала, что позволило достичь высокой степени удовлетворенности клиента',
                timeRealization: "3 месяца",
                technologyUsed: [
                    {
                        id: 0,
                        label: 'Vue'
                    },
                    {
                        id: 1,
                        label: 'Nuxt'
                    },
                    {
                        id: 2,
                        label: 'Node.js'
                    },
                    {
                        id: 3,
                        label: 'TypeScript'
                    },
                    {
                        id: 4,
                        label: 'JavaScript'
                    }
                ],
            }
        },
        {
            id: 1,
            difficulty: 'Низкая',
            name: 'Antarctica View',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/project-images%2FAntarctica%20Website.jpg?alt=media&token=a60a9e24-157a-4703-a9f8-8d74e3e1f595',
                'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/project-images%2FAntarctica%20Website.jpg?alt=media&token=a60a9e24-157a-4703-a9f8-8d74e3e1f595',
            ],
            price: 20_000,
            category: 'prototyping',
            tags: [
                {
                    id: 0,
                    label: 'Разработка',
                },
                {
                    id: 1,
                    label: 'Моб приложение',
                },
            ],
            status: 'ready',
            rating: 5,
            detailInfo: {
                objective: 'Создать современное веб-приложение для управления проектами, которое будет включать функционал для отслеживания задач, взаимодействия команды и отчетности',
                realization: 'Мы разработали удобный интерфейс, который позволяет пользователям легко создавать и управлять задачами. Используя Vue и Nuxt, мы обеспечили быструю и отзывчивую работу приложения. Серверная часть была реализована на Node.js с использованием TypeScript для повышения надежности кода. Мы интегрировали API для взаимодействия с внешними сервисами и реализовали систему аутентификации пользователей. Работая в команде, мы провели несколько итераций по сбору обратной связи и доработке функционала, что позволило достичь высокой степени удовлетворенности клиента',
                timeRealization: "3 месяца",
                technologyUsed: [
                    {
                        id: 0,
                        label: 'Vue'
                    },
                    {
                        id: 1,
                        label: 'Nuxt'
                    },
                    {
                        id: 2,
                        label: 'Node.js'
                    },
                    {
                        id: 3,
                        label: 'TypeScript'
                    },
                    {
                        id: 4,
                        label: 'JavaScript'
                    }
                ],
            }
        },
        {
            id: 2,
            difficulty: 'Средняя',
            name: 'Antarctica View',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/project-images%2FAntarctica%20Website.jpg?alt=media&token=a60a9e24-157a-4703-a9f8-8d74e3e1f595'
            ],
            price: 60_000,
            category: 'design',
            tags: [
                {
                    id: 0,
                    label: 'Дизайн',
                },
                {
                    id: 1,
                    label: 'Сайт',
                },
            ],
            status: 'process',
            rating: 5,
            detailInfo: {
                objective: 'Создать современное веб-приложение для управления проектами, которое будет включать функционал для отслеживания задач, взаимодействия команды и отчетности',
                realization: 'Мы разработали удобный интерфейс, который позволяет пользователям легко создавать и управлять задачами. Используя Vue и Nuxt, мы обеспечили быструю и отзывчивую работу приложения. Серверная часть была реализована на Node.js с использованием TypeScript для повышения надежности кода. Мы интегрировали API для взаимодействия с внешними сервисами и реализовали систему аутентификации пользователей. Работая в команде, мы провели несколько итераций по сбору обратной связи и доработке функционала, что позволило достичь высокой степени удовлетворенности клиента',
                timeRealization: "3 месяца",
                technologyUsed: [
                    {
                        id: 0,
                        label: 'Vue'
                    },
                    {
                        id: 1,
                        label: 'Nuxt'
                    },
                    {
                        id: 2,
                        label: 'Node.js'
                    },
                    {
                        id: 3,
                        label: 'TypeScript'
                    },
                    {
                        id: 4,
                        label: 'JavaScript'
                    }
                ],
            }
        },
        {
            id: 3,
            difficulty: 'Средняя',
            name: 'Antarctica View',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/project-images%2FAntarctica%20Website.jpg?alt=media&token=a60a9e24-157a-4703-a9f8-8d74e3e1f595'
            ],
            price: 60_000,
            category: 'design',
            tags: [
                {
                    id: 0,
                    label: 'Дизайн',
                },
                {
                    id: 1,
                    label: 'Сайт',
                },
            ],
            status: 'process',
            rating: 5,
            detailInfo: {
                objective: 'Создать современное веб-приложение для управления проектами, которое будет включать функционал для отслеживания задач, взаимодействия команды и отчетности',
                realization: 'Мы разработали удобный интерфейс, который позволяет пользователям легко создавать и управлять задачами. Используя Vue и Nuxt, мы обеспечили быструю и отзывчивую работу приложения. Серверная часть была реализована на Node.js с использованием TypeScript для повышения надежности кода. Мы интегрировали API для взаимодействия с внешними сервисами и реализовали систему аутентификации пользователей. Работая в команде, мы провели несколько итераций по сбору обратной связи и доработке функционала, что позволило достичь высокой степени удовлетворенности клиента',
                timeRealization: "3 месяца",
                technologyUsed: [
                    {
                        id: 0,
                        label: 'Vue'
                    },
                    {
                        id: 1,
                        label: 'Nuxt'
                    },
                    {
                        id: 2,
                        label: 'Node.js'
                    },
                    {
                        id: 3,
                        label: 'TypeScript'
                    },
                    {
                        id: 4,
                        label: 'JavaScript'
                    }
                ],
            }
        },
        {
            id: 4,
            difficulty: 'Средняя',
            name: 'Antarctica View',
            images: [
                'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/project-images%2FAntarctica%20Website.jpg?alt=media&token=a60a9e24-157a-4703-a9f8-8d74e3e1f595'
            ],
            price: 60_000,
            category: 'design',
            tags: [
                {
                    id: 0,
                    label: 'Дизайн',
                },
                {
                    id: 1,
                    label: 'Сайт',
                },
            ],
            status: 'process',
            rating: 5,
            detailInfo: {
                objective: 'Создать современное веб-приложение для управления проектами, которое будет включать функционал для отслеживания задач, взаимодействия команды и отчетности',
                realization: 'Мы разработали удобный интерфейс, который позволяет пользователям легко создавать и управлять задачами. Используя Vue и Nuxt, мы обеспечили быструю и отзывчивую работу приложения. Серверная часть была реализована на Node.js с использованием TypeScript для повышения надежности кода. Мы интегрировали API для взаимодействия с внешними сервисами и реализовали систему аутентификации пользователей. Работая в команде, мы провели несколько итераций по сбору обратной связи и доработке функционала, что позволило достичь высокой степени удовлетворенности клиента',
                timeRealization: "3 месяца",
                technologyUsed: [
                    {
                        id: 0,
                        label: 'Vue'
                    },
                    {
                        id: 1,
                        label: 'Nuxt'
                    },
                    {
                        id: 2,
                        label: 'Node.js'
                    },
                    {
                        id: 3,
                        label: 'TypeScript'
                    },
                    {
                        id: 4,
                        label: 'JavaScript'
                    }
                ],
            }
        },
    ]
);

const getStatus = (project) => {
    switch (project.status) {
        case 'ready':
            return 'success';
        case 'process':
            return 'warn';
        case 'canceled':
            return 'danger';
        default:
            return null;
    }
}

const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
        case 'Низкая':
            return 'green'
        case 'Средняя':
            return 'orange';
        case 'Высокая':
            return 'red';
        default:
            break;
    }
}

// Dialog: More Case features

const visibleMoreCaseDialog = ref(false);
// Выбранные кейс(Когда нажали на "Подробнее")
const selectedProject = ref(null);

function onSelectProject(project) {
    visibleMoreCaseDialog.value = true;
    selectedProject.value = project
}

// computed
const filteredProjects = computed(() => {
    if (!selectedFilterGroupItem.value || selectedFilterGroupItem.value.category === 'all') {
        return projects; // Возвращаем все проекты, если не выбрана фильтрация
    }

    return projects.filter(project =>
        project.tags.some(tag => tag.label === selectedFilterGroupItem.value.text)
    );
});


</script>

<style scoped>
.main_content {
    width: 100%;
    height: 93vh;
    padding: 50px;
    overflow-x: hidden;
    overflow-y: auto;
}

.title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: white;
    font-weight: 700;
    margin-bottom: 50px;
}

.filter_group {
    width: 100%;
    height: fit-content;
    display: flex;
}

.filter_button_item {
    margin-left: 20px;
}

.filter_button_item:first-child {
    margin: 0;
}

/* DATAVIEW COMPONENT styles */

.dataview {
    width: 100%;
    height: 100%;
    margin-top: 50px;
    display: flex;
    /* justify-content: center; */
}

.project_item {
    width: 420px;
    height: 500px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
}

.project_image {
    width: 100%;
    height: 250px;
    border-radius: 10px;
}

.project_item-content {
    margin-top: 10px;
    width: 100%;
    height: 100%;
    padding: 10px 10px;
}

.content_title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 17px;
    color: #565e63;
}

.content_detail_info-difficulty {
    margin-top: 10px;
    font-size: 15px;
    color: #565e63;
}

.content_detail_info-tags {
    margin-top: 10px;
    color: #565e63;
}

.content_detail_info-button {
    margin-top: 20px;
}

/* .card {
    overflow-x: hidden;
    background: white;
    border: 1px solid #cfcfcf;
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 1rem;
} */

/* MORE CASE DIALOG styles */

.mcd_main_content {
    width: 100%;
    height: 500px;
    padding: 12px;
    display: flex;
    overflow: auto;
}

.mcd_image_section {
    flex: 0 0 40%;
    padding: 10px;
    display: flex;
    flex-direction: column;
}

.mcd_image {
    width: 100%;
    height: 180px;
    margin-top: 10px;
    border-radius: 10px;
}

.mcd_info_section {
    flex: 1;
    padding: 30px;
    display: flex;
    flex-direction: column;
}

/* Общий класс для title */
/* .common_title_class */
.ctc {
    font-weight: 700;
    color: #565e63;
}

/* Общий класс для описаний desc */
/* .common_desc_class */
.cdc {
    font-size: 14px;
}
</style>