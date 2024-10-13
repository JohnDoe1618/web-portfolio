<template>
    <div class="summary-block ml-auto pr-5 mr-2 py-3">
        <!-- Заголовок "Обо мне" -->
        <h1 class="summary-block__title">Обо мне</h1>

        <!-- Теги -->
        <div class="summary-block__tags-block">
            <Breadcrumb class="breadcrumbs" :model="tags">
                <template #item="{ item }">
                    <span class="brcr-item">{{ item.label }}</span>
                </template>
                <template #separator>
                    <span class="brcr-separator"> / </span>
                </template>
            </Breadcrumb>
        </div>

        <!-- Описание -->
        <div class="summary-block__descr">
            <span class="block font-bold light">Серверная часть:</span>
            <span class="ml-2 inline-block">
                Разрабатываю надежные серверные решения с использованием современных технологий. Это включает в
                себя
                создание API, работу с базами данных и интеграцию с внешними сервисами. Я уделяю особое внимание
                безопасности данных
                и производительности приложений.
            </span>

            <span class="block font-bold light mt-2">Клиентская часть:</span>
            <span class="ml-2 inline-block">
                Cоздаю красивые и интуитивно понятные интерфейсы, которые обеспечивают отличный пользовательский
                опыт.
                Использую актуальные фреймворки, такие как React и Vue.js, чтобы сделать ваши сайты адаптивными и быстро
                загружаемыми.
            </span>
        </div>

        <!-- Сервисы -->
        <h2 class="w-full mt-3 mb-4 light font-bold text-2xl">Мои услуги:</h2>
        <div class="summary-block__services mb-5">
            <div class="service-item px-3 py-2" v-for="service in services" :key="service.title">
                <svg-icon 
                class="service-item__icon" 
                type="mdi" 
                :path="service.icon"
                ></svg-icon>

                <h3 class="service-item__title">{{ service.title }}</h3>
                <p class="service-item__summary px-1">{{ service.summary }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiRocketLaunchOutline, mdiCodeTags, mdiDatabaseOutline, mdiSecurity } from '@mdi/js';

const tags = ref([
    { label: '22 года' },
    { label: 'Full-stack' },
    { label: 'опыт 3 года' },
]);

const services = ref([
    { icon: mdiCodeTags, title: 'Разработка', summary: 'Создание отзывчивых и интерактивных веб-приложений. Поддержка существующих проектов' },
    { icon: mdiRocketLaunchOutline, title: 'Оптимизация', summary: 'Проведение тестирования приложений. Выявление слабых мест в программе для повышения производительности' },
    { icon: mdiDatabaseOutline, title: 'Базы данных', summary: 'SSL-Сертификация, настройка, развертывание и поддержка систем упраления базами данных' },
    { icon: mdiSecurity, title: 'Защита данных', summary: 'Выявление уязвимых мест в приложениях. Внедрение современных технологий защиты данных.' },
]);



</script>

<style scoped>
/* MAIN БЛОК */
.summary-block {
    width: 500px;
    height: 100%;
    overflow: auto;
}

/* БЛОК ЗАГОЛОВОК */
.summary-block__title {
    font-size: 2.7rem;
    color: var(--text-light);
    font-family: var(--font);
    font-weight: 600;
    cursor: default;
}

/* БЛОК ТЕГОВ */
.breadcrumbs {
    background-color: rgba(0, 0, 0, 0) !important;
    color: var(--text-light);
    cursor: default;
}

.brcr-item {
    color: var(--br-color);
    font-weight: bolder;
    font-family: var(--font);
}

.brcr-separator {
    color: var(--br-color);
    font-weight: bolder;
    font-family: var(--font);
}

/* БЛОК ОПИСАНИЯ */
.summary-block__descr  {
    color: var(--base-fg);
    font-family: var(--font);
    cursor: default;
}

/* БЛОК СЕРВИСОВ */
.summary-block__services {
    display: grid;
    grid-template-columns: 220px 220px;
    row-gap: 20px;
    column-gap: 30px;
}
.service-item {
    width: 220px;
    min-height: 155px;
    height: auto;
    display: flex;
    flex-direction: column;
    font-family: var(--font);
    border-radius: var(--base-rounded);
    background-color: white;
    box-shadow: var(--base-shadow-3);
    cursor: default;
}
.service-item__icon {
    width: 25px !important;
    height: 25px !important;
    color: var(--teams-services-top-fg) !important;
    font-size: 1.4rem;
}
.service-item__title {
    width: 100%;
    font-size: 1rem;
    color: var(--teams-services-top-fg);
    font-weight: bolder;
}
.service-item__summary {
    font-size: 0.85rem;
}
</style>