<script setup>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";
import SystemName from "./components/SystemName.vue";
import Logout from "./components/Logout.vue";
const store = useStore(),
  state = store.state;
onBeforeMount(async () => {
  store.commit("loadToken");
});
</script>
<template>
  <div style="width: 100%; height: 100%; position: fixed; inset: 0">
    <header
      class="header"
      :style="state.isLogin ? { backgroundColor: '#073664' } : null"
    >
      <SystemName></SystemName>
      <Logout v-if="state.isLogin"></Logout>
    </header>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="less">
.header {
  width: 100%;
  height: 60px;
  display: flex;
  // padding: 12px;
}
</style>
