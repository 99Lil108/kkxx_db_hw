<script setup>
import { useStore } from "vuex";
import { defineProps, reactive } from "vue";
const props = defineProps({
    items: {},
  }),
  { state, commit } = useStore(),
  data = reactive({
    select_id: -1,
  });
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
<style scoped lang="less">
.nav {
  width: 10%;
  height: 100%;
  background-color: #efefef5a;
  color: #8b8b8b;
}
.activeSty {
}
</style>
