import { defineStore } from "pinia";
import { ref } from "vue";
import { mdiRocketLaunchOutline, mdiCodeTags, mdiDatabaseOutline, mdiSecurity } from '@mdi/js';

export const useMainTeamsStore = defineStore('mainTeamsStore', () => {
    const teams = ref([
        {
            id: 'jd2sf3',
            preview: {
                image: '../../assets/preview/A__-fotor-bg-remover-202410111749.png',
                fullname: 'Эвери Владислав',
                jobTitle: 'Full-stack разработчик',
            },
            about: {
                tags: ['22 года', 'Full-stack', 'опыт 3 года' ],
                descriptionBlock: [
                    { 
                        title: 'Серверная часть:', 
                        description: 'Разрабатываю надежные серверные решения с использованием современных технологий. Это включает в себя создание API, работу с базами данных и интеграцию с внешними сервисами. Я уделяю особое внимание безопасности данных и производительности приложений.', 
                    },
                    {
                        title: 'Серверная часть:', 
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
        {
            id: 'kf83if',
            preview: {
                image: '../../assets/preview/08L2NBqfkhCGh9HA86Crg_transformed_fotor_2024022417932_fotor_bg_remover.png',
                fullname: 'Эртман Эрик',
                jobTitle: 'Full-stack разработчик',
            },
            about: {
                tags: ['22 года', 'Full-stack', 'опыт 3 года' ],
                descriptionBlock: [
                    { 
                        title: 'Серверная часть:', 
                        description: 'Разрабатываю надежные серверные решения с использованием современных технологий. Это включает в себя создание API, работу с базами данных и интеграцию с внешними сервисами. Я уделяю особое внимание безопасности данных и производительности приложений.', 
                    },
                    {
                        title: 'Серверная часть:', 
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
    ])

    return {
        teams,
    }
}) 