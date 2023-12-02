<script setup>
import { useStore } from "vuex";
import { defineProps } from "vue";
const props = defineProps({
    items: {},
  }),
  store = useStore(),
  state = store.state;
</script>
<template>
  <div class="nav">
    <div
      class="function"
      @click="changeBackgroundColor(0, gowhere.bind(this, 'main/time'))"
      :class="{ activeSty: state.activeFunc == 0 }"
    >
      <img class="icon" src="/src/assets/patient/time.png" />
      <div>门诊时间</div>
    </div>
    <div
      class="function"
      :class="{ activeSty: activeFunc == 1 }"
      @click="changeBackgroundColor(1, gowhere.bind(this, 'main/patient'))"
    >
      <img class="icon" src="/src/assets/login/patient_white.png" />
      <div>患者信息</div>
    </div>
    <div
      class="function"
      :class="{ activeSty: activeFunc == 2 }"
      @click="changeBackgroundColor(2, gowhere.bind(this, 'main/doctor2'))"
    >
      <img class="icon" src="/src/assets/login/doctor_white.png" />
      <div>医生信息</div>
    </div>
    <div
      class="function"
      :class="{ activeSty: activeFunc == 3 }"
      @click="changeBackgroundColor(3, gowhere.bind(this, 'main/register'))"
    >
      <img class="icon" src="/src/assets/patient/register.png" />
      <div>挂号信息</div>
    </div>
  </div>
</template>
<style scoped lang="less">
.nav {
  width: 14%;
  height: 100%;
  color: white;
  background-color: #073664;
  .function {
    padding: 20px 20px;
    font-size: 17px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    background-color: #073664;
  }
  .function:hover {
    background-color: #012851;
    cursor: pointer;
  }

  .icon {
    width: 17%;
    height: 10%;
    margin-right: 4px;
  }
}
</style>
