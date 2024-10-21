<template>
    <Dialog v-model:visible="props.visible" modal header="Подробное описание"
        :style="{ width: '65rem', height: '50rem' }">
        <template #closeicon>
            <div @click="$emit('closeDialog')" style="color: black;">
                <i class="pi pi-times" style="color: black"></i>
            </div>
        </template>

        <div class="main_content-dialog">
            <div class="msd_top_content">
                <img :src="serviceInfo.imageSrc" width="300px" height="200px" class="msd_top_content-image">
                <div class="msd_top_content-introduction">
                    <span id="msd_top_content-label">{{ serviceInfo.label }}</span>
                    <span id="msd_top_content-desc">{{ serviceInfo.desc }}</span>
                </div>
            </div>

            <!-- Part: Technologies and tools for service -->
            <div class="tech_tools-content">
                <h3 class="tech_tools-label"> Технологии и инструменты </h3>
                <div class="tech_tools-grid_tech">
                    <div class="grid">
                        <div class="col-6" v-for="it in serviceInfo.technologies" :key="it.id">
                            <div class="tech_item">
                                <img :src="it.icon" class="tech_item-icon">
                                <div class="tech_item-info">
                                    <span class="tech_item-label"> {{ it.label }} </span>
                                    <span class="tech_item-desc"> {{ it.desc }} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Part: Timeline component -->
            <div class="msd_process_stages-content">
                <h3 class="msd_process_stages-title">
                    Этапы процесса разработки
                </h3>

                <!-- TIMELINE COMPONENT -->
                <div class="timeline_component-wrapper">
                    <Timeline :value="serviceInfo.stages" align="alternate" class="customized-timeline">
                        <template #marker="{ item }">
                            <!-- <div style="width: 14px; height: 14px; border-radius: 10rem;" :style="{backgroundColor: item.color}"></div> -->
                            <!-- <img :src="item.icon" width="40px" height="40px" style="border-radius: 10rem;"> -->
                        </template>
                        <template #content="{ item }">
                            <Card class="mt-4">
                                <template #title> {{ item.status }} </template>
                                <template #subtitle> В среднем <span style="color: teal;"> {{ item.timeline }} </span>
                                    дней </template>
                                <template #content>
                                    <img v-if="item.image"
                                        :src="`https://primefaces.org/cdn/primevue/images/product/${item.image}`"
                                        :alt="item.name" width="200" class="shadow-sm" />
                                    <p style="color: black;">
                                        {{ item.desc || `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Inventore sed
                                        consequuntur error repudiandae numquam deserunt quisquam repellat libero
                                        asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                                        neque quas!` }}
                                    </p>
                                </template>
                            </Card>
                        </template>
                    </Timeline>
                </div>
            </div>

            <div class="faq_content">
                <h3 class="faq_content-title">FAQ - Часто задаваемые вопросы</h3>
                <div class="faq_component">
                    <Accordion>
                        <AccordionPanel v-for="it in serviceInfo.faq" :key="it.value" :value="it.value">
                            <AccordionHeader>{{ it.title }}</AccordionHeader>
                            <AccordionContent>
                                <p class="m-0" style="color: black;">{{ it.content }}</p>
                            </AccordionContent>
                        </AccordionPanel>
                    </Accordion>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script setup>
import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';
import Dialog from 'primevue/dialog';
import Timeline from 'primevue/timeline';
import Card from 'primevue/card';
import { defineProps } from 'vue';

const props = defineProps({
    visible: Boolean,
    serviceInfo: Object,
});
</script>

<style scoped>
.main_content-dialog {
    width: 100%;
    height: 100%;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Диалоговое окно - "Подробнее" \ MoreServiceDialog styles */
.msd_top_content {
    width: 100%;
    height: auto;
    padding: 10px;
    display: flex;
    align-items: center;
}

.msd_top_content-image {
    border-radius: 10px;
}

.msd_top_content-introduction {
    margin-left: 22px;
    display: flex;
    flex-direction: column;
}

.msd_top_content-introduction #msd_top_content-label {
    font-size: 20px;
    font-weight: 700;
    color: #556068;
}

.msd_top_content-introduction #msd_top_content-desc {
    font-size: 16px;
    color: #556368;
    margin-top: 10px;
}

.tech_tools-content {
    width: 100%;
    height: fit-content;
    padding: 10px;
    margin-top: 30px;
}

.tech_tools-label {
    color: #556368;
    font-size: 16px;
    font-weight: 500;
}

.tech_tools-grid_tech {
    color: #383838;
    margin-top: 20px;
}

.tech_item {
    display: flex;
    align-items: center;
    border: 1px solid #d8d8d8;
    padding: 15px;
    height: 150px;
    border-radius: 5px;
}

.tech_item-icon {
    width: 60px;
    height: 60px;
}

.tech_item-info {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
}

.tech_item-info .tech_item-label {
    font-size: 18px;
    font-weight: 700;
    color: #383838;
}

.tech_item-info .tech_item-desc {
    color: #556068;
}

.msd_process_stages-content {
    margin-top: 20px;
    width: 100%;
    padding: 10px;
}

.msd_process_stages-title {
    color: #556368;
    font-size: 16px;
    font-weight: 500;
}

.timeline_component-wrapper {
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
}

/* MEDIA FOR TIMELINE */
@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row;

            .p-timeline-event-content {
                text-align: left;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }
    }
}

/* FAQ */

.faq_content {
    margin-top: 20px;
    width: 100%;
    padding: 10px;
}

.faq_content-title {
    color: #556368;
    font-size: 16px;
    font-weight: 500;
}

.faq_component {
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>