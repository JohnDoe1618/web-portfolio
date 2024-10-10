import { reactive, onMounted } from "vue";

export const useBlurBox = (params) => {
    const blurBoxStyle = reactive({
        position: 'relative',
        width: params.width,
        height: params.height,
        background: 'inherit',
        overflow: 'hidden',
        borderRadius: '2px',
    });

    const addBlurBoxStyles = () => {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `
            .blurred-box:after {
                content: '';
                width: ${params.width};
                height: ${params.height};
                background: inherit; 
                position: absolute;
                box-shadow: inset 0 0 0 ${params.width} rgba(255, 255, 255, 0.09);
                filter: blur(10px);
            }
        `;
        document.head.appendChild(style);
    };

    // Вызываем функцию для добавления стилей при инициализации
    onMounted(addBlurBoxStyles);

    return {
        blurBoxStyle,
    };
};