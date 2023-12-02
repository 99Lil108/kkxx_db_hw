<script setup>
import { useStore } from "vuex";
import { defineProps } from "vue";
const props = defineProps({
    items: {},
  }),
  { state, commit } = useStore();
</script>
<template>
  <div class="nav">
    <div
      class="function"
      v-for="(item, idx) in items"
      :key="idx"
      :class="{ activeSty: state.funcIdx == idx }"
      @click="changeFunc(idx)"
    >
      <img class="icon" :src="baseUrl + item.img" />
      <div>{{ item.name }}</div>
    </div>
  </div>
</template>
<style scoped lang="less"></style>
