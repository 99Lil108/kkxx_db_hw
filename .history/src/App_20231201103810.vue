<script setup>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
const store = useStore();
onBeforeMount(() => {
  store.commit("");
});
</script>
<template>
  <div style="width: 100%; height: 100%; position: fixed; inset: 0">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="less"></style>
