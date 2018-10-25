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
      if(this.$route.name === 'index'||this.$route.name === 'notice'||this.$route.name === 'myparty'){
        return true;
      }
      else{
        return false;
      }
    },
    isIndex(){
       if(this.$route.name === 'index'||this.$route.name === 'newsDetail'||this.$route.name == 'info'){
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
.pt1{
  padding-top: 0.8rem;
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
.border{
  border-bottom: 1px solid rgba(0, 0, 0, .5);
}

</style>
