<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore(),
  router = useRouter();
const logout = () => {
  store.commit("updateToken", null);
  router.push("/login");
};
</script>
<template>
  <div class="wrap">
    <img class="exit" src="../assets/common/exit.png" @click="logout" />
  </div>
</template>
<style scoped lang="less">
.wrap {
  background-color: #0e70c7;
  height: 100%;
  width: 88%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  .exit {
    display: block;
    cursor: pointer;
    height: 50%;
    margin: 4px;
    margin-left: auto;
  }
}
</style>
