<template>
    <div class="com-header" fixed>
      <mt-header  :title="title">
          <mt-button icon="back" @click="$router.back(-1)" slot="left" v-if="isShow">

          </mt-button>
      </mt-header>
    </div>
</template>

<script>

export default {
    computed:{
        title(){
            return this.$route.meta.title
        },
        isShow(){
            if(this.$route.name === 'index'||this.$route.name === 'notice'||this.$route.name === 'myparty')
            {
            return false;
            }
            else{
                return true;
            }
        }
    }
}
</script>

<style lang='scss'>
.com-header{
        align-items: center;
        height: 1.12rem;
        width:100%;
        position:fixed;
        top:0;
        z-index:1;
    .mint-header{
        background: #c50206;
        height: 50px;

        .mint-header-title{
            font-size: 16px;
            font-weight: 400;
        }
    }
}
    
</style>
