<template>
    <div class="preview-block">
        <div class="preview-block__fg">
            <div class="title-block mt-auto mr-auto mb-6 px-6 mx-4">
                <h2>Владислав Эвери</h2>
                <h4 class="ml-3 mb-auto mt-3">Full-stack разработчик</h4>
                <Button 
                class="contact-btn " 
                label="Связаться" 
                outlined 
                severity="secondary" 
                />
            </div>
        </div>
        <img class="preview-block__image" src="../../assets//preview/A__-fotor-bg-remover-202410111749.png" alt="Preview Image">
    </div>
</template>

<script setup>

</script>

<style scoped>
.preview-block {
    position: absolute;
    left: 7.5rem;
    width: 500px;
    height: 75vh !important;
    border-radius: var(--base-rounded);
    overflow: hidden;
    box-shadow: var(--base-shadow-1);
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