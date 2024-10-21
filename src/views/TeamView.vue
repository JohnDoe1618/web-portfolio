<template>
    <div class="team-view">
        <!-- <Carousel :value="mainTeamStore.teams" :numVisible="1" :numScroll="1" orientation="horizontal" verticalViewPortHeight="330px" containerClass="flex items-center">
            <template #item="slotProps">
                <section 
                :id="infoSectionId" 
                class="employee-info-block"
                >
                    <previewImageBlock 
                    :main-id="previewId"
                    :preview-data="{}"
                    />
                    <previewSummaryBlock 
                    :main-id="summaryId"
                    />
                </section>
                <div class="border border-surface-200 dark:border-surface-700 rounded m-2  p-4">
                    <div class="mb-4">
                        <div class="relative mx-auto">
                            <img :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image" :alt="slotProps.data.name" class="w-full rounded" />
                            <Tag :value="slotProps.data.inventoryStatus" :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute" style="left:5px; top: 5px"/>
                        </div>
                    </div>
                    <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
                    <div class="flex justify-between items-center">
                        <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
                        <span>
                            <Button icon="pi pi-heart" severity="secondary" outlined />
                            <Button icon="pi pi-shopping-cart" class="ml-2"/>
                        </span>
                    </div>
                </div>
            </template>
        </Carousel> -->
        <buttonSlide 
        icon-direction="left"
        @click=""
        />

        <RouterView />

        <buttonSlide 
        icon-direction="right"
        @click=""
        />
    </div>
</template>


<script setup>
import buttonSlide from '@/components/teams/buttonSlide.vue';
import { useAnimTeamsStore } from '@/stores/teams/animStore';
import { onMounted } from 'vue';
import { useMainTeamsStore } from '@/stores/teams/mainStore';
import { RouterView, useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const animStore = useAnimTeamsStore();
const mainTeamStore = useMainTeamsStore();
const { previewId, summaryId, infoSectionId } = animStore;
const { executeAllTeamsAnimation, infoSectionAnim, adaptiveInfoSection, debounce } = useAnimTeamsStore()

onMounted(async () => {
    // Провяление анимаций
    // Основной виджет
    await infoSectionAnim(infoSectionId, { delay: 0.3, duration: 0.2 });
    // Внутренние виджеты
    await executeAllTeamsAnimation([
        { id: previewId, config: { delay: 100, duration: 0.4, scale: 1, opacity: 1, transform: { x: 0, y: 0 } } },
        { id: summaryId, config: { delay: 100, duration: 0.4, scale: 1, opacity: 1, transform: { x: 0, y: 0 } } },
    ]);

    // // Ичезновение 
    // setTimeout(async () => {
    //     await executeAllTeamsAnimation([
    //         { id: previewId.value, config: { delay: 0, duration: 0.4, scale: 0, opacity: 0, transform: { x: -350, y: 0 } } },
    //         { id: summaryId.value, config: { delay: 0, duration: 0.4, scale: 0, opacity: 0, transform: { x: 350, y: 0 } } },
    //     ])
    //     await infoSectionAnim(infoSectionId.value, { delay: 0.2, duration: .4, isFade: true, width: 50, opacity: 0 });
    // }, 3400)

    // Адаптив
    window.addEventListener('resize', debounce((e) => {
        adaptiveInfoSection(e.target.outerWidth, e.target.outerHeight);
    }, 100));
});
</script>

<style scoped>
.team-view {
    width: 100vw;
    overflow: hidden;
    height: calc(var(--router-layout-height) + 1vh);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
}
</style>