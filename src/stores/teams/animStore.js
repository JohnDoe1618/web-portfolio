import { defineStore } from "pinia";
import gsap from "gsap";
import { ref } from "vue";


export const useAnimTeamsStore = defineStore('animTeamsStore', () => {

    // ######################  STATE
    const animationExecuteState = ref(false);        // Переключатель для отслеживания выполнения анимации. true - анимация выполняется / false - анимация не выполняется(уже выполнена)


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
    async function executeOneTeamsAnimation(id='', config=exampleExecuteOneParam) {
        if(!id || !config) throw 'id required arg';
        // Корректировка id-элемента для правильного применения анимаций
        let correctID = (id[0] !== '#') ? ['#', ...id].join('') : id;
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                await gsap.to(correctID, { 
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


    return {
        animationExecuteState,
        initTextAnimation,
        executeOneTeamsAnimation,
        executeAllTeamsAnimation,
    }
});