<template>
    <div class="main_content">
        <div class="title">Наш опыт разработки</div>
        <ExperienceFilter :buttonsFilterGroupList="buttonsFilterGroupList"
            :selectFilterGroupItem="selectFilterGroupItem" :selectedFilterGroupItem="selectedFilterGroupItem" />
        <div class="dataview grid">
            <ProjectItem v-for="it in filteredProjects" :key="it.id" :it="it" :getDifficultyColor="getDifficultyColor"
                :onSelectProject="onSelectProject" />
        </div>
        <ProjectDialog @closeDialog="changeVisibleMoreCaseDialog" :selectedProject="selectedProject"
            :visibleMoreCaseDialog="visibleMoreCaseDialog" />
    </div>
</template>

<script setup>
import ProjectDialog from '@/components/Dialogs/ProjectDialog.vue';
import ExperienceFilter from '@/components/ExperianceView/ExperienceFilter.vue';
import ProjectItem from '@/components/ExperianceView/ProjectItem.vue';
import { useExperianceView } from '@/composables/views/ExperianceView/useExperianceView';

const {
    filteredProjects,
    getDifficultyColor,
    onSelectProject,
    selectedProject,
    visibleMoreCaseDialog,
    changeVisibleMoreCaseDialog,
    buttonsFilterGroupList,
    selectFilterGroupItem,
    selectedFilterGroupItem,
} = useExperianceView();

</script>

<style scoped>
.main_content {
    width: 100%;
    height: 93vh;
    padding: 50px;
    overflow-x: hidden;
    overflow-y: auto;
}

.title {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    color: white;
    font-weight: 700;
    margin-bottom: 50px;
}


/* DATAVIEW COMPONENT styles */

.dataview {
    width: 100%;
    height: 100%;
    margin-top: 50px;
    display: flex;
    /* justify-content: center; */
}
</style>