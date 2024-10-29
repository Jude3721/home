<template>
  <Header/>

  <div id="main">
    <div class="" data-anchor="section1">

    </div>
  </div>
  
</template>

<script>
import Header from './components/header/header.vue'

export default{
  name : "App",
  components : {
    Header,
  },
  mouted(){
    new pageableMin("#main",{
      childSelector:"[data-anchor]",
    });
  },
}
</script>

<style scoped>
</style>
