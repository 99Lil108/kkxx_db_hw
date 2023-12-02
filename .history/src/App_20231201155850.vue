<script setup>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
import SystemName from "./components/SystemName.vue";
const store = useStore();
onBeforeMount(() => {
  store.commit("loadToken");
  // console.log(store.state.token);
});
</script>
<template>
  <div style="width: 100%; height: 100%; position: fixed; inset: 0">
    <header class="header">
      <SystemName></SystemName>
    </header>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="less">
.header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  align-content: space-between;
  padding: 25px;
}
</style>
