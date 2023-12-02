<script setup></script>
<template>
  <div class="container">
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
}
</style>
