<template>
    <OrderServiceDialog :visible="visibleOrderServiceDialog" :selectedService="selectedService" :inquiry="inquiry"
        :errors="errors" @closeDialog="closeOrderServiceDialog" @makeOrder="onMakeOrder" />

    <MoreServiceDialog :visible="visibleMoreService" :serviceInfo="selectedServiceInfo" @closeDialog="closeVisibleMoreService" />

    <div class="container">
        <div class="sidebar">
            <div class="our_services_title">Наши услуги</div>
            <div class="desc_services">Мобильные приложения, десктопные и веб-приложения, серверные решения и многое другое.</div>
            <div class="filter_group" v-for="it in filterGroupItems" :key="it.id" @click="selectFilterGroupItem(it)"
                :style="selectedFilterGroupItem.id === it.id ? { 'color': '#00f7ff' } : undefined">
                {{ it.label }}
            </div>
        </div>

        <ServiceList v-model:inputText="inputText" :filteredServices="filteredServicesComputed" @cleanInputTextEmit="cleanText"
            @openOrder="openOrderServiceDialog" @openMore="openMoreServiceDialog" />
    </div>
</template>

<script setup>
import { useServicesView } from '@/composables/views/ServicesView/useServicesView';
import OrderServiceDialog from '@/components/Dialogs/OrderServiceDialog.vue';
import MoreServiceDialog from '@/components/Dialogs/MoreServiceDialog.vue';
import ServiceList from '@/components/ServicesView/ServiceList.vue';

function cleanText() {
    console.log(inputText.value, 'clean try')
    cleanInputText();
}

const {
    cleanInputText,
    errors,
    filterGroupItems,
    filteredServicesComputed,
    inputText,
    inquiry,
    onMakeOrder,
    openMoreServiceDialog,
    openOrderServiceDialog,
    selectFilterGroupItem,
    selectedFilterGroupItem,
    selectedService,
    serviceInfo,
    selectedServiceInfo,
    visibleOrderServiceDialog,
    visibleMoreService,
    closeOrderServiceDialog,
    closeVisibleMoreService,
} = useServicesView();

</script>

<style scoped>
* {
    color: white;
}

.container {
    display: flex;
    width: 100%;
    height: 93vh;
    overflow: auto;
}

.sidebar {
    flex: 0 0 25%;
    padding: 70px;
    display: flex;
    flex-direction: column;
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
</style>