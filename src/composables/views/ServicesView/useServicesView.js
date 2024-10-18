import { computed, reactive, ref } from 'vue';
import axios from 'axios';

export function useServicesView() {

    const visibleOrderServiceDialog = ref(false);
    const selectedFilterGroupItem = ref({});
    const selectedService = ref('');
    const inputText = ref('');
    const visibleMoreService = ref(false);
    const filterGroupItems = ref([
        {
            id: 0,
            label: "Веб разработка",
            code: "web"
        },
        {
            id: 1,
            label: "Мобильная разработка",
            code: "mobile"
        },
        {
            id: 2,
            label: "Серверная разработка",
            code: "server"
        },
        {
            id: 3,
            label: "Десктоп разработка",
            code: "desktop"
        },
        {
            id: 4,
            label: "Разработка плагинов",
            code: "plugs"
        },
    ]);
    const serviceList = ref([
        {
            id: 0,
            label: 'Мобильные приложения',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/mobile_phone_14388.png?alt=media&token=f41ccd8c-b193-46e8-84f7-98ac2af45c7b',
            endProjectsCount: 4,
            desc: "Мобильные приложения, десктопные и веб-приложения, серверные решения и многое другое",
            category: "mobile",
        },
        {
            id: 1,
            label: 'Дизайн мобильных приложений',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/mobile_phone_14388.png?alt=media&token=f41ccd8c-b193-46e8-84f7-98ac2af45c7b',
            endProjectsCount: 6,
            desc: "Мобильные приложения, десктопные и веб-приложения, серверные решения и многое другое",
            category: "desktop",
        },
        {
            id: 2,
            label: 'Прототипирование моб приложений',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/mobile_phone_14388.png?alt=media&token=f41ccd8c-b193-46e8-84f7-98ac2af45c7b',
            endProjectsCount: 2,
            desc: "Мобильные приложения, десктопные и веб-приложения, серверные решения и многое другое",
            category: "web",
        },
        {
            id: 3,
            label: 'Доработка приложения',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/mobile_phone_14388.png?alt=media&token=f41ccd8c-b193-46e8-84f7-98ac2af45c7b',
            endProjectsCount: 2,
            desc: "Мобильные приложения, десктопные и веб-приложения, серверные решения и многое другое",
            category: "server",
        },
    ]);

    const inquiry = reactive({
        username: '',
        email: '',
        budget: '',
        purpose: '',
        desc: '',
    })

    const errors = reactive({
        username: '',
        email: '',
        budget: '',
        purpose: '',
        desc: '',
    });

    const serviceInfo = reactive({
        imageSrc: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/6ebfde4e-42b0-45e5-af28-3f6e8ba9b212.jpeg?alt=media&token=8e916660-f863-4aba-ba7a-7e252deaa62a',
        label: 'Разработка мобильных приложений в Abstergo',
        desc: 'В Abstergo мы предлагаем профессиональные услуги по разработке мобильных приложений, используя современные технологии и инструменты, такие как Dart и Flutter. Наша команда опытных разработчиков создает высококачественные, производительные и эстетически привлекательные приложения для платформ iOS и Android.',
        technologies: [
            {
                id: 0,
                label: 'Dart',
                desc: 'Язык программирования для разработки мобильных приложений и не только...',
                icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/seamonkey_browser_logo_icon_152961.ico?alt=media&token=6948a145-b9a4-4427-9d3a-f28d3d13fd2a',
            },
            {
                id: 1,
                label: 'Flutter',
                desc: 'Flutter - платформа для разработки кросплатформенных приложений под различные устройства, включая android и ios',
                icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/seamonkey_browser_logo_icon_152961.ico?alt=media&token=6948a145-b9a4-4427-9d3a-f28d3d13fd2a',
            },
            {
                id: 2,
                label: 'Облачные сервисы',
                desc: 'Используем различные облачные сервисы для разработки приложений: AWS, Google cloud, Azure...',
                icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/seamonkey_browser_logo_icon_152961.ico?alt=media&token=6948a145-b9a4-4427-9d3a-f28d3d13fd2a',
            },
            {
                id: 3,
                label: 'Базы данных',
                desc: 'В разработке мобильных приложений мы используем различные базы данных MySql, Postgresql, mongodb, supabase...',
                icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/seamonkey_browser_logo_icon_152961.ico?alt=media&token=6948a145-b9a4-4427-9d3a-f28d3d13fd2a',
            },
        ],
        stages: [
            { status: 'Processing', timeline: '30-45', icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2F1490889638-app-store_82517.png?alt=media&token=0ca0785a-cd56-4694-877a-00bb5ef0d9cd', color: '#673AB7' },
            { status: 'Shipped', timeline: '20-50', icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2F1490889638-app-store_82517.png?alt=media&token=0ca0785a-cd56-4694-877a-00bb5ef0d9cd', color: '#FF9800' },
            { status: 'Delivered', timeline: '10-20', icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fcodinghtml_117796.png?alt=media&token=f92b4e4b-404a-4300-b2e1-56538046c8b5', color: '#607D8B' },
        ],
        faq: [
            { title: 'Что делать если 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', value: '0' },
            { title: 'Что делать если 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', value: '1' },
            { title: 'Что делать если 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', value: '2' }
        ],
    });

    // functions
    // Запрос на модерацию\регистрацию услуги
    async function onRequestMakeOrder() {
        try {
            const response = await axios.post('/api/v1/orders', inquiry);
            console.log('Order successfully created', response.data);
        } catch (error) {
            console.error('Error while creating order', error);
        }
    }

    function openMoreServiceDialog(service) {
        visibleMoreService.value = true;
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validateInquiry() {
        let isValid = true;

        // Username validation
        if (!inquiry.username) {
            errors.username = 'Имя обязательно для заполнения.';
            isValid = false;
        } else {
            errors.username = '';
        }

        // Email validation
        if (!inquiry.email) {
            errors.email = 'Email обязателен для заполнения.';
            isValid = false;
        } else if (!validateEmail(inquiry.email)) {
            errors.email = 'Неверный формат email.';
            isValid = false;
        } else {
            errors.email = '';
        }

        // Budget validation
        if (!inquiry.budget) {
            errors.budget = 'Бюджет обязателен для заполнения.';
            isValid = false;
        } else if (isNaN(inquiry.budget)) {
            errors.budget = 'Бюджет должен быть числом.';
            isValid = false;
        } else {
            errors.budget = '';
        }

        // Purpose validation
        if (!inquiry.purpose) {
            errors.purpose = 'Цель обращения обязательна для заполнения.';
            isValid = false;
        } else {
            errors.purpose = '';
        }

        // Description validation
        if (!inquiry.desc) {
            errors.desc = 'Описание обязательно для заполнения.';
            isValid = false;
        } else {
            errors.desc = '';
        }

        return isValid;
    }

    function onMakeOrder() {
        if (validateInquiry()) {
            console.log('Confirmed order', inquiry);
            // Здесь будет сетевой запрос
            // например, axios.post('/api/orders', inquiry)
        } else {
            console.log('Валидация не пройдена', errors);
        }
    }

    // Input features
    const cleanInputText = () => inputText.value = '';

    // Utility features
    function selectService(service) {
        selectedService.value = service
    }

    function sliceText(text) {
        if (typeof text === 'string') {
            return text.trim().slice(0, 100) + '...';
        } else {
            return 'Ошибка';
        }
    }

    // < Filtered features >
    function selectFilterGroupItem(it) {
        if (selectedFilterGroupItem?.value?.id === it.id) {
            selectedFilterGroupItem.value = { id: -1 };
            return;
        }
        selectedFilterGroupItem.value = it;
    }

    // Фильтрация по категории и по названию
    function filterServiceItems(value) {
        let filteredServicesList = serviceList.value;

        // Фильтрация по названию
        if (value) {
            const searchTerm = value.toLowerCase();
            filteredServicesList = filteredServicesList.filter(service =>
                service.label.toLowerCase().includes(searchTerm)
            );
        }

        // Фильтрация по категории
        if (selectedFilterGroupItem.value.code) {
            filteredServicesList = filteredServicesList.filter(service =>
                service.category === selectedFilterGroupItem.value.code
            );
        }

        return filteredServicesList;
    }

    function openOrderServiceDialog(service) {
        console.log("open order service dialog");
        selectService(service?.label);
        visibleOrderServiceDialog.value = true;
    }

    const closeOrderServiceDialog = () => visibleOrderServiceDialog.value = false;
    const closeVisibleMoreService = () => visibleMoreService.value = false;

    // computed
    const filteredServicesComputed = computed(() => {
        return filterServiceItems(inputText.value);
    });


    return {
        visibleOrderServiceDialog,
        selectedFilterGroupItem,
        selectedService,
        inputText,
        visibleMoreService,
        filterGroupItems,
        serviceList,
        inquiry,
        errors,
        serviceInfo,

        onRequestMakeOrder,
        openMoreServiceDialog,
        validateEmail,
        validateInquiry,
        onMakeOrder,
        cleanInputText,
        selectService,
        sliceText,
        selectFilterGroupItem,
        filterServiceItems,
        openOrderServiceDialog,
        closeOrderServiceDialog,
        closeVisibleMoreService,

        filteredServicesComputed,
    }
}