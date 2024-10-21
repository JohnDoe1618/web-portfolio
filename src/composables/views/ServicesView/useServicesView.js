import { computed, reactive, ref } from 'vue';
import axios from 'axios';

export function useServicesView() {

    const visibleOrderServiceDialog = ref(false);
    const selectedFilterGroupItem = ref({});
    const selectedService = ref('');
    const inputText = ref('');
    const visibleMoreService = ref(false);
    const selectedServiceInfo = ref(null);

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
            serviceInfo: {
                imageSrc: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Fimages-services%2Fapp-development.jpg?alt=media&token=378e0578-fa77-43f7-9542-8282243aa647',
                label: 'Разработка мобильных приложений в Abstergo',
                desc: 'В Abstergo мы предлагаем профессиональные услуги по разработке мобильных приложений, используя современные технологии и инструменты, такие как Dart и Flutter. Наша команда опытных разработчиков создает высококачественные, производительные и эстетически привлекательные приложения для платформ iOS и Android.',
                technologies: [
                    // {
                    //     id: 2,
                    //     label: 'Multiplatform',
                    //     desc: 'Мобильная разработка с использованием Dart и Flutter обеспечивает мультиплатформенность, позволяя создавать приложения для iOS и Android из единого кода, что сокращает время и затраты на разработку.',
                    //     icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/seamonkey_browser_logo_icon_152961.ico?alt=media&token=6948a145-b9a4-4427-9d3a-f28d3d13fd2a',
                    // },
                    {
                        id: 0,
                        label: 'Dart',
                        desc: 'Язык программирования для разработки мобильных приложений и не только...',
                        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fdart.png?alt=media&token=381250fd-90c3-428a-86ab-1bdb71082626',
                    },
                    {
                        id: 1,
                        label: 'Flutter',
                        desc: 'Flutter - платформа для разработки кросплатформенных приложений под различные устройства, включая android и ios',
                        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fflutter.png?alt=media&token=4a5c04fd-f46a-46dd-8eb1-32211ef1f570',
                    },
                    {
                        id: 3,
                        label: 'Облачные сервисы',
                        desc: 'Используем различные облачные сервисы для разработки приложений: AWS, Google cloud, Azure...',
                        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fserver.png?alt=media&token=aaba80a1-97db-4061-be06-7be5d4697158',
                    },
                    {
                        id: 4,
                        label: 'Базы данных',
                        desc: 'В разработке мобильных приложений мы используем различные базы данных MySql, Postgresql, mongodb, supabase...',
                        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fdatabase.png?alt=media&token=d54cac31-c68a-4ba7-917b-e8169c06519c',
                    },
                ],
                stages: [
                    {
                        status: 'Анализ требований',
                        desc: 'На этом этапе мы собираем и уточняем все требования к приложению, включая функциональные и нефункциональные аспекты. Это помогает создать четкое техническое задание',
                        timeline: '1-5',
                        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2F1490889638-app-store_82517.png?alt=media&token=0ca0785a-cd56-4694-877a-00bb5ef0d9cd',
                        color: '#673AB7',
                    },
                    {
                        status: 'Проектирование',
                        desc: 'Создаем архитектуру приложения и разрабатываем пользовательский интерфейс, учитывая пользовательский опыт (UX) и визуальный стиль (UI)',
                        timeline: '20-50',
                        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2F1490889638-app-store_82517.png?alt=media&token=0ca0785a-cd56-4694-877a-00bb5ef0d9cd',
                        color: '#FF9800',
                    },
                    {
                        status: 'Прототипирование',
                        desc: 'Создаем интерактивные прототипы приложения, которые позволяют визуализировать его интерфейс и основные функции. Это помогает получить обратную связь от клиента на ранних стадиях',
                        timeline: '5-30',
                        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fcodinghtml_117796.png?alt=media&token=f92b4e4b-404a-4300-b2e1-56538046c8b5',
                        color: '#607D8B',
                    },
                    {
                        status: 'Разработка',
                        desc: 'На этом этапе происходит написание кода, реализация функционала и интеграция с необходимыми сервисами. Используем Dart и Flutter для мультиплатформенности.',
                        timeline: '15-90',
                        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fcodinghtml_117796.png?alt=media&token=f92b4e4b-404a-4300-b2e1-56538046c8b5',
                        color: '#FF9800',
                    },
                    {
                        status: 'Тестирование',
                        desc: 'Проводим комплексное тестирование приложения, включая функциональные, производительные и пользовательские тесты, чтобы выявить и устранить ошибки.  ',
                        timeline: '2-10',
                        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fcodinghtml_117796.png?alt=media&token=f92b4e4b-404a-4300-b2e1-56538046c8b5',
                        color: '#673AB7',
                    },
                    {
                        status: 'Запуск и поддержка',
                        desc: 'Запускаем приложение в магазинах (App Store, Google Play) и предоставляем последующую поддержку, включая обновления и исправления ошибок.',
                        timeline: '1-8',
                        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fcodinghtml_117796.png?alt=media&token=f92b4e4b-404a-4300-b2e1-56538046c8b5',
                        color: '#673AB7',
                    },
                ],
                faq: [
                    {
                        title: 'Какова стоимость разработки мобильного приложения?',
                        content: 'Стоимость зависит от сложности приложения, его функционала и сроков выполнения. Мы предлагаем индивидуальные расценки после анализа ваших требований.',
                        value: '0'
                    },
                    {
                        title: 'Сколько времени займет разработка приложения?',
                        content: 'Сроки зависят от объема работ, но в среднем процесс занимает от 1 до 3 месяцев. Мы предоставим более точный график после обсуждения проекта.',
                        value: '1'
                    },
                    {
                        title: 'Могу ли я внести изменения в проект во время разработки?',
                        content: 'Да, вы можете вносить изменения и дополнения на любом этапе, однако это может повлиять на сроки и стоимость.',
                        value: '2'
                    },
                    {
                        title: 'Предоставляете ли вы поддержку после запуска приложения?',
                        content: 'Да, мы предлагаем услуги по технической поддержке и обновлениям после запуска, чтобы гарантировать стабильную работу вашего приложения.',
                        value: '3'
                    },
                    {
                        title: 'Как происходит тестирование приложения?',
                        content: 'Тестирование включает функциональные, производительные и пользовательские тесты. Мы проверяем приложение на различных устройствах и платформах, чтобы обеспечить его качество и стабильность.',
                        value: '4'
                    },

                ],
            }
        },
        {
            id: 2,
            label: 'Веб-сайты',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2Fweb-sites.png?alt=media&token=0effd7c4-a66e-4927-b353-8444b8bf2581',
            endProjectsCount: 4,
            desc: "Разработка веб-сайтов включает в себя все этапы: от концепции и дизайна до программирования и запуска. Мы создаем как статические, так и динамические сайты, обеспечивая адаптивность и оптимизацию для поисковых систем, а также предоставляем услуги по поддержке и обновлению.",
            category: "full_cycle",
            serviceInfo: {
                imageSrc: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Fimages-services%2FDesktop-programs.jpg?alt=media&token=4d8b9dcb-75e2-4fbf-bd8f-fde98912cf1d',
                label: 'Разработка мобильных приложений в Abstergo',
                desc: 'В Abstergo мы предлагаем профессиональные услуги по разработке мобильных приложений, используя современные технологии и инструменты, такие как Dart и Flutter. Наша команда опытных разработчиков создает высококачественные, производительные и эстетически привлекательные приложения для платформ iOS и Android.',
                technologies: [
                    {
                        id: 0,
                        label: 'vue3',
                        desc: 'Vue 3 — современный JavaScript-фреймворк для создания удобных и реактивных пользовательских интерфейсов.',
                        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fvue.png?alt=media&token=e7300969-2e1a-4836-9f5d-cb1ede51ae9d',
                    },
                    {
                        id: 2,
                        label: 'JavaScript',
                        desc: 'Основной язык программирования для создания интерактивных веб-приложений.',
                        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fjs.png?alt=media&token=c3fde5a6-0ba4-4589-8468-2065e226ff3b',
                    },
                    {
                        id: 3,
                        label: 'HTML & CSS',
                        desc: 'Основные технологии для разметки и стилизации веб-страниц.',
                        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fhtml.png?alt=media&token=2b7a688b-267c-409e-9a4d-cd5f5ad900ea',
                    },
                    {
                        id: 4,
                        label: 'Node.js',
                        desc: 'Серверная платформа для выполнения JavaScript на стороне сервера. Написание сервера для сайта',
                        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fnode.png?alt=media&token=590724a9-2a9b-43c6-a4d3-e9a35899e381',
                    },
                    {
                        id: 5,
                        label: 'Облачные сервисы',
                        desc: 'Используем различные облачные сервисы для разработки приложений: AWS, Google cloud, Azure...',
                        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fserver.png?alt=media&token=aaba80a1-97db-4061-be06-7be5d4697158',
                    },
                    {
                        id: 6,
                        label: 'Базы данных',
                        desc: 'В разработке мобильных приложений мы используем различные базы данных MySql, Postgresql, mongodb, supabase...',
                        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fdatabase.png?alt=media&token=d54cac31-c68a-4ba7-917b-e8169c06519c',
                    },
                ],
                stages: [
                    {
                        status: 'Исследование и планирование',
                        desc: 'На этом этапе мы анализируем требования клиента, целевую аудиторию и конкурентов для формирования четкого плана проекта.  ',
                        timeline: '1-5',
                        color: '#673AB7',
                    },
                    {
                        status: 'Прототипирование',
                        desc: 'Создаются макеты и интерактивные прототипы, чтобы визуализировать внешний вид и функциональность сайта.  ',
                        timeline: '5-10',
                        color: '#FF9800',
                    },
                    {
                        status: 'Разработка',
                        desc: 'На данном этапе мы реализуем функциональность сайта, используя Vue 3 и другие технологии, обеспечивая высокую производительность.  ',
                        timeline: '10-60',
                        color: '#607D8B',
                    },
                    {
                        status: 'Тестирование и запуск',
                        desc: 'Проводится тестирование всех аспектов сайта, исправляются ошибки, и осуществляется запуск проекта в продуктивную среду.  ',
                        timeline: '1-5',
                        color: '#FF9800',
                    },
                ],
                faq: [
                    {
                        title: 'Сколько времени займет разработка моего сайта?',
                        content: 'Время разработки зависит от сложности проекта. В среднем, создание простого сайта занимает от 2 до 6 недель, в то время как более сложные решения могут потребовать от 1 до 3 месяцев.',
                        value: '0'
                    },
                    {
                        title: 'Какова стоимость разработки сайта?',
                        content: 'Стоимость варьируется в зависимости от функциональности и дизайна. Мы предлагаем индивидуальные расценки, поэтому рекомендуем обсудить ваши требования для получения точной оценки.',
                        value: '1'
                    },
                    {
                        title: 'Могу ли я внести изменения в проект во время разработки?',
                        content: 'Да, вы можете вносить изменения. Мы рекомендуем обсуждать изменения на регулярных встречах, чтобы убедиться, что проект соответствует вашим ожиданиям.',
                        value: '2'
                    },
                    {
                        title: 'Предоставляете ли вы поддержку после запуска приложения?',
                        content: 'Да, мы предлагаем техническую поддержку и обслуживание после запуска сайта, чтобы гарантировать его стабильную работу и актуальность.',
                        value: '3'
                    },
                    {
                        title: 'Какие технологии вы используете для разработки сайтов?',
                        content: 'Мы используем современные технологии, такие как Vue 3 для фронтенда, Node.js для бэкенда, а также HTML, CSS и JavaScript для создания адаптивных и высокопроизводительных веб-приложений.',
                        value: '4'
                    },

                ],

            }
        },
        {
            id: 1,
            label: 'Веб-сервисы',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2Fweb-services.png?alt=media&token=be91f657-48db-4366-a0a6-35b44297dcd4',
            endProjectsCount: 7,
            desc: "Создание веб-сервисов подразумевает проектирование, разработку и интеграцию различных онлайн-систем. Мы предлагаем полный цикл разработки, включая анализ потребностей, архитектурное проектирование, программирование, тестирование и развертывание на сервере, а также последующую техническую поддержку",
            category: "full_cycle",
            serviceInfo: {
                imageSrc: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Fimages-services%2Fweb-services-2.jpg?alt=media&token=fa17cc97-52e9-442d-af63-190eadbe1adb',
                label: 'Разработка мобильных приложений в Abstergo',
                desc: 'В Abstergo мы предлагаем профессиональные услуги по разработке мобильных приложений, используя современные технологии и инструменты, такие как Dart и Flutter. Наша команда опытных разработчиков создает высококачественные, производительные и эстетически привлекательные приложения для платформ iOS и Android.',
                technologies: [
                    {
                        "id": 0,
                        "label": "Nuxt3",
                        "desc": "Фреймворк для создания универсальных приложений на Vue.js, обеспечивающий серверный рендеринг и статическую генерацию.",
                        "icon": "https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fnuxt.png?alt=media&token=ce0104e3-8124-40ff-bfc9-8625633b4711"
                    },
                    {
                        "id": 1,
                        "label": "Vue3",
                        "desc": "Прогрессивный JavaScript-фреймворк для создания пользовательских интерфейсов и одностраничных приложений.",
                        "icon": "https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fvue.png?alt=media&token=e7300969-2e1a-4836-9f5d-cb1ede51ae9d"
                    },
                    {
                        "id": 2,
                        "label": "Adonis",
                        "desc": "Node.js фреймворк, который предлагает структуру для разработки веб-приложений с использованием MVC архитектуры.",
                        "icon": "https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fadonis.png?alt=media&token=7ae3636c-9626-407f-9b7c-25b3ba737f6f"
                    },
                    {
                        "id": 5,
                        "label": "Azure",
                        "desc": "Облачная платформа от Microsoft, предлагающая широкий спектр облачных услуг для разработки, хранения и развертывания приложений.",
                        "icon": "https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fazure.png?alt=media&token=c6c670d9-d568-4255-b28e-e932e1935fd1"
                    },
                    {
                        "id": 6,
                        "label": "Firebase",
                        "desc": "Платформа для разработки мобильных и веб-приложений от Google, предоставляющая облачные функции и базы данных в реальном времени.",
                        "icon": "https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Ffirebase.png?alt=media&token=f724feca-ae2d-4aea-ab32-422fcc2f9bec"
                    },
                    {
                        "id": 10,
                        "label": "RPC(Микросервисная архитектура)",
                        "desc": "Remote Procedure Call (RPC) — протокол, который позволяет программе запускать код на удаленном сервере, как если бы это была локальная функция, обеспечивая межпроцессное взаимодействие.",
                        "icon": "https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fmicriservices.png?alt=media&token=6a818345-0e00-48a5-b3d1-0b65bbe3dd52"
                    },
                    {
                        "id": 9,
                        "label": "Docker",
                        "desc": "Платформа для автоматизации развертывания приложений в контейнерах, обеспечивающая изоляцию и управляемость сервисов.",
                        "icon": "https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fdocker.png?alt=media&token=6695e19e-4fa0-4301-806c-07deab16525b"
                    },
                    {
                        id: 11,
                        label: 'Базы данных',
                        desc: 'В разработке мобильных приложений мы используем различные базы данных MySql, Postgresql, mongodb, supabase...',
                        icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Ficons-services%2Fdatabase.png?alt=media&token=d54cac31-c68a-4ba7-917b-e8169c06519c',
                    },
                ],
                stages: [
                    {
                        status: 'Анализ требований',
                        desc: 'На этом этапе команда собирает и анализирует требования к веб-сервису. Включает в себя встречи с заказчиком, изучение конкурентных решений и определение целевой аудитории. В результате формируется техническое задание (ТЗ)',
                        timeline: '2-14',
                        color: '#673AB7',
                    },
                    {
                        status: 'Проектирование архитектуры',
                        desc: 'Разработка архитектуры веб-сервиса, включая выбор технологий, определение структуры базы данных и создание прототипов интерфейса. Важным элементом является создание схемы взаимодействия компонентов системы.  ',
                        timeline: '20-50',
                        color: '#FF9800',
                    },
                    {
                        status: 'Прототипирование',
                        desc: 'Создаются интерактивные прототипы, чтобы визуализировать внешний вид и функциональность сайта.',
                        timeline: '40-120',
                        color: '#FF9800',
                    },
                    {
                        status: 'Разработка',
                        desc: 'На этом этапе происходит непосредственная реализация веб-сервиса. Программисты пишут код, создают интерфейсы и интегрируют необходимые компоненты. Этап включает как фронтенд, так и бэкенд разработку.',
                        timeline: '60-200',
                        color: '#607D8B',
                    },
                    {
                        status: 'Тестирование',
                        desc: 'Проведение тестирования веб-сервиса для выявления и устранения ошибок. Включает в себя функциональное, пользовательское, нагрузочное и безопасность тестирование. На этом этапе также собираются отзывы от пользователей.',
                        timeline: '14-30',
                        color: '#FF9800',
                    },
                    {
                        status: 'Развертывание и поддержка',
                        desc: 'Запуск веб-сервиса на продакшн-сервере и его поддержка. Включает в себя мониторинг работы системы, устранение возникающих проблем и внедрение обновлений на основе обратной связи от пользователей.',
                        timeline: '7-14',
                        color: '#FF9800',
                    },
                ],
                faq: [
                    {
                        title: 'Что такое веб-сервисы и для чего они нужны?',
                        content: 'Веб-сервисы — это программные системы, которые позволяют обмениваться данными и функциональностью между различными приложениями через интернет. Они используются для интеграции различных систем, создания API и автоматизации бизнес-процессов.',
                        value: '0'
                    },
                    {
                        title: 'Какой процесс разработки веб-сервиса?',
                        content: 'Процесс разработки веб-сервиса включает несколько этапов: анализ потребностей, архитектурное проектирование, программирование, тестирование, развертывание на сервере и последующую техническую поддержку.',
                        value: '1'
                    },
                    {
                        title: 'Почему важно использовать современные технологии при разработке веб-сервисов?',
                        content: 'Современные технологии обеспечивают высокую производительность, безопасность и масштабируемость веб-сервисов. Использование актуальных фреймворков и платформ позволяет быстрее разрабатывать качественные решения и адаптироваться к изменениям рынка.',
                        value: '2'
                    },
                    {
                        title: 'Какова стоимость разработки сервиса?',
                        content: 'Стоимость варьируется в зависимости от функциональности, кол-ва страниц, сторонних сервисов и т.д. Мы предлагаем индивидуальные расценки, поэтому рекомендуем обсудить ваши требования для получения точной оценки.',
                        value: '3'
                    },

                ],
            }
        },
        // {
        //     id: 3,
        //     label: 'Настольные программы',
        //     icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2Fdesktop-infrastructure.png?alt=media&token=976c0350-5649-4212-8c85-ca5b0678d8a7',
        //     endProjectsCount: 4,
        //     desc: "Создание десктопных приложений требует учета специфики платформы и пользовательского опыта. Мы проводим полный цикл разработки, включая проектирование интерфейса, написание кода, тестирование и оптимизацию под различные операционные системы, а также предлагаем техническую поддержку",
        //     category: "full_cycle",
        //     serviceInfo: {
        //         imageSrc: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Fimages-services%2Fdevelop-PO.jpg?alt=media&token=b5575f94-e102-4377-a9f9-8ef19589a59c',
        //         label: 'Разработка мобильных приложений в Abstergo',
        //         desc: 'В Abstergo мы предлагаем профессиональные услуги по разработке мобильных приложений, используя современные технологии и инструменты, такие как Dart и Flutter. Наша команда опытных разработчиков создает высококачественные, производительные и эстетически привлекательные приложения для платформ iOS и Android.',
        //         technologies: [
        //             {
        //                 id: 0,
        //                 label: 'Dart',
        //                 desc: 'Язык программирования для разработки мобильных приложений и не только...',
        //                 icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/seamonkey_browser_logo_icon_152961.ico?alt=media&token=6948a145-b9a4-4427-9d3a-f28d3d13fd2a',
        //             },
        //             {
        //                 id: 1,
        //                 label: 'Flutter',
        //                 desc: 'Flutter - платформа для разработки кросплатформенных приложений под различные устройства, включая android и ios',
        //                 icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/seamonkey_browser_logo_icon_152961.ico?alt=media&token=6948a145-b9a4-4427-9d3a-f28d3d13fd2a',
        //             },
        //             {
        //                 id: 2,
        //                 label: 'Облачные сервисы',
        //                 desc: 'Используем различные облачные сервисы для разработки приложений: AWS, Google cloud, Azure...',
        //                 icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/seamonkey_browser_logo_icon_152961.ico?alt=media&token=6948a145-b9a4-4427-9d3a-f28d3d13fd2a',
        //             },
        //             {
        //                 id: 3,
        //                 label: 'Базы данных',
        //                 desc: 'В разработке мобильных приложений мы используем различные базы данных MySql, Postgresql, mongodb, supabase...',
        //                 icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/seamonkey_browser_logo_icon_152961.ico?alt=media&token=6948a145-b9a4-4427-9d3a-f28d3d13fd2a',
        //             },
        //         ],
        //         stages: [
        //             { status: 'Processing', timeline: '30-45', icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2F1490889638-app-store_82517.png?alt=media&token=0ca0785a-cd56-4694-877a-00bb5ef0d9cd', color: '#673AB7' },
        //             { status: 'Shipped', timeline: '20-50', icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2F1490889638-app-store_82517.png?alt=media&token=0ca0785a-cd56-4694-877a-00bb5ef0d9cd', color: '#FF9800' },
        //             { status: 'Delivered', timeline: '10-20', icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fcodinghtml_117796.png?alt=media&token=f92b4e4b-404a-4300-b2e1-56538046c8b5', color: '#607D8B' },
        //         ],
        //         faq: [
        //             { title: 'Что делать если 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', value: '0' },
        //             { title: 'Что делать если 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', value: '1' },
        //             { title: 'Что делать если 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', value: '2' }
        //         ],
        //     }
        // },
        {
            id: 4,
            label: 'UI/UX дизайн',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2Fwebsite-design-symbol-1_icon-icons.com_53804.png?alt=media&token=7560dc28-622a-40a4-afea-fabd53a910bb',
            endProjectsCount: 12,
            desc: "Услуга UI/UX дизайна включает в себя исследование пользовательского опыта, создание прототипов и дизайн интерфейсов для различных платформ. Мы обеспечиваем полный цикл работы – от анализа потребностей пользователей до создания финальных графических решений и тестирования.",
            category: "full_cycle",
            serviceInfo: {
                imageSrc: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Fimages-services%2Fui-design-2.jpg?alt=media&token=b149e66e-5783-41e0-80ed-a30ef610ac17',
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
            }
        },
        // {
        //     id: 5,
        //     label: 'Разработка программного обеспечения (ПО)',
        //     icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2Fsoftware.png?alt=media&token=1320b178-7705-4859-9ac5-0d790f6a017e',
        //     endProjectsCount: 4,
        //     desc: "Разработка программного обеспечения включает весь процесс – от анализа требований и проектирования архитектуры до написания кода, тестирования и развертывания. Мы предлагаем комплексные решения, учитывающие индивидуальные потребности бизнеса, а также поддержку и обслуживание готового ПО.",
        //     category: "full_cycle",
        //     serviceInfo: {
        //         imageSrc: '',
        //         label: 'Разработка мобильных приложений в Abstergo',
        //         desc: 'В Abstergo мы предлагаем профессиональные услуги по разработке мобильных приложений, используя современные технологии и инструменты, такие как Dart и Flutter. Наша команда опытных разработчиков создает высококачественные, производительные и эстетически привлекательные приложения для платформ iOS и Android.',
        //         technologies: [
        //             {
        //                 id: 0,
        //                 label: 'Dart',
        //                 desc: 'Язык программирования для разработки мобильных приложений и не только...',
        //                 icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/seamonkey_browser_logo_icon_152961.ico?alt=media&token=6948a145-b9a4-4427-9d3a-f28d3d13fd2a',
        //             },
        //             {
        //                 id: 1,
        //                 label: 'Flutter',
        //                 desc: 'Flutter - платформа для разработки кросплатформенных приложений под различные устройства, включая android и ios',
        //                 icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/seamonkey_browser_logo_icon_152961.ico?alt=media&token=6948a145-b9a4-4427-9d3a-f28d3d13fd2a',
        //             },
        //             {
        //                 id: 2,
        //                 label: 'Облачные сервисы',
        //                 desc: 'Используем различные облачные сервисы для разработки приложений: AWS, Google cloud, Azure...',
        //                 icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/seamonkey_browser_logo_icon_152961.ico?alt=media&token=6948a145-b9a4-4427-9d3a-f28d3d13fd2a',
        //             },
        //             {
        //                 id: 3,
        //                 label: 'Базы данных',
        //                 desc: 'В разработке мобильных приложений мы используем различные базы данных MySql, Postgresql, mongodb, supabase...',
        //                 icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/seamonkey_browser_logo_icon_152961.ico?alt=media&token=6948a145-b9a4-4427-9d3a-f28d3d13fd2a',
        //             },
        //         ],
        //         stages: [
        //             { status: 'Processing', timeline: '30-45', icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2F1490889638-app-store_82517.png?alt=media&token=0ca0785a-cd56-4694-877a-00bb5ef0d9cd', color: '#673AB7' },
        //             { status: 'Shipped', timeline: '20-50', icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2F1490889638-app-store_82517.png?alt=media&token=0ca0785a-cd56-4694-877a-00bb5ef0d9cd', color: '#FF9800' },
        //             { status: 'Delivered', timeline: '10-20', icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fcodinghtml_117796.png?alt=media&token=f92b4e4b-404a-4300-b2e1-56538046c8b5', color: '#607D8B' },
        //         ],
        //         faq: [
        //             { title: 'Что делать если 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', value: '0' },
        //             { title: 'Что делать если 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', value: '1' },
        //             { title: 'Что делать если 3', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', value: '2' }
        //         ],
        //     }
        // },
        {
            id: 6,
            label: 'Разработка API',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2Fapi_icon_129131.png?alt=media&token=c3c22be2-994f-48f0-bca0-6def6dd7c914',
            endProjectsCount: 4,
            desc: "Создание API включает проектирование, разработку и документирование интерфейсов для взаимодействия между системами. Мы проводим полный цикл работы, от анализа требований до тестирования и поддержки API, обеспечивая его интеграцию с различными приложениями и сервисами.",
            category: "full_cycle",
            serviceInfo: {
                imageSrc: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Fimages-services%2FAPI.jpg?alt=media&token=d7da7491-5456-4f49-a1e3-c72910172b69',
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
            }
        },
        {
            id: 7,
            label: 'Консалтинг по IT',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2Fcounseling.png?alt=media&token=59f0c2e0-cbf0-4f0a-b302-90cb850e22d5',
            endProjectsCount: 4,
            desc: "IT-консалтинг предлагает услуги по анализу текущих бизнес-процессов и разработке стратегий по оптимизации и внедрению технологий. Мы проводим полный цикл работ, включая аудит, рекомендации по улучшениям, внедрение решений и последующий мониторинг эффективности.",
            category: "full_cycle",
            serviceInfo: {
                imageSrc: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Fimages-services%2FCounsailing.jpg?alt=media&token=fc0bf9b3-e35c-4f3e-89c0-b36ed6daa4c4',
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
            }
        },
        {
            id: 8,
            label: 'Безопасность',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2Ffingerprint_scan_icon_154446.png?alt=media&token=a7021d22-a127-46e8-9679-637bf134d0ef',
            endProjectsCount: 4,
            desc: "Услуги по безопасности включают оценку рисков, разработку стратегий защиты и внедрение мер безопасности для защиты данных и систем. Мы проводим полный цикл работы – от анализа угроз до реализации решений и последующего мониторинга и поддержки.",
            category: "full_cycle",
            serviceInfo: {
                imageSrc: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Fimages-services%2FCyberSecurity.jpg?alt=media&token=e3c7a237-71a0-45f7-8a7e-6945760e884e',
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
            }
        },
        {
            id: 9,
            label: 'SEO и маркетинг',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2FDeep-Crawl_icon-icons.com_53720.png?alt=media&token=d463437c-6e86-42da-bfe5-0e64a7bf046c',
            endProjectsCount: 4,
            desc: "SEO и маркетинг включают в себя аудит текущих позиций, разработку стратегии продвижения и реализацию мероприятий для улучшения видимости в поисковых системах. Мы предлагаем полный цикл работы, включая анализ, реализацию и мониторинг результатов.",
            category: "full_cycle",
            serviceInfo: {
                imageSrc: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Fimages-services%2FSEO.jpg?alt=media&token=90f82766-5042-4189-b52e-c96b6122f520',
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
            }
        },
        {
            id: 10,
            label: 'Обработка данных и аналитика',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2Ftabletchart_118080.png?alt=media&token=9442aded-4091-4395-8bfd-ec99404535ca',
            endProjectsCount: 4,
            desc: "Услуги по обработке данных и аналитике включают сбор, анализ и визуализацию данных для принятия обоснованных бизнес-решений. Мы обеспечиваем полный цикл работы, начиная с анализа потребностей и заканчивая предоставлением отчетов и рекомендаций.",
            category: "full_cycle",
            serviceInfo: {
                imageSrc: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Fimages-services%2FAnalytics.jpg?alt=media&token=088f881f-825b-4096-9ec0-fe825d450611',
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
            }
        },
        {
            id: 11,
            label: 'Разработка чат-ботов',
            icon: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/icons%2Fservices%2Frobot-round-head_icon-icons.com_55274.png?alt=media&token=7963e7d1-71a2-4e55-9de3-4da1744def45',
            endProjectsCount: 4,
            desc: "Создание чат-ботов включает проектирование, разработку и внедрение автоматизированных систем общения с пользователями. Мы предлагаем полный цикл разработки, включая анализ требований, создание сценариев, программирование и тестирование, а также поддержку и обновления.",
            category: "full_cycle",
            serviceInfo: {
                imageSrc: 'https://firebasestorage.googleapis.com/v0/b/sds-publisher.appspot.com/o/PROFILE-SITE%2Fimages-services%2FBots.jpg?alt=media&token=b63791ae-bb98-450d-8ed4-1d94286e78a1',
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
            }
        },

        // Под категории

        // {
        //     id: 13,
        //     label: 'Дизайн мобильного приложения',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Создаем интуитивно понятные и привлекательные интерфейсы, учитывая пользовательский опыт и современные тренды",
        //     category: "mobile",
        // },
        // {
        //     id: 14,
        //     label: 'Прототипирование мобильного приложения',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Разрабатываем интерактивные прототипы, позволяющие визуализировать функционал и структуру приложения до его создания.",
        //     category: "mobile",
        // },
        // {
        //     id: 15,
        //     label: 'Разработка мобильного приложения (iOS/Android)',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Профессионально разрабатываем приложения для обеих платформ, обеспечивая высокое качество и производительность.",
        //     category: "mobile",
        // },
        // {
        //     id: 16,
        //     label: 'Тестирование мобильного приложения',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Проводим комплексное тестирование для выявления и устранения ошибок, обеспечивая стабильную работу приложения.",
        //     category: "mobile",
        // },
        // {
        //     id: 17,
        //     label: 'Доработка существующего приложения',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Улучшаем функциональность и производительность уже работающих приложений, учитывая отзывы пользователей.",
        //     category: "mobile",
        // },
        // {
        //     id: 18,
        //     label: 'Создание плагинов для мобильных приложений',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Разрабатываем уникальные плагины, расширяющие возможности приложений и повышающие их функциональность.",
        //     category: "mobile",
        // },
        // {
        //     id: 19,
        //     label: 'Интеграция с сторонними сервисами через API',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Обеспечиваем seamless интеграцию с внешними сервисами, улучшая взаимодействие и функционал приложения.",
        //     category: "mobile",
        // },
        // // Web sub services
        // {
        //     id: 20,
        //     label: 'Разработка веб-сервиса',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Создаем надежные и функциональные веб-сервисы, адаптированные под уникальные бизнес-потребности.",
        //     category: "web",
        // },
        // {
        //     id: 21,
        //     label: 'Создание и настройка серверной части',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Настраиваем серверную инфраструктуру для обеспечения безопасности, стабильности и оптимальной работы веб-сервиса.",
        //     category: "web",
        // },
        // {
        //     id: 22,
        //     label: 'Интеграция с сторонними API',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Реализуем интеграцию с внешними API, позволяя вашему веб-сервису взаимодействовать с другими платформами и системами.",
        //     category: "web",
        // },
        // {
        //     id: 23,
        //     label: 'Оптимизация производительности',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Повышаем скорость и производительность веб-сервиса через эффективные решения и оптимизацию кода.",
        //     category: "web",
        // },
        // {
        //     id: 24,
        //     label: 'Разработка документации для API',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Создаем исчерпывающую документацию для API, упрощая процесс интеграции для разработчиков.",
        //     category: "web",
        // },
        // {
        //     id: 25,
        //     label: 'Тестирование веб-сервиса',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Проводим комплексное тестирование для выявления и устранения неполадок, гарантируя надежность и стабильность работы.",
        //     category: "web",
        // },

        // // Web sub sites
        // {
        //     id: 26,
        //     label: 'Дизайн веб-сайта',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Создаем привлекательные и функциональные дизайны, ориентируясь на пользовательский опыт и требования бренда.",
        //     category: "web",
        // },
        // {
        //     id: 27,
        //     label: 'Прототипирование веб-сайта',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Разрабатываем интерактивные прототипы для визуализации структуры и функционала сайта до его реализации.",
        //     category: "web",
        // },
        // {
        //     id: 28,
        //     label: 'Разработка веб-сайта (статический или динамический)',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Профессионально разрабатываем как статические, так и динамические сайты, адаптированные под ваши нужды.",
        //     category: "web",
        // },
        // {
        //     id: 29,
        //     label: 'SEO-оптимизация сайта',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Оптимизируем сайт для поисковых систем, улучшая его видимость и привлекая целевую аудиторию.",
        //     category: "web",
        // },
        // {
        //     id: 30,
        //     label: 'Настройка хостинга и домена',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Помогаем в выборе и настройке хостинга и доменного имени для стабильной работы вашего сайта.",
        //     category: "web",
        // },
        // {
        //     id: 31,
        //     label: 'Исправление багов и доработка функционала',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Устраняем ошибки и дорабатываем функциональность, повышая надежность и качество сайта.",
        //     category: "web",
        // },
        // // Desktop sub services
        // {
        //     id: 32,
        //     label: 'Разработка десктопного приложения',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "(Windows, macOS, Linux): Создаем приложения для различных операционных систем с учетом их специфики.",
        //     category: "desktop",
        // },
        // {
        //     id: 33,
        //     label: 'Дизайн интерфейса приложения',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Разрабатываем интуитивно понятные и привлекательные интерфейсы для улучшения пользовательского опыта.",
        //     category: "desktop",
        // },
        // {
        //     id: 34,
        //     label: 'Тестирование десктопного приложения',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Проводим тестирование для выявления и устранения ошибок, обеспечивая высокое качество продукта.",
        //     category: "desktop",
        // },
        // {
        //     id: 35,
        //     label: 'Интеграция desktop приложения с внешними сервисами',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Обеспечиваем совместимость приложения с различными внешними сервисами и API.",
        //     category: "desktop",
        // },
        // {
        //     id: 36,
        //     label: 'Оптимизация и доработка существующего ПО',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Усовершенствуем и оптимизируем уже существующие приложения для повышения их производительности.  ",
        //     category: "desktop",
        // },
        // {
        //     id: 37,
        //     label: 'Поддержка и обновление desktop программного обеспечения',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Обеспечиваем регулярные обновления и поддержку для стабильной работы программного обеспечения.",
        //     category: "desktop",
        // },
        // // API sub services
        // {
        //     id: 38,
        //     label: 'Проектирование архитектуры API',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Создаем архитектуру API, учитывающую потребности пользователей и систем.",
        //     category: "api",
        // },
        // {
        //     id: 39,
        //     label: 'Документация для разработчиков',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Подготавливаем подробную документацию для разработчиков, облегчающую интеграцию с API.",
        //     category: "api",
        // },
        // // Security sub services
        // {
        //     id: 40,
        //     label: 'Оценка уязвимостей системы',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Проводим анализ уязвимостей для выявления слабых мест в системе.",
        //     category: "security",
        // },
        // {
        //     id: 41,
        //     label: 'Проведение аудита безопасности',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Выполняем аудит безопасности для оценки текущих мер защиты и их эффективности.  ",
        //     category: "security",
        // },
        // {
        //     id: 42,
        //     label: 'Обучение сотрудников по безопасности',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Проводим тренинги и обучение сотрудников по вопросам кибербезопасности.  ",
        //     category: "security",
        // },
        // // Analytics sub services
        // {
        //     id: 43,
        //     label: 'Сбор и очистка данных',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Проводим сбор и предварительную обработку данных для дальнейшего анализа",
        //     category: "analytic",
        // },
        // {
        //     id: 44,
        //     label: 'Анализ данных и создание отчетов',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Проводим глубокий анализ данных и создаем информативные отчеты.",
        //     category: "analytic",
        // },
        // {
        //     id: 45,
        //     label: 'Визуализация данных',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Разрабатываем визуализации данных для более наглядного представления информации.",
        //     category: "analytic",
        // },
        // {
        //     id: 46,
        //     label: 'Разработка и внедрение моделей машинного обучения',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Создаем и внедряем модели машинного обучения для автоматизации процессов анализа данных",
        //     category: "analytic",
        // },
        // // CHAT-BOT sub services
        // {
        //     id: 47,
        //     label: 'Проектирование сценариев взаимодействия',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Разрабатываем сценарии общения чат-бота с пользователями для обеспечения естественного взаимодействия.  ",
        //     category: "plugs",
        // },
        // {
        //     id: 48,
        //     label: 'Разработка и интеграция чат-бота',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Создаем чат-ботов и интегрируем их в существующие системы и платформы.",
        //     category: "plugs",
        // },
        // {
        //     id: 49,
        //     label: 'Тестирование функционала чат-бота',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Проводим тестирование для проверки работы чат-бота и устранения возможных ошибок.  ",
        //     category: "plugs",
        // },
        // {
        //     id: 50,
        //     label: 'Поддержка и обновление чат-бота',
        //     icon: '',
        //     endProjectsCount: 4,
        //     desc: "Обеспечиваем регулярную поддержку и обновления функционала чат-бота для улучшения его работы.",
        //     category: "plugs",
        // },
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
        selectedServiceInfo.value = Object.assign({}, service.serviceInfo, {
            label: service?.label,
            desc: service?.desc,
        })
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
        selectedServiceInfo,

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