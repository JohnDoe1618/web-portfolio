<template>
    <div class="team-view">
        <section class="employee-info-block">
            <previewImageBlock />
            <div class="summary-block">
            </div>
        </section>
    </div>
</template>


<script setup>
import previewImageBlock from '@/components/teams/previewImageBlock.vue';

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

</style>