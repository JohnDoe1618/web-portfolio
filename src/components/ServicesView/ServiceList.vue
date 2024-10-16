<template>
    <div class="main-content">
        <div class="search_services_title">Список услуг:</div>
        <div class="search_input">
            <InputGroup>
                <InputGroupAddon>Поиск</InputGroupAddon>
                <InputText v-model="localInputText" @input="$emit('update:inputText', localInputText)" placeholder="Введите название услуги..." />
                <Button icon="pi pi-times" severity="contrast" @click="localCleanInputText($emit)" />
            </InputGroup>
        </div>

        <!-- Сетка карточек(items) -->
        <div class="grid_items">
            <div class="grid">
                <div class="col-12 md:col-6 lg:col-4 service_item blurred-box" v-for="it in props.filteredServices"
                    :key="it.id"
                    :style="{ ...blurBoxStyle, ...{ padding: '10px', margin: '10px', display: 'flex', border: '1px solid #cacaca' } }">

                    <div class="text-center p-0 border-round-sm bg-primary font-bold">
                        <div class="top_block">
                            <img :src="it.icon">
                            <div class="top_block__item_info"> {{ it.label }}
                                <div class="end_projects_count">
                                    <!-- Кружок зеленного цвета -->
                                    <div class="green_circle"></div>
                                    <span class="projects_count_label"> {{ it.endProjectsCount }} проекта </span>
                                </div>
                            </div>
                        </div>

                        <div class="middle_block"> {{ sliceText(it.desc) }} </div>

                        <div class="action_bar">
                            <PrimaryButton @click="$emit('openOrder', it)" class="standart-hover-effect-1"
                                :color-text-hex="'#1f2b2b'" :color-hex="'white'" :outlined="false"
                                text="Оформить заявку" />
                            <PrimaryButton @click="$emit('openMore', it)" class="standart-hover-effect-2"
                                :color-text-hex="'#ffffff'" :color-hex="'#ffffff'" :outlined="true" text="Подробнее" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import PrimaryButton from '@/components/ui/Buttons/PrimaryButton.vue';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import { defineProps, ref } from 'vue';
import { useBlurBox } from '@/components/ui/Effects/blurred.box';

const { blurBoxStyle } = useBlurBox({ width: '400px', height: '300px' });

const localInputText = ref('');

function localCleanInputText(emit_) {
    emit_('cleanInputTextEmit');
    localInputText.value = '';
}

function sliceText(text) {
    if (typeof text === 'string') {
        return text.trim().slice(0, 100) + '...';
    } else {
        return 'Ошибка';
    }
}

const props = defineProps({
    filteredServices: Array,
    inputText: String,
});
</script>

<style scoped>
.main-content {
    flex: 1;
    /* Зает оставшееся пространство (70%) */
    padding: 70px;
}

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
