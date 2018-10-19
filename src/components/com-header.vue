<template>
    <div class="com-header" fixed>
      <mt-header  :title="title">
          <mt-button icon="back" @click="$route.back()" slot="left">

          </mt-button>
      </mt-header>
    </div>
</template>

<script>

export default {
    computed:{
        title(){
            return this.$route.meta.title
        }
    }
}
</script>

<style lang='scss'>
    .mint-header{
        background: #c50206;
        height: 50px;

        .mint-header-title{
            font-size: 16px;
            font-weight: 400;
        }
    }
</style>
