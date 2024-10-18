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
            label: "Web инфраструктура",
            code: "web"
        },
        {
            id: 1,
            label: "Мобильная инфраструктура",
            code: "mobile"
        },
        {
            id: 2,
            label: "Серверная инфраструктура",
            code: "software"
        },
        {
            id: 3,
            label: "Десктоп инфраструктура",
            code: "desktop"
        },
        {
            id: 4,
            label: "Разработка плагинов",
            code: "plugs"
        },
        {
            id: 5,
            label: "Полный цикл",
            code: "full_cycle"
        },
        {
            id: 6,
            label: "Интеграция с API",
            code: "api"
        },
    ]);
    const serviceList = ref([
        {
            id: 0,
            label: 'Мобильные приложения',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/mobile_phone_14388.png?alt=media&token=f41ccd8c-b193-46e8-84f7-98ac2af45c7b',
            endProjectsCount: 4,
            desc: "Разработка мобильных приложений включает полный цикл от идеи до реализации. Мы занимаемся анализом требований, проектированием интерфейса, разработкой кода, тестированием и запуском приложения на платформах iOS и Android. Обеспечиваем поддержку и обновление приложения после его релиза",
            category: "full_cycle",
        },
        {
            id: 1,
            label: 'Веб-сервисы',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2Fweb-services.png?alt=media&token=be91f657-48db-4366-a0a6-35b44297dcd4',
            endProjectsCount: 7,
            desc: "Создание веб-сервисов подразумевает проектирование, разработку и интеграцию различных онлайн-систем. Мы предлагаем полный цикл разработки, включая анализ потребностей, архитектурное проектирование, программирование, тестирование и развертывание на сервере, а также последующую техническую поддержку",
            category: "full_cycle",
        },
        {
            id: 2,
            label: 'Веб-сайты',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2Fweb-sites.png?alt=media&token=0effd7c4-a66e-4927-b353-8444b8bf2581',
            endProjectsCount: 4,
            desc: "Разработка веб-сайтов включает в себя все этапы: от концепции и дизайна до программирования и запуска. Мы создаем как статические, так и динамические сайты, обеспечивая адаптивность и оптимизацию для поисковых систем, а также предоставляем услуги по поддержке и обновлению.",
            category: "full_cycle",
        },
        {
            id: 3,
            label: 'Настольные программы',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2Fdesktop-infrastructure.png?alt=media&token=976c0350-5649-4212-8c85-ca5b0678d8a7',
            endProjectsCount: 4,
            desc: "Создание десктопных приложений требует учета специфики платформы и пользовательского опыта. Мы проводим полный цикл разработки, включая проектирование интерфейса, написание кода, тестирование и оптимизацию под различные операционные системы, а также предлагаем техническую поддержку",
            category: "full_cycle",
        },
        {
            id: 4,
            label: 'UI/UX дизайн',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2Fwebsite-design-symbol-1_icon-icons.com_53804.png?alt=media&token=7560dc28-622a-40a4-afea-fabd53a910bb',
            endProjectsCount: 12,
            desc: "Услуга UI/UX дизайна включает в себя исследование пользовательского опыта, создание прототипов и дизайн интерфейсов для различных платформ. Мы обеспечиваем полный цикл работы – от анализа потребностей пользователей до создания финальных графических решений и тестирования.",
            category: "full_cycle",
        },
        {
            id: 5,
            label: 'Разработка программного обеспечения (ПО)',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2Fsoftware.png?alt=media&token=1320b178-7705-4859-9ac5-0d790f6a017e',
            endProjectsCount: 4,
            desc: "Разработка программного обеспечения включает весь процесс – от анализа требований и проектирования архитектуры до написания кода, тестирования и развертывания. Мы предлагаем комплексные решения, учитывающие индивидуальные потребности бизнеса, а также поддержку и обслуживание готового ПО.",
            category: "full_cycle",
        },
        {
            id: 6,
            label: 'Разработка API',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2Fapi_icon_129131.png?alt=media&token=c3c22be2-994f-48f0-bca0-6def6dd7c914',
            endProjectsCount: 4,
            desc: "Создание API включает проектирование, разработку и документирование интерфейсов для взаимодействия между системами. Мы проводим полный цикл работы, от анализа требований до тестирования и поддержки API, обеспечивая его интеграцию с различными приложениями и сервисами.",
            category: "full_cycle",
        },
        {
            id: 7,
            label: 'Консалтинг по IT',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2Fcounseling.png?alt=media&token=59f0c2e0-cbf0-4f0a-b302-90cb850e22d5',
            endProjectsCount: 4,
            desc: "IT-консалтинг предлагает услуги по анализу текущих бизнес-процессов и разработке стратегий по оптимизации и внедрению технологий. Мы проводим полный цикл работ, включая аудит, рекомендации по улучшениям, внедрение решений и последующий мониторинг эффективности.",
            category: "full_cycle",
        },
        {
            id: 8,
            label: 'Безопасность',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2Ffingerprint_scan_icon_154446.png?alt=media&token=a7021d22-a127-46e8-9679-637bf134d0ef',
            endProjectsCount: 4,
            desc: "Услуги по безопасности включают оценку рисков, разработку стратегий защиты и внедрение мер безопасности для защиты данных и систем. Мы проводим полный цикл работы – от анализа угроз до реализации решений и последующего мониторинга и поддержки.",
            category: "full_cycle",
        },
        {
            id: 9,
            label: 'SEO и маркетинг',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2FDeep-Crawl_icon-icons.com_53720.png?alt=media&token=d463437c-6e86-42da-bfe5-0e64a7bf046c',
            endProjectsCount: 4,
            desc: "SEO и маркетинг включают в себя аудит текущих позиций, разработку стратегии продвижения и реализацию мероприятий для улучшения видимости в поисковых системах. Мы предлагаем полный цикл работы, включая анализ, реализацию и мониторинг результатов.",
            category: "full_cycle",
        },
        {
            id: 10,
            label: 'Обработка данных и аналитика',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2Ftabletchart_118080.png?alt=media&token=9442aded-4091-4395-8bfd-ec99404535ca',
            endProjectsCount: 4,
            desc: "Услуги по обработке данных и аналитике включают сбор, анализ и визуализацию данных для принятия обоснованных бизнес-решений. Мы обеспечиваем полный цикл работы, начиная с анализа потребностей и заканчивая предоставлением отчетов и рекомендаций.",
            category: "full_cycle",
        },
        {
            id: 11,
            label: 'Разработка чат-ботов',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2Frobot-round-head_icon-icons.com_55274.png?alt=media&token=7963e7d1-71a2-4e55-9de3-4da1744def45',
            endProjectsCount: 4,
            desc: "Создание чат-ботов включает проектирование, разработку и внедрение автоматизированных систем общения с пользователями. Мы предлагаем полный цикл разработки, включая анализ требований, создание сценариев, программирование и тестирование, а также поддержку и обновления.",
            category: "full_cycle",
        },

        // Под категории
        {
            id: 12,
            label: '',
            icon: '',
            endProjectsCount: 4,
            desc: "",
            category: "",
        },
        {
            id: 13,
            label: 'Дизайн мобильного приложения',
            icon: '',
            endProjectsCount: 4,
            desc: "Создаем интуитивно понятные и привлекательные интерфейсы, учитывая пользовательский опыт и современные тренды",
            category: "mobile",
        },
        {
            id: 14,
            label: 'Прототипирование мобильного приложения',
            icon: '',
            endProjectsCount: 4,
            desc: "Разрабатываем интерактивные прототипы, позволяющие визуализировать функционал и структуру приложения до его создания.",
            category: "mobile",
        },
        {
            id: 15,
            label: 'Разработка мобильного приложения (iOS/Android)',
            icon: '',
            endProjectsCount: 4,
            desc: "Профессионально разрабатываем приложения для обеих платформ, обеспечивая высокое качество и производительность.",
            category: "mobile",
        },
        {
            id: 16,
            label: 'Тестирование мобильного приложения',
            icon: '',
            endProjectsCount: 4,
            desc: "Проводим комплексное тестирование для выявления и устранения ошибок, обеспечивая стабильную работу приложения.",
            category: "mobile",
        },
        {
            id: 17,
            label: 'Доработка существующего приложения',
            icon: '',
            endProjectsCount: 4,
            desc: "Улучшаем функциональность и производительность уже работающих приложений, учитывая отзывы пользователей.",
            category: "mobile",
        },
        {
            id: 18,
            label: 'Создание плагинов для мобильных приложений',
            icon: '',
            endProjectsCount: 4,
            desc: "Разрабатываем уникальные плагины, расширяющие возможности приложений и повышающие их функциональность.",
            category: "mobile",
        },
        {
            id: 19,
            label: 'Интеграция с сторонними сервисами через API',
            icon: '',
            endProjectsCount: 4,
            desc: "Обеспечиваем seamless интеграцию с внешними сервисами, улучшая взаимодействие и функционал приложения.",
            category: "mobile",
        },
        // Web sub services
        {
            id: 20,
            label: 'Разработка веб-сервиса',
            icon: '',
            endProjectsCount: 4,
            desc: "Создаем надежные и функциональные веб-сервисы, адаптированные под уникальные бизнес-потребности.",
            category: "web",
        },
        {
            id: 21,
            label: 'Создание и настройка серверной части',
            icon: '',
            endProjectsCount: 4,
            desc: "Настраиваем серверную инфраструктуру для обеспечения безопасности, стабильности и оптимальной работы веб-сервиса.",
            category: "web",
        },
        {
            id: 22,
            label: 'Интеграция с сторонними API',
            icon: '',
            endProjectsCount: 4,
            desc: "Реализуем интеграцию с внешними API, позволяя вашему веб-сервису взаимодействовать с другими платформами и системами.",
            category: "web",
        },
        {
            id: 23,
            label: 'Оптимизация производительности',
            icon: '',
            endProjectsCount: 4,
            desc: "Повышаем скорость и производительность веб-сервиса через эффективные решения и оптимизацию кода.",
            category: "web",
        },
        {
            id: 24,
            label: 'Разработка документации для API',
            icon: '',
            endProjectsCount: 4,
            desc: "Создаем исчерпывающую документацию для API, упрощая процесс интеграции для разработчиков.",
            category: "web",
        },
        {
            id: 25,
            label: 'Тестирование веб-сервиса',
            icon: '',
            endProjectsCount: 4,
            desc: "Проводим комплексное тестирование для выявления и устранения неполадок, гарантируя надежность и стабильность работы.",
            category: "web",
        },

        // Web sub sites
        {
            id: 26,
            label: 'Дизайн веб-сайта',
            icon: '',
            endProjectsCount: 4,
            desc: "Создаем привлекательные и функциональные дизайны, ориентируясь на пользовательский опыт и требования бренда.",
            category: "web",
        },
        {
            id: 27,
            label: 'Прототипирование веб-сайта',
            icon: '',
            endProjectsCount: 4,
            desc: "Разрабатываем интерактивные прототипы для визуализации структуры и функционала сайта до его реализации.",
            category: "web",
        },
        {
            id: 28,
            label: 'Разработка веб-сайта (статический или динамический)',
            icon: '',
            endProjectsCount: 4,
            desc: "Профессионально разрабатываем как статические, так и динамические сайты, адаптированные под ваши нужды.",
            category: "web",
        },
        {
            id: 29,
            label: 'SEO-оптимизация сайта',
            icon: '',
            endProjectsCount: 4,
            desc: "Оптимизируем сайт для поисковых систем, улучшая его видимость и привлекая целевую аудиторию.",
            category: "web",
        },
        {
            id: 30,
            label: 'Настройка хостинга и домена',
            icon: '',
            endProjectsCount: 4,
            desc: "Помогаем в выборе и настройке хостинга и доменного имени для стабильной работы вашего сайта.",
            category: "web",
        },
        {
            id: 31,
            label: 'Исправление багов и доработка функционала',
            icon: '',
            endProjectsCount: 4,
            desc: "Устраняем ошибки и дорабатываем функциональность, повышая надежность и качество сайта.",
            category: "web",
        },
        // Desktop sub services
        {
            id: 32,
            label: 'Разработка десктопного приложения',
            icon: '',
            endProjectsCount: 4,
            desc: "(Windows, macOS, Linux): Создаем приложения для различных операционных систем с учетом их специфики.",
            category: "desktop",
        },
        {
            id: 33,
            label: 'Дизайн интерфейса приложения',
            icon: '',
            endProjectsCount: 4,
            desc: "Разрабатываем интуитивно понятные и привлекательные интерфейсы для улучшения пользовательского опыта.",
            category: "desktop",
        },
        {
            id: 34,
            label: 'Тестирование десктопного приложения',
            icon: '',
            endProjectsCount: 4,
            desc: "Проводим тестирование для выявления и устранения ошибок, обеспечивая высокое качество продукта.",
            category: "desktop",
        },
        {
            id: 35,
            label: 'Интеграция desktop приложения с внешними сервисами',
            icon: '',
            endProjectsCount: 4,
            desc: "Обеспечиваем совместимость приложения с различными внешними сервисами и API.",
            category: "desktop",
        },
        {
            id: 36,
            label: 'Оптимизация и доработка существующего ПО',
            icon: '',
            endProjectsCount: 4,
            desc: "Усовершенствуем и оптимизируем уже существующие приложения для повышения их производительности.  ",
            category: "desktop",
        },
        {
            id: 37,
            label: 'Поддержка и обновление desktop программного обеспечения',
            icon: '',
            endProjectsCount: 4,
            desc: "Обеспечиваем регулярные обновления и поддержку для стабильной работы программного обеспечения.",
            category: "desktop",
        },
        // API sub services
        {
            id: 38,
            label: 'Проектирование архитектуры API',
            icon: '',
            endProjectsCount: 4,
            desc: "Создаем архитектуру API, учитывающую потребности пользователей и систем.",
            category: "api",
        },
        {
            id: 39,
            label: 'Документация для разработчиков',
            icon: '',
            endProjectsCount: 4,
            desc: "Подготавливаем подробную документацию для разработчиков, облегчающую интеграцию с API.",
            category: "api",
        },
        // Security sub services
        {
            id: 40,
            label: 'Оценка уязвимостей системы',
            icon: '',
            endProjectsCount: 4,
            desc: "Проводим анализ уязвимостей для выявления слабых мест в системе.",
            category: "security",
        },
        {
            id: 41,
            label: 'Проведение аудита безопасности',
            icon: '',
            endProjectsCount: 4,
            desc: "Выполняем аудит безопасности для оценки текущих мер защиты и их эффективности.  ",
            category: "security",
        },
        {
            id: 42,
            label: 'Обучение сотрудников по безопасности',
            icon: '',
            endProjectsCount: 4,
            desc: "Проводим тренинги и обучение сотрудников по вопросам кибербезопасности.  ",
            category: "security",
        },
        // Analytics sub services
        {
            id: 43,
            label: 'Сбор и очистка данных',
            icon: '',
            endProjectsCount: 4,
            desc: "Проводим сбор и предварительную обработку данных для дальнейшего анализа",
            category: "analytic",
        },
        {
            id: 44,
            label: 'Анализ данных и создание отчетов',
            icon: '',
            endProjectsCount: 4,
            desc: "Проводим глубокий анализ данных и создаем информативные отчеты.",
            category: "analytic",
        },
        {
            id: 45,
            label: 'Визуализация данных',
            icon: '',
            endProjectsCount: 4,
            desc: "Разрабатываем визуализации данных для более наглядного представления информации.",
            category: "analytic",
        },
        {
            id: 46,
            label: 'Разработка и внедрение моделей машинного обучения',
            icon: '',
            endProjectsCount: 4,
            desc: "Создаем и внедряем модели машинного обучения для автоматизации процессов анализа данных",
            category: "analytic",
        },
        // CHAT-BOT sub services
        {
            id: 47,
            label: 'Проектирование сценариев взаимодействия',
            icon: '',
            endProjectsCount: 4,
            desc: "Разрабатываем сценарии общения чат-бота с пользователями для обеспечения естественного взаимодействия.  ",
            category: "plugs",
        },
        {
            id: 48,
            label: 'Разработка и интеграция чат-бота',
            icon: '',
            endProjectsCount: 4,
            desc: "Создаем чат-ботов и интегрируем их в существующие системы и платформы.",
            category: "plugs",
        },
        {
            id: 49,
            label: 'Тестирование функционала чат-бота',
            icon: '',
            endProjectsCount: 4,
            desc: "Проводим тестирование для проверки работы чат-бота и устранения возможных ошибок.  ",
            category: "plugs",
        },
        {
            id: 50,
            label: 'Поддержка и обновление чат-бота',
            icon: '',
            endProjectsCount: 4,
            desc: "Обеспечиваем регулярную поддержку и обновления функционала чат-бота для улучшения его работы.",
            category: "plugs",
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