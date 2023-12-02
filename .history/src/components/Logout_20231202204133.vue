<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore(),
  router = useRouter();
const logout = () => {
  store.commit("updateToken", null);
  localStorage.removeItem("token");
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
  background-color: #fafbff;
  height: 100%;
  width: 86%;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-bottom: 1px solid #efeff5;
  border-left: 1px solid #efeff5;
  .exit {
    display: block;
    cursor: pointer;
    height: 45%;
    margin: 5px;
    margin-left: auto;
  }
  .exit:hover {
    scale: 1.03;
  }
}
</style>
