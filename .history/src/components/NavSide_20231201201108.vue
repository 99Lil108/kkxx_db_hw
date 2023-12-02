<script setup></script>
<template>
  <div class="nav">
    <div
      class="function"
      @click="changeBackgroundColor(0, gowhere.bind(this, 'main/time'))"
      :class="{ activeSty: activeFunc == 0 }"
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
<style scoped lang="less"></style>
