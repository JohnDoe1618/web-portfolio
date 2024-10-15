import { reactive, ref, computed } from 'vue';


export function useExperianceView() {

    const visibleMoreCaseDialog = ref(false);
    const selectedProject = ref(null);

    const buttonsFilterGroupList = ref([
        {
            id: 0,
            colorText: 'black',
            colorHex: '#fff',
            outlined: false,
            text: 'Все',
            category: 'all',
        },
        {
            id: 1,
            colorText: 'white',
            colorHex: 'white',
            outlined: true,
            text: 'Прототипирование',
            category: 'prototyping',
        },
        {
            id: 2,
            colorText: 'white',
            colorHex: 'white',
            outlined: true,
            text: 'Разработка',
            category: 'development',
        },
        {
            id: 3,
            colorText: 'white',
            colorHex: 'white',
            outlined: true,
            text: 'Дизайн',
            category: 'design',
        },
        {
            id: 4,
            colorText: 'white',
            colorHex: 'white',
            outlined: true,
            text: 'Архитектура и проектирование',
            category: 'architectureAndEngineering',
        },
        {
            id: 5,
            colorText: 'white',
            colorHex: 'white',
            outlined: true,
            text: 'Плагины',
            category: 'plagins',
        },
        {
            id: 6,
            colorText: 'white',
            colorHex: 'white',
            outlined: true,
            text: 'Парсеры',
            category: 'parsers',
        },
        {
            id: 7,
            colorText: 'white',
            colorHex: 'white',
            outlined: true,
            text: 'Боты',
            category: 'bots',
        },
    ]);

    const projects = reactive(
        [
            {
                id: 0,
                difficulty: 'Низкая',
                name: 'Antarctica View',
                images: [
                    'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/project-images%2FAntarctica%20Website.jpg?alt=media&token=a60a9e24-157a-4703-a9f8-8d74e3e1f595',
                    'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/project-images%2FAntarctica%20Website.jpg?alt=media&token=a60a9e24-157a-4703-a9f8-8d74e3e1f595',
                    'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/project-images%2FAntarctica%20Website.jpg?alt=media&token=a60a9e24-157a-4703-a9f8-8d74e3e1f595',
                ],
                price: 60_000,
                category: 'design',
                tags: [
                    {
                        id: 0,
                        label: 'Дизайн',
                    },
                    {
                        id: 1,
                        label: 'Сайт',
                    },
                ],
                status: 'ready',
                rating: 5,
                detailInfo: {
                    objective: 'Создать современное веб-приложение для управления проектами, которое будет включать функционал для отслеживания задач, взаимодействия команды и отчетности',
                    realization: 'Мы разработали удобный интерфейс, который позволяет пользователям легко создавать и управлять задачами. Используя Vue и Nuxt, мы обеспечили быструю и отзывчивую работу приложения. Серверная часть была реализована на Node.js с использованием TypeScript для повышения надежности кода. Мы интегрировали API для взаимодействия с внешними сервисами и реализовали систему аутентификации пользователей. Работая в команде, мы провели несколько итераций по сбору обратной связи и доработке функционала, что позволило достичь высокой степени удовлетворенности клиента',
                    timeRealization: "3 месяца",
                    technologyUsed: [
                        {
                            id: 0,
                            label: 'Vue'
                        },
                        {
                            id: 1,
                            label: 'Nuxt'
                        },
                        {
                            id: 2,
                            label: 'Node.js'
                        },
                        {
                            id: 3,
                            label: 'TypeScript'
                        },
                        {
                            id: 4,
                            label: 'JavaScript'
                        }
                    ],
                }
            },
            {
                id: 1,
                difficulty: 'Низкая',
                name: 'Antarctica View',
                images: [
                    'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/project-images%2FAntarctica%20Website.jpg?alt=media&token=a60a9e24-157a-4703-a9f8-8d74e3e1f595',
                    'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/project-images%2FAntarctica%20Website.jpg?alt=media&token=a60a9e24-157a-4703-a9f8-8d74e3e1f595',
                ],
                price: 20_000,
                category: 'prototyping',
                tags: [
                    {
                        id: 0,
                        label: 'Разработка',
                    },
                    {
                        id: 1,
                        label: 'Моб приложение',
                    },
                ],
                status: 'ready',
                rating: 5,
                detailInfo: {
                    objective: 'Создать современное веб-приложение для управления проектами, которое будет включать функционал для отслеживания задач, взаимодействия команды и отчетности',
                    realization: 'Мы разработали удобный интерфейс, который позволяет пользователям легко создавать и управлять задачами. Используя Vue и Nuxt, мы обеспечили быструю и отзывчивую работу приложения. Серверная часть была реализована на Node.js с использованием TypeScript для повышения надежности кода. Мы интегрировали API для взаимодействия с внешними сервисами и реализовали систему аутентификации пользователей. Работая в команде, мы провели несколько итераций по сбору обратной связи и доработке функционала, что позволило достичь высокой степени удовлетворенности клиента',
                    timeRealization: "3 месяца",
                    technologyUsed: [
                        {
                            id: 0,
                            label: 'Vue'
                        },
                        {
                            id: 1,
                            label: 'Nuxt'
                        },
                        {
                            id: 2,
                            label: 'Node.js'
                        },
                        {
                            id: 3,
                            label: 'TypeScript'
                        },
                        {
                            id: 4,
                            label: 'JavaScript'
                        }
                    ],
                }
            },
            {
                id: 2,
                difficulty: 'Средняя',
                name: 'Antarctica View',
                images: [
                    'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/project-images%2FAntarctica%20Website.jpg?alt=media&token=a60a9e24-157a-4703-a9f8-8d74e3e1f595'
                ],
                price: 60_000,
                category: 'design',
                tags: [
                    {
                        id: 0,
                        label: 'Дизайн',
                    },
                    {
                        id: 1,
                        label: 'Сайт',
                    },
                ],
                status: 'process',
                rating: 5,
                detailInfo: {
                    objective: 'Создать современное веб-приложение для управления проектами, которое будет включать функционал для отслеживания задач, взаимодействия команды и отчетности',
                    realization: 'Мы разработали удобный интерфейс, который позволяет пользователям легко создавать и управлять задачами. Используя Vue и Nuxt, мы обеспечили быструю и отзывчивую работу приложения. Серверная часть была реализована на Node.js с использованием TypeScript для повышения надежности кода. Мы интегрировали API для взаимодействия с внешними сервисами и реализовали систему аутентификации пользователей. Работая в команде, мы провели несколько итераций по сбору обратной связи и доработке функционала, что позволило достичь высокой степени удовлетворенности клиента',
                    timeRealization: "3 месяца",
                    technologyUsed: [
                        {
                            id: 0,
                            label: 'Vue'
                        },
                        {
                            id: 1,
                            label: 'Nuxt'
                        },
                        {
                            id: 2,
                            label: 'Node.js'
                        },
                        {
                            id: 3,
                            label: 'TypeScript'
                        },
                        {
                            id: 4,
                            label: 'JavaScript'
                        }
                    ],
                }
            },
            {
                id: 3,
                difficulty: 'Средняя',
                name: 'Antarctica View',
                images: [
                    'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/project-images%2FAntarctica%20Website.jpg?alt=media&token=a60a9e24-157a-4703-a9f8-8d74e3e1f595'
                ],
                price: 60_000,
                category: 'design',
                tags: [
                    {
                        id: 0,
                        label: 'Дизайн',
                    },
                    {
                        id: 1,
                        label: 'Сайт',
                    },
                ],
                status: 'process',
                rating: 5,
                detailInfo: {
                    objective: 'Создать современное веб-приложение для управления проектами, которое будет включать функционал для отслеживания задач, взаимодействия команды и отчетности',
                    realization: 'Мы разработали удобный интерфейс, который позволяет пользователям легко создавать и управлять задачами. Используя Vue и Nuxt, мы обеспечили быструю и отзывчивую работу приложения. Серверная часть была реализована на Node.js с использованием TypeScript для повышения надежности кода. Мы интегрировали API для взаимодействия с внешними сервисами и реализовали систему аутентификации пользователей. Работая в команде, мы провели несколько итераций по сбору обратной связи и доработке функционала, что позволило достичь высокой степени удовлетворенности клиента',
                    timeRealization: "3 месяца",
                    technologyUsed: [
                        {
                            id: 0,
                            label: 'Vue'
                        },
                        {
                            id: 1,
                            label: 'Nuxt'
                        },
                        {
                            id: 2,
                            label: 'Node.js'
                        },
                        {
                            id: 3,
                            label: 'TypeScript'
                        },
                        {
                            id: 4,
                            label: 'JavaScript'
                        }
                    ],
                }
            },
            {
                id: 4,
                difficulty: 'Средняя',
                name: 'Antarctica View',
                images: [
                    'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/project-images%2FAntarctica%20Website.jpg?alt=media&token=a60a9e24-157a-4703-a9f8-8d74e3e1f595'
                ],
                price: 60_000,
                category: 'design',
                tags: [
                    {
                        id: 0,
                        label: 'Дизайн',
                    },
                    {
                        id: 1,
                        label: 'Сайт',
                    },
                ],
                status: 'process',
                rating: 5,
                detailInfo: {
                    objective: 'Создать современное веб-приложение для управления проектами, которое будет включать функционал для отслеживания задач, взаимодействия команды и отчетности',
                    realization: 'Мы разработали удобный интерфейс, который позволяет пользователям легко создавать и управлять задачами. Используя Vue и Nuxt, мы обеспечили быструю и отзывчивую работу приложения. Серверная часть была реализована на Node.js с использованием TypeScript для повышения надежности кода. Мы интегрировали API для взаимодействия с внешними сервисами и реализовали систему аутентификации пользователей. Работая в команде, мы провели несколько итераций по сбору обратной связи и доработке функционала, что позволило достичь высокой степени удовлетворенности клиента',
                    timeRealization: "3 месяца",
                    technologyUsed: [
                        {
                            id: 0,
                            label: 'Vue'
                        },
                        {
                            id: 1,
                            label: 'Nuxt'
                        },
                        {
                            id: 2,
                            label: 'Node.js'
                        },
                        {
                            id: 3,
                            label: 'TypeScript'
                        },
                        {
                            id: 4,
                            label: 'JavaScript'
                        }
                    ],
                }
            },
        ]
    );

    const selectedFilterGroupItem = ref({
        id: 0,
        colorText: 'black',
        colorHex: '#fff',
        outlined: false,
        text: 'Все',
        category: 'all',
    });


    // Функции
    function selectFilterGroupItem(item) {
        selectedFilterGroupItem.value = item;
    };

    const getStatus = (project) => {
        switch (project.status) {
            case 'ready':
                return 'success';
            case 'process':
                return 'warn';
            case 'canceled':
                return 'danger';
            default:
                return null;
        }
    };

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'Низкая':
                return 'green'
            case 'Средняя':
                return 'orange';
            case 'Высокая':
                return 'red';
            default:
                break;
        }
    };

    function onSelectProject(project) {
        console.log('onSelectProject', project);
        visibleMoreCaseDialog.value = true;
        selectedProject.value = project
    };

    const changeVisibleMoreCaseDialog = (value) => visibleMoreCaseDialog.value = value;

    // Computed
    const filteredProjects = computed(() => {
        if (!selectedFilterGroupItem.value || selectedFilterGroupItem.value.category === 'all') {
            return projects; // Возвращаем все проекты, если не выбрана фильтрация
        }

        return projects.filter(project =>
            project.tags.some(tag => tag.label === selectedFilterGroupItem.value.text)
        );
    });

    return {
        buttonsFilterGroupList,
        selectedFilterGroupItem,
        projects,
        visibleMoreCaseDialog,
        selectedProject,

        selectFilterGroupItem,
        getStatus,
        getDifficultyColor,
        onSelectProject,
        changeVisibleMoreCaseDialog,

        filteredProjects,
    }
}