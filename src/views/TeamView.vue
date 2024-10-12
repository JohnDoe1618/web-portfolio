<template>
    <div class="team-view">
        <section class="employee-info-block">
            <div class="preview-block">
                <div class="preview-block__fg"></div>
                <img class="preview-block__image" src="../assets/preview/A__-fotor-bg-remover-202410111749.png" alt="Preview Image">
            </div>
            <div class="summary-block">
                <PrimaryButton />
            </div>
        </section>
    </div>
</template>


<script setup>
import PrimaryButton from '@/components/ui/Buttons/PrimaryButton.vue';

</script>

<style scoped>
.team-view {
    width: 100vw;
    height: calc(var(--router-layout-height) + 1vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.employee-info-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 1200px;
    height: 68%;
    border: 1px solid var(--base-border-color);
    border-radius: var(--base-rounded);
}
.preview-block {
    position: absolute;
    left: 7.5rem;
    width: 500px;
    height: 75vh !important;
    border-radius: var(--base-rounded);
    overflow: hidden;
    box-shadow: var(--base-shadow-1);
}
.preview-block__fg {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.07) 40%, rgba(0, 0, 0, 0.75) 100%);
}
.preview-block > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>