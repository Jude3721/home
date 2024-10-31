<template>
  <div class="header">
    <div></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<style scoped lang="scss">
.header{
  position:fixed;
  left:0; top:0;
}

</style>