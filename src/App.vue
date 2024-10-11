<template>
  <NavBar></NavBar>
  <div class="app">
    <Transition>
      <router-view></router-view>
    </Transition>
  </div>
</template>

<script setup>
import NavBar from '@/components/ui/NavBar.vue';
import { onMounted } from 'vue';
import { useBackLGradient } from './components/ui/Effects/background.linear.gradient';

// Параметры для градиента
const styleParams = {
  angleDeg: '45deg',
  colorHext1: '#ee7752',
  colorHex2: '#e73c7e',
  colorHex3: '#23a6d5',
  colorHex4: '#23d5ab',
  backSizePracent1: 400,
  backSizePracent2: 400,
  animName: 'gradient',
};

const { lGradientStyle } = useBackLGradient(styleParams);

onMounted(() => {
  const body = document.body;

  // Устанавливаем стили для body
  Object.assign(body.style, lGradientStyle);
});
</script>

<style>
html,
body {
  height: 100%;
  /* Устанавливаем высоту для html и body на 100% */
  margin: 0;
  box-sizing: border-box;
}

/* Transitions */
.v-enter-active,
.v-leave-active {
  transition: opacity .5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background-color: #e4e4e4;
}

::-webkit-scrollbar-thumb {
  border-left: 0;
  border-right: 0;
  background-color: #93e9ff;
}

/* Animations */

</style>