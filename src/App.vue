<script setup>
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import BusLocation from "./components/BusLocation.vue";
import TrainLocation from "./components/TrainLocation.vue";
import TrainInfo from "./components/TrainInfo.vue";
import SiteConfig from "./components/SiteConfig.vue";

const route = useRoute();
const router = useRouter();
const currentRoute = ref(route.path);

watchEffect(() => {
  currentRoute.value = route.path;
});

const changeRoute = (path) => {
  router.push(path);
};

const reloadPage = () => {
  location.reload();
};
</script>

<template>
  <div class="app-container">
    <BusLocation v-show="currentRoute === '/'" />
    <TrainLocation v-show="currentRoute === '/train'" />
    <TrainInfo v-show="currentRoute === '/info'" />
    <SiteConfig v-show="currentRoute === '/config'" />


    <nav class="bottom-nav">
      <button class="tab" :class="{ active: currentRoute === '/' }" @click="changeRoute('/')">
        <font-awesome-icon icon="bus-simple" class="icon" />
        <span>Bus</span>
      </button>
      <button class="tab" :class="{ active: currentRoute === '/train' }" @click="changeRoute('/train')">
        <font-awesome-icon icon="train-subway" class="icon" />
        <span>Train</span>
      </button>
      <!--<button class="tab" :class="{ active: currentRoute === '/info' }" @click="changeRoute('/info')">
        <font-awesome-icon icon="circle-info" class="icon" />
        <span>Info</span>
      </button>-->
      <button class="tab" :class="{ active: currentRoute === '/config' }" @click="changeRoute('/config')">
        <font-awesome-icon icon="sliders" class="icon" />
        <span>Config</span>
      </button>
    </nav>

    <!--
    <button class="floating-button" @click="reloadPage">
      ↻
    </button>
    -->
  </div>
</template>
