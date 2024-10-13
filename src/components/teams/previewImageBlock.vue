<template>
    <div class="preview-block">
        <div class="preview-block__fg">
            <div class="title-block mt-auto mr-auto mb-6 px-6 mx-4">
                <h2 id="tm-pr-name">Эвери Владислав</h2>
                <h4 id="tm-pr-jobtitle" class="ml-3 mb-auto mt-3">Full-stack разработчик</h4>
                <Button 
                id="tm-pr-lnkbtn"
                class="contact-btn " 
                :label="lnkbtnTitle" 
                outlined 
                severity="secondary" 
                />
            </div>
        </div>
        <img class="preview-block__image" src="../../assets//preview/A__-fotor-bg-remover-202410111749.png" alt="Preview Image">
    </div>
</template>

<script setup>
import gsap from 'gsap';
import { onMounted, ref } from 'vue';

const lnkbtnTitle = ref('');

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

// Стартовая анимация вложенных элемнтом при монтировании компонента
async function initAnimation() {
    try {
        const tl = gsap.timeline();
        let dur = 0.18;
        let del = 0.4;
        await tl.to('#tm-pr-name', { duration: dur, delay: del, opacity: 1, transform: 'translateX(0px)' });
        await tl.to('#tm-pr-jobtitle', { duration: dur, opacity: 1, transform: 'translateX(0px)' });
        await tl.to('#tm-pr-lnkbtn', { duration: dur, opacity: 1, transform: 'translateX(0px)' });
        initTextAnimation('Связаться', (output) => lnkbtnTitle.value += output, { duration: 80 });
    } catch (err) {
        throw err;
    }
}

onMounted(initAnimation);

</script>

<style scoped>
/* ДЛЯ АНИМАЦИИ ЭЛЕМЕНТОВ */
#tm-pr-name, #tm-pr-jobtitle, #tm-pr-lnkbtn {
    position: relative;
    transform: translateX(150px);
    opacity: 0;
}

.preview-block {
    position: absolute;
    left: 7.5rem;
    width: 500px;
    height: 75vh !important;
    border-radius: var(--base-rounded);
    overflow: hidden;
    box-shadow: var(--base-shadow-1);
    cursor: default;
}
.preview-block__fg {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.07) 35%, rgba(0, 0, 0, 0.8) 100%);
}
.title-block {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    color: white;
    font-family: var(--font);
}
.title-block > h2 {
    font-size: 1.6rem;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: var(--base-rounded);
    backdrop-filter: blur(3px);
    padding: 0 0.4rem;
}
.title-block > h4 {
    color: var(--text-light);
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: var(--base-rounded);
    backdrop-filter: blur(3px);
    padding: 0 0.4rem;
}
.contact-btn {
    color: rgb(219, 219, 219) !important;
}
.contact-btn:hover {
    color: black !important;
}
.preview-block__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>