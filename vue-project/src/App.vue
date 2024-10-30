<template>
  <Header></Header>

    <div class="page" data-anchor="section1">
      <Section1 class="hp-100p"></Section1>
    </div>
    <div class="page" data-anchor="section2">
    </div>
  
</template>

<script setup>
import Header from './components/header/header.vue'
import Section1 from './components/section/section1.vue'

console.log('111');

const pageable = () => {
  console.log('222');

};

pageable();
</script>

<style scoped>
.page{
  width:100%;
  height:100vh
}
</style>
