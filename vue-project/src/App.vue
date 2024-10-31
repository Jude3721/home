<template>
  <Header></Header>

    <div class="page" data-anchor="section1">
      <Section1></Section1>
    </div>
    <div class="page" data-anchor="section2">
      <myInfo></myInfo>
    </div>
  
</template>

<script setup>
import Header from './components/header/header.vue'
import Section1 from './components/section/section1.vue'
import myInfo from './components/section/myInfo.vue'

</script>

<style scoped>
.page{
  width:100%;
}
</style>
