import { reactive, onMounted } from "vue";

export const useBackLGradient = (styleParams) => {
    const lGradientStyle = reactive({
        "background": `
            linear-gradient(
            ${styleParams.angleDeg}, 
            ${styleParams.colorHext1}, 
            ${styleParams.colorHex2}, 
            ${styleParams.colorHex3}, 
            ${styleParams.colorHex4})
        `,
        "background-size": `${styleParams.backSizePracent1}% ${styleParams.backSizePracent2}%`,
        animation: `gradient 15s ease infinite`,
    });

    // Добавляем анимацию в стили документа
    const addKeyframes = () => {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `
            @keyframes ${styleParams.animName} {
                0% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
                100% {
                    background-position: 0% 50%;
                }
            }
        `;
        document.head.appendChild(style);
    };

    // Вызываем функцию для добавления анимации при инициализации
    onMounted(addKeyframes);

    return {
        lGradientStyle,
    };
};