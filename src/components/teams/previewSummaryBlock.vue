<template>
    <div :id="summaryId" class="summary-block ml-auto pr-5 mr-2 py-3">
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
            <div 
            class="descr-chunk w-full h-max" 
            v-for="chunk in (props.data?.descriptionBlock ?? [])" 
            :key=chunk.title
            >
                <span class="block font-bold light">{{ chunk.title }}:</span>
                <span class="ml-2 inline-block">{{ chunk.description }}</span>
            </div>
        </div>

        <!-- Сервисы -->
        <h2 class="w-full mt-3 mb-4 light font-bold text-2xl">Мои услуги:</h2>

        <div class="summary-block__services mb-5">
            <!-- Ячейка сервиса -->
            <div class="service-item px-3 py-2" v-for="service in (props.data?.services || [])" :key="service.title">
                <svg-icon 
                class="service-item__icon" 
                type="mdi" 
                :path="service.icon"
                ></svg-icon>

                <h3 class="service-item__title">{{ service.title }}</h3>
                <p class="service-item__summary px-1">{{ service.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
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
const mainTeamsStore = useMainTeamsStore();


// #######################################   DATA   #######################################
const { animationIds: { summary } } = mainTeamsStore;
const summaryId = summary[0];


// #######################################   COMPUTED   #######################################
const tags = computed(() => {
    let localTags = [];
    if(props.data?.tags) localTags = [...props.data?.tags];
    return localTags.map((tag) => ({ label: tag }));
});
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
.descr-chunk + .descr-chunk {
    margin-top: 1rem;
}

/* БЛОК СЕРВИСОВ */
.summary-block__services {
    width: 100%;
    display: grid;
    justify-content: center;
    grid-template-columns: 220px 220px;
    row-gap: 20px;
    column-gap: 24px;
    padding-left: 0.3rem;
}
.service-item {
    width: 220px;
    min-height: 155px;
    height: auto;
    display: flex;
    flex-direction: column;
    font-family: var(--font);
    border-radius: var(--base-rounded);
    box-shadow: var(--base-shadow-3);
    cursor: default;
    background: rgb(231,60,126);
    /* background: linear-gradient(135deg, rgba(231,60,126, .7) 33%, rgba(35,166,213,.7) 100%); */
    background: linear-gradient(45deg, rgba(131,58,180,.5) 15%, rgba(35,166,213,.8) 45%, rgba(79, 208, 255, 0.7) 72%);
    color: var(--teams-services-fg);
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