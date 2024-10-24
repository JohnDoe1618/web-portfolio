
export function useTeamsAdaptive() {
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
        resizeInfoSection,
        handlerFrameAdaptive,
        adaptiveInfoSection,
    }
}