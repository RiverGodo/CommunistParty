<template>
  <div id="app">
    <conHeader v-if="isIndex"/>
    <router-view/>
    <tabs v-if="isShow"/>
  </div>
</template>

<script>

import tabs from '@/components/tabs'
import conHeader from '@/components/com-header'

export default {
  name: 'App',
  components:{
    tabs,
    conHeader
  },
  computed:{
    isShow(){
      if(this.$route.name === 'login'){
        return false;
      }
      else{
        return true;
      }
    },
    isIndex(){
       if(this.$route.name === 'index'){
        return false;
      }
      else{
        return true;
      }
    }
  }

}
</script>

<style>
  * {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}
a{
  text-decoration: none;
}
.flr {
  float: right;
}
.fll {
  float: left;
}
.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
.pt110{
  padding-top: 1.1rem;
}
.pb104{
  padding-bottom: 1.04rem;
}
.loading{
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  margin: 0.4rem auto;
}
</style>
