<template>
    <div class="col-12 lg:col-3 project_item"
        :style="{ ...{ padding: '10px', margin: '10px', display: 'flex', border: '1px solid #cacaca' } }">
        <Carousel :show-indicators="false" :autoplayInterval="5_000" :value="it.images" :numVisible="1" :numScroll="1"
            orientation="horizontal" verticalViewPortHeight="330px" containerClass="flex items-center">
            <template #item="{ data }">
                <img :src="data" class="project_image">
            </template>
        </Carousel>
        <div class="project_item-content">
            <span class="content_title">{{ it.name }}</span>
            <div class="content_detail_info-difficulty">
                <span>
                    Сложность: <span style="font-weight: 700;" :style="{ color: getDifficultyColor(it.difficulty) }">{{
                        it.difficulty }}</span>
                </span>
            </div>
            <div class="content_detail_info-tags">
                <span style="font-weight: 700;">Теги:</span>
            </div>
            <div class="content_detail_info-tags_list flex flex-wrap justify-center gap-2 mt-2">
                <Tag v-for="tag in it.tags" :key="tag.id" :value="tag.label"></Tag>
            </div>
            <div class="content_detail_info-button">
                <primary-button class="view_more_project-button" :color-text-hex="'black'" :color-hex="'black'"
                    :outlined="true" :text="'Подробнее'" @click="onSelectProject(it)"></primary-button>
            </div>
        </div>
    </div>
</template>

<script setup>
import PrimaryButton from '@/components/ui/Buttons/PrimaryButton.vue';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import { defineProps } from 'vue';

const props = defineProps({
    it: Object,
    getDifficultyColor: Function,
    onSelectProject: Function,
});
</script>

<style scoped>
.project_item {
    width: 420px;
    height: 500px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 15px;
}

.project_image {
    width: 100%;
    height: 250px;
    border-radius: 10px;
}

.project_item-content {
    margin-top: 10px;
    width: 100%;
    height: 100%;
    padding: 10px 10px;
}

.content_title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 17px;
    color: #565e63;
}

.content_detail_info-difficulty {
    margin-top: 10px;
    font-size: 15px;
    color: #565e63;
}

.content_detail_info-tags {
    margin-top: 10px;
    color: #565e63;
}

.content_detail_info-button {
    margin-top: 20px;
}
</style>
