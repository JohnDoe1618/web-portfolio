import { defineStore } from "pinia";
import { ref } from "vue";
import { mdiRocketLaunchOutline, mdiCodeTags, mdiDatabaseOutline, mdiSecurity } from '@mdi/js';

export const useMainTeamsStore = defineStore('mainTeamsStore', () => {
    const teams = ref([
        {
            id: 'jd2sf3',
            widget: 1,
            preview: {
                image: 'img1',
                fullname: 'Эвери Владислав',
                jobTitle: 'Full-stack разработчик',
            },
            about: {
                tags: ['22 года', 'Full-stack', 'опыт 3 года' ],
                descriptionBlock: [
                    {
                        title: 'Клиентская часть', 
                        description: 'Cоздаю красивые и интуитивно понятные интерфейсы, которые обеспечивают отличный пользовательский опыт. Использую актуальные фреймворки, такие как React и Vue.js, чтобы сделать ваши сайты адаптивными и быстро загружаемыми.',
                    },
                    { 
                        title: 'Серверная часть', 
                        description: 'Разрабатываю надежные серверные решения с использованием современных технологий. Это включает в себя создание API, работу с базами данных и интеграцию с внешними сервисами. Я уделяю особое внимание безопасности данных и производительности приложений.', 
                    },
                ],
                services: [
                    {
                        title: 'Ебля',
                        icon: mdiCodeTags,
                        description: 'Создание отзывчивых и интерактивных веб-приложений. Поддержка существующих проектов',
                    },
                    {
                        title: 'Оптимизация',
                        icon: mdiRocketLaunchOutline,
                        description: 'Проведение тестирования приложений. Выявление слабых мест в программе для повышения производительности',
                    },
                    {
                        title: 'Базы данных',
                        icon: mdiDatabaseOutline,
                        description: 'SSL-Сертификация, настройка, развертывание и поддержка систем упраления базами данных',
                    },
                    {
                        title: 'Защита данных',
                        icon: mdiSecurity,
                        description: 'Выявление уязвимых мест в приложениях. Внедрение современных технологий защиты данных.',
                    },

                ],
            }
        },
        {
            id: 'kf83if',
            widget: 2,
            preview: {
                image: 'img2',
                fullname: 'Эртман Эрик',
                jobTitle: 'Full-stack разработчик',
            },
            about: {
                tags: ['22 года', 'Full-stack', 'опыт 4 года' ],
                descriptionBlock: [
                    { 
                        title: 'Серверная часть', 
                        description: 'Разрабатываю надежные серверные решения с использованием современных технологий. Это включает в себя создание API, работу с базами данных и интеграцию с внешними сервисами. Я уделяю особое внимание безопасности данных и производительности приложений.', 
                    },
                    {
                        title: 'Серверная часть', 
                        description: 'Cоздаю красивые и интуитивно понятные интерфейсы, которые обеспечивают отличный пользовательский опыт. Использую актуальные фреймворки, такие как React и Vue.js, чтобы сделать ваши сайты адаптивными и быстро загружаемыми.',
                    },

                ],
                services: [
                    {
                        title: 'Разработка',
                        icon: mdiCodeTags,
                        description: 'Создание отзывчивых и интерактивных веб-приложений. Поддержка существующих проектов',
                    },
                    {
                        title: 'Оптимизация',
                        icon: mdiRocketLaunchOutline,
                        description: 'Проведение тестирования приложений. Выявление слабых мест в программе для повышения производительности',
                    },
                    {
                        title: 'Базы данных',
                        icon: mdiDatabaseOutline,
                        description: 'SSL-Сертификация, настройка, развертывание и поддержка систем упраления базами данных',
                    },
                    {
                        title: 'Защита данных',
                        icon: mdiSecurity,
                        description: 'Выявление уязвимых мест в приложениях. Внедрение современных технологий защиты данных.',
                    },

                ],
            }
        },
    ]);
    const widgetData = ref(null);

    // Actions
    function debounceWatcher(func=(newVal, oldVal) => {}, delay=200) {
        let timerId;
        return (newVal, oldVal) => {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                func.call(this, newVal, oldVal);
            }, delay)
        }
    }

    return {
        teams,
        widgetData,
        debounceWatcher,
    }
}) 