import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// PrimeVue
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import '/node_modules/primeflex/primeflex.css';

import App from './App.vue'
import router from './router'

// Components
import primevueComponents from '@/components/ui/primevue';
import DialogService from 'primevue/dialogservice';

const app = createApp(App)

// Регистрация компонентов PrimeVue
primevueComponents.forEach((component) => {
    app.component(component?.name, component);
});


app.use(DialogService)
app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
});
app.mount('#app')
