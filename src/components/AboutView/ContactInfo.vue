<template>
    <div class="bottom__container">
        <div class="phone__number">{{ props.phone }}</div>
        <div class="pascal__text">{{ props.address }}</div>
    </div>
</template>

<script setup>

const props = defineProps({
    phone: String,
    address: String,
})

</script>

<style scoped>
.bottom__container {
    width: 100%;
    height: fit-content;
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
</style>
