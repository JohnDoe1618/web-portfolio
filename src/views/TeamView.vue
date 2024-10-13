<template>
    <div class="team-view">
        <section class="employee-info-block">
            <transition name="slide-fade-prev">
                <previewImageBlock v-if="s"/>
            </transition>

            <transition name="slide-fade-sum">
                <previewSummaryBlock v-if="s"/>
            </transition>
        </section>
    </div>
</template>


<script setup>
import previewImageBlock from '@/components/teams/previewImageBlock.vue';
import previewSummaryBlock from '@/components/teams/previewSummaryBlock.vue';
import { onMounted, ref } from 'vue';

const s = ref(false)

onMounted(() => {
    setTimeout(() => {
        s.value = true
    }, 400)
})
</script>

<style scoped>
/* Animation Preview Block*/
.slide-fade-prev-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-prev-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-prev-enter-from,
.slide-fade-prev-leave-to {
  transform: translate(50px, 0px);
  opacity: 0;
}
/* Animation Summary Block */
.slide-fade-sum-enter-active {
  transition: all 0.4s ease-out;
}

.slide-fade-sum-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-sum-enter-from,
.slide-fade-sum-leave-to {
  transform: translate(-50px, 0px);
  opacity: 0;
}

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