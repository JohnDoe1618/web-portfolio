<template>
    <div>
        <Menubar :model="items" :style="navbarDisplayContent">
            <template #start>
                <div>
                    <h2 class="p-0" style="font-weight: 700;">
                        HB
                    </h2>
                </div>
            </template>
            <template #item="{ item }">
                <div class="p-2 customize-button-hover-effect" :style="navbarItemStyle">
                    {{ item.label }}
                </div>
            </template>
        </Menubar>
    </div>
</template>
<script setup>
import Menubar from 'primevue/menubar';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

// Init base variables
const router = useRouter();

// Init items for menubar
const items = ref([
    {
        separator: true
    },
    {
        separator: true
    },
    {
        separator: true
    },
    {
        label: 'О нас',
        command: () => switchOnView('about-us')
    },
    {
        label: 'Услуги',
        command: () => switchOnView('our-services')
    },
    {
        label: 'Кейсы',
        command: () => switchOnView('our-experiance')
    },
    {
        label: 'Команда',
        command: () => switchOnView('our-team')
    },
]);

// Instates routes, feature for switching between views
const switchOnView = (route) => router.push({ name: route })

// styling
const navbarDisplayContent = reactive({
    display: "flex",
    "background-color": 'rgba(255, 255, 255, 0.1)',
    color: 'azure',
    // alignItems: "center", 
    // justifyContent: "center"
});

const navbarItemStyle = reactive({
    cursor: 'pointer',
    color: 'white',
})

</script>

<style scoped>
.customize-button-hover-effect:hover {
    color: rgb(46, 64, 68) !important;
    transition: .3s ease;
}
</style>