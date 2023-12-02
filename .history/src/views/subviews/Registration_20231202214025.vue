<script setup>
import { useStore } from "vuex";
import { onBeforeMount, reactive } from "vue";
const data = reactive({
  appointment: [],
});
const { state, commit } = useStore();
</script>
<template>
  <div class="wrap"></div>
</template>
<style scoped lang="less">
.wrap {
  overflow-y: auto;
  width: 100%;
  height: 100%;
}
</style>
