<template>
  <div class="footer">
    <div></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<style scoped lang="scss">
.footer{
  width:100%;
  padding:100px 0;
  background-color:#10182b;
}

</style>