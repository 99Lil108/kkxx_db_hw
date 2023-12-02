<script setup>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
import SystemName from "./components/SystemName.vue";
import Logout from "./components/Logout.vue";
const store = useStore();
onBeforeMount(() => {
  store.commit("loadToken");
  // console.log(store.state.token);
});
</script>
<template>
  <div style="width: 100%; height: 100%; position: fixed; inset: 0">
    <header
      class="header"
      :style="!store.state.isLogin ? { backgroundColor: '#389bff' } : null"
    >
      <SystemName></SystemName>
      <Logout></Logout>
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
  justify-content: space-between;
  padding: 15px;
}
</style>
