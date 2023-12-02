<script setup>
import { defineProps } from "vue";
const props = defineProps({
  items: {},
  selectIdx: {},
  onSelectDep: {},
});
</script>
<template>
  <div class="nav">
    <template v-for="(item, idx) in items" :key="idx">
      <div
        class="dep"
        :class="{ activeSty: selectIdx == idx }"
        @click="onSelectDep(idx)"
      >
        {{ item.name }}
      </div>
    </template>
  </div>
</template>
<style scoped lang="less">
.nav {
  width: 12%;
  height: 100%;
  background-color: white;
  color: #8b8b8b;
  overflow-y: auto;

  .dep {
    margin: 10px;
    width: 100%;
    height: 43px;
    line-height: 42px;
    letter-spacing: 1.5px;
    padding: 0 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
  .dep:hover {
    background-image: linear-gradient(
      to right,
      rgb(129, 220, 248),
      rgb(24, 127, 220)
    );
    color: white;
    border-radius: 50px;
  }
  .dep::before {
    position: absolute;
    content: "";
    bottom: 0;
    height: 0.5px;
    width: 70%;
    background-color: #e7eaed;
    left: 0;
    right: 0;
    margin: auto;
  }
}
.nav::-webkit-scrollbar {
  display: none;
}
.activeSty {
  background-color: #ebeffe !important;
  color: #3760f4 !important;
}
</style>
