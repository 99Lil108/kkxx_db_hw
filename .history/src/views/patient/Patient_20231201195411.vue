<script setup></script>
<template>
  <div class="container">
    <div class="nav">
      <div
        class="function"
        @click="changeBackgroundColor(0, gowhere.bind(this, 'main/time'))"
        :class="{ activeSty: activeFunc == 0 }"
      >
        <img class="icon" src="/src/assets/time.png" />
        <div>门诊时间</div>
      </div>
      <div
        class="function"
        :class="{ activeSty: activeFunc == 1 }"
        @click="changeBackgroundColor(1, gowhere.bind(this, 'main/patient'))"
      >
        <img class="icon" src="/src/assets/patient_white.png" />
        <div>患者信息</div>
      </div>
      <div
        class="function"
        :class="{ activeSty: activeFunc == 2 }"
        @click="changeBackgroundColor(2, gowhere.bind(this, 'main/doctor2'))"
      >
        <img class="icon" src="/src/assets/doctor_white.png" />
        <div>医生信息</div>
      </div>
      <div
        class="function"
        :class="{ activeSty: activeFunc == 3 }"
        @click="changeBackgroundColor(3, gowhere.bind(this, 'main/register'))"
      >
        <img class="icon" src="/src/assets/register.png" />
        <div>挂号信息</div>
      </div>
    </div>
    <div class="content"></div>
  </div>
</template>
<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  .nav {
    width: 14%;
    height: 100%;
    background-color: #073664;
    .function {
      color: white;
      padding: 20px 20px;
      font-size: 17px;
      font-weight: bold;
      display: flex;
      flex-direction: row;
    }
    .function:hover {
      background-color: #012851;
      cursor: pointer;
    }
  }
}
</style>
