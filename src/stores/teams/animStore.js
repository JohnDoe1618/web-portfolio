import { defineStore } from "pinia";
import gsap from "gsap";
import { reactive, ref } from "vue";


export const useAnimTeamsStore = defineStore('animTeamsStore', () => {

    // ######################  STATE
    const animationExecuteState = ref(false);        // Переключатель для отслеживания выполнения анимации. true - анимация выполняется / false - анимация не выполняется(уже выполнена)
    const widthInfoSection = ref(1200)               // Ширина блока информации тиммейта
    const animationIds = reactive({
        infoSection: ['teams-info-section'],      //  айдишник секции, которая оборачивает preview- и summary- блоки
        preview: ['teams-preview-block', {          //  айдишник блока с Картинкой члена команды. Нужен для анимации появления/скрытия 
            name: 'tm-pr-name',                         //  id для анимации имени на превью картинке
            jobtitle: 'tm-pr-jobtitle',                 //  id для анимации должности
            lnkbtn: 'tm-pr-lnkbtn',                     //  id для анимации кнопки "связаться"
        }],
        summary: ['teams-summary-block'],           //  айдишник блока с Описанием члена команды. Нужен для анимации появления/скрытия
    })

    // ######################  ACTIONS
    // Анимация отрисовки текста
    function initTextAnimation(
        input='', 
        callback = (output='') => {}, 
        config = { duration: 200 },
    ) {
        try {
            if(!input) throw 'input required arg';
            for (let i = 0; i < input.length; i++) {
                const element = input.at(i);
                setTimeout(() => {
                    callback(element)
                }, i*config.duration);
            }
        } catch (err) {
            throw err;
        }
    }

    // Наборы Анимаций для страницы Teams
    // Функция применяется для элементов анимации,слайд-эффект которых нужно переключить
    /**
     * @description Функция применяется для элементов анимации, слайд-эффект которых нужно переключить
     * @param {*} id ID html-элемента, который нужно анимировать. Важно, чтобы у элемета были базовые стили scale, opacity, transform, для того чтобы анимация сработала
     * @param {*} config Объект конфигурации для выполнения анимации.
     * @param {*} config.delay задержка для старта анимации в мс. После того как delay время истечет, анимация начнет своё выполнение 
     * @param {*} config.duration продолжительность выполнения анимации
     * @param {*} config.scale* коэфициент размерности элемента. (0 - элемент уменьш. до исчезовения, 1 - элемент увеличивается до нормального размера)  
     * @param {*} config.opacity* коэфициент прозрачности элемента. (0 - элемент растворяется, 1 - элемент проявляется)  
     * @param {*} config.transform.x* коэфициент сдвига элемента по оси абсцисс. (-x - движение влево, +x - движение вправо)  
     * @param {*} config.transform.y* коэфициент сдвига элемента по оси ординат. (-y - движение вверх, +y - движение вниз)  
     * @returns true
     */
    // Пример параметра config
    const exampleExecuteOneParam = {
        delay: 300,
        duration: 0.4,
        scale: 1,
        opacity: 1,
        transform: {
            x: 0,
            y: 0,
        }
    }

    // Дебаунсер для оптимизации обновления событий
    function debounce(func, delay) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    // Корректировка id-элемента для правильного применения анимаций
    function correctID(id='') {
        return (id[0] !== '#') ? ['#', ...id].join('') : id;
    }

    async function executeOneTeamsAnimation(id='', config=exampleExecuteOneParam) {
        if(!id || !config) throw 'id required arg';
        
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                await gsap.to(correctID(id), { 
                    duration: config.duration, 
                    scale: config.scale, 
                    opacity: config.opacity, 
                    transform: `translate(${config.transform.x}px, ${config.transform.y}px)`
                });
                resolve(true);
            }, config.delay);
        });
    }

    /**
     * @description Операция для запуска множества анимаций (Если на странице Teams необходимо одновоеменно анимировать несколько объектов)
    */
    async function executeAllTeamsAnimation(inputDatas = [{ id: '', config: exampleExecuteOneParam }]) {
        animationExecuteState.value = true
        const animations = []       // в массив помещаются промисы анимаций, которые нужно выполнить одновременно
        if(inputDatas && Array.isArray(inputDatas)) {
            inputDatas.forEach((element) => {
                animations.push(executeOneTeamsAnimation(element.id, element.config));
            })
        }
        Promise.all(animations).then(() => animationExecuteState.value = false);
    }

    /**
     * @description 
     * Операция анимирует общий блок данных о тиммейте
    */
    const infoSectionAnimConfig = { isFade: false, duration: 0.4, delay: 0, opacity: 1, width: widthInfoSection.value };
    async function infoSectionAnim(id='', config=infoSectionAnimConfig) {
        try {
            // Корректировка конфига, для того чтобы избежать неявной потери ключей конфигурации 
            let correctConfig = { ...infoSectionAnimConfig, ...config };  
            // Появление блока
            if(correctConfig.isFade === false) {
                await gsap.to(correctID(id), { 
                    duration: correctConfig.duration, 
                    delay: correctConfig.delay,
                    opacity: correctConfig.opacity,
                    width: correctConfig.width,
                });
            }
            // Скрытие блока
            else if(correctConfig.isFade === true) {
                await gsap.to(correctID(id), { 
                    duration: correctConfig.duration, 
                    delay: correctConfig.delay,
                    opacity: correctConfig.opacity,
                    width: correctConfig.width,
                });
            }
            return;
        } catch (err) {
            throw err;
        }
    }

    // Выполняет resize блока информации тиммейта
    const sizeConfDefault = { w: null, h: null } 
    function resizeInfoSection(size=sizeConfDefault) {
        const { w: width, h: height } = { ...sizeConfDefault, ...size };
        const block = document.getElementById(animationIds.infoSection[0])
        if(typeof width === 'number') {
            block.style.width = `${width}px`;
        }
        if(typeof height === 'number') {
            block.style.height = `${height}px`;
        }
    }
    // Обработчик адаптива для ключевого кадра
    function handlerFrameAdaptive( value, keyframe, values={ less: 0, greater: 0 }, callback=(updVal=0) => {}) {
        try {
            // Если фактическое значение value меньше чем ключевой кадр, то высота/ширина экрана уменьшается.
            if(value <= keyframe) {
                if(values.less) callback(values.less);
            }
            else {
                if(values.greater) callback(values.greater);
            }
        } catch (err) {
            console.error(err);
        }
    }
    // Функция для адаптива секции тиммейтовской инфы под размеры экрана
    function adaptiveInfoSection(frame_w, frame_h) {
        handlerFrameAdaptive(frame_w, 1280, { less: 1100, greater: 1200 }, (updVal) => resizeInfoSection({ w: updVal }));
    }

    return {
        animationExecuteState,
        widthInfoSection,
        animationIds,
        debounce,
        initTextAnimation,
        executeOneTeamsAnimation,
        executeAllTeamsAnimation,
        infoSectionAnim,
        adaptiveInfoSection,
    }
});