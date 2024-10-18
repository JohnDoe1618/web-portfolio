<template>
    <Dialog v-model:visible="props.visible" modal header="Оформление Услуги" :style="{ width: '45rem' }">
        <template #closeicon>
            <div @click="$emit('closeDialog')" style="color: black;">
                <i class="pi pi-times" style="color: black"></i>
            </div>
        </template>

        <div class="main_content-dialog">
            <span class="text-surface-500 dark:text-surface-400 block mb-4" style="color: #79898a; text-align: center;">
                Вы выбрали одну из наших услуг. Заполните форму, чтобы известить нас о деталях услуги.
            </span>
            <div class="form_service">
                <span class="text-surface-500 dark:text-surface-400 block mb-3"
                    style="color: #79898a; text-align: start;">
                    Вы выбрали: <span class="choice_service_label">{{ selectedService }}</span>
                </span>
                <InputField v-model="props.inquiry.username" :error="errors.username"
                    placeholder="Введите ваше полное имя" />
                <InputField v-model="props.inquiry.email" :error="errors.email"
                    placeholder="Укажите ваш адрес электронной почты для связи." />
                <InputField v-model="props.inquiry.budget" :error="errors.budget"
                    placeholder="Укажите бюджет проекта" />
                <InputField v-model="props.inquiry.purpose" :error="errors.purpose"
                    placeholder="Кратко укажите тему вашего обращения." />
                <div class="card flex mt-2" style="align-items: center; justify-content: start; display: flex;">
                    <IftaLabel>
                        <span class="error">{{ errors.desc }}</span>
                        <!-- <label for="description">Описание</label> -->
                        <Textarea v-model="props.inquiry.desc" rows="8" cols="59" style="resize: none;" class="mt-1"
                            placeholder="Описание" />
                    </IftaLabel>
                </div>
                <div class="flex gap-3 mt-3" style="justify-content: end;">
                    <PrimaryButton @click="$emit('makeOrder')" text="Оформить" :color-hex="'#29cba9'" />
                </div>
            </div>
        </div>
    </Dialog>
</template>

<script setup>
import { defineProps } from 'vue';
import InputField from '../InputField.vue';
import PrimaryButton from '@/components/ui/Buttons/PrimaryButton.vue';
import Textarea from 'primevue/textarea';


const props = defineProps({
    visible: Boolean,
    selectedService: String,
    inquiry: Object,
    errors: Object,
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

.form_service {
    width: 80%;
    height: 100%;
    padding: 22px;
    color: #000000;
    border-radius: 4px;
}

.choice_service_label {
    color: #29cba9;
    font-weight: 700;
}

.error {
    color: red;
}
</style>
