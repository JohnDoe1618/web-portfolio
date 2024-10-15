import telegramIcon from '@/assets/icons/networks/telegram-icon.png';
import githubIcon from '@/assets/icons/networks/github-icon.png';
import twitterIcon from '@/assets/icons/networks/twitter.png';
import botIcon from '@/assets/icons/services-icons/develop-bots.png';
import mobIcon from '@/assets/icons/services-icons/develop-mob.png';
import serverIcon from '@/assets/icons/services-icons/servers-icon.png';
import { ref } from 'vue';

export function useAboutView() {
    const baseServicesList = ref([
        {
            id: 0,
            right: false,
            label: 'Мобильные приложения',
            desc: 'Разработка мобильных приложений для iOS и Android. Наша команда обеспечивает полный цикл услуг: от концепции и дизайна до разработки и поддержки',
            // icon: 'develop-mob.png',
            icon: mobIcon,
        },
        {
            id: 1,
            right: true,
            label: 'Боты, парсеры, плагины',
            desc: 'Разработке ботов, парсеров и плагинов. Наша команда создает эффективные решения для автоматизации процессов, извлечения данных и интеграции с различными платформами',
            // icon: 'develop-bots.png',
            icon: botIcon,
        },
        {
            id: 2,
            right: false,
            label: 'Сервера, Базы данных',
            desc: 'Разработка и управлении серверами и базами данных. Мы предоставляем услуги по настройке, мониторингу и оптимизации серверной инфраструктуры',
            // icon: 'servers-icon.png',
            icon: serverIcon,
        },
    ]);

    const items = ref([
        {
            label: 'App Store',
            icon: twitterIcon
        },
        {
            label: 'Photos',
            icon: telegramIcon
        },
        {
            label: 'Trash',
            icon: githubIcon
        }
    ]);

    const position = ref('right');

    // Асинхронное получение динамичного пути по спецификации vite сборщика
    async function getIconPath(icon) {
        try {
            const image = await import(`@/assets/icons/services-icons/${icon}`);
            return image.default; // Возвращаем путь к изображению
        } catch (error) {
            console.error('Ошибка загрузки изображения:', error);
            return ''; // Возвращаем пустую строку в случае ошибки
        }
    }


    return {
        baseServicesList,
        items,
        position,
        getIconPath,
    }
}