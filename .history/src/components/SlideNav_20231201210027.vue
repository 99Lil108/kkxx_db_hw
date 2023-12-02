<script setup>
import { useStore } from "vuex";
import { defineProps } from "vue";
const props = defineProps({
    items: {},
  }),
  { state, commit } = useStore();
</script>
<template>admin</template>
<style scoped lang="less"></style>
