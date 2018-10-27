<template>
    <div class="pay pt1">
       <span style="font-size:18px;margin: 20px 0 10px;" class="pay-title">请选择支付方式</span>

        <div @click="handleWx">
            <mt-cell title="微信" is-link>
                <div slot="icon" class="wxzf iconfont icon-big-WeChat" ></div>
            </mt-cell>
        </div>
        
        <div @click="handleZfb">
            <mt-cell title="支付宝" is-link>
                <div slot="icon" class="zfbzf iconfont icon-alipay" ></div>
            </mt-cell>
        </div>
    
        <div class="paywrap" v-if="isShowWX" @click="handleClose">
            <img src="../assets/wx.png" alt="">
        </div>
        <div class="paywrap" v-if="isShowZFB" @click="handleClose">
            <img src="../assets/zfb.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isShowWX : false,
            isShowZFB: false
        }
    },
    methods:{
        handleWx(){
            this.isShowWX = true
        },
        handleZfb(){
            this.isShowZFB = true
        },
        handleClose(){
            this.isShowWX = false
            this.isShowZFB = false
        }
    }
   
}
</script>

<style  lang="scss">
    .pay-title{
    vertical-align: middle;
    text-align: center; 
    padding-left: 0.2rem;
    }
    .pay{
         /deep/ .mint-cell-text{
        vertical-align: super;
        color: #666;
        }
    }
   
    .wxzf{
        display: inline-block;
        color:  #6cc143;
        font-size: 0.8rem;
        
    }
    .zfbzf{
        display: inline-block;
        color:  #1296db;
        font-size: 0.8rem;
    }

    .paywrap{
        position: fixed;
        top: 1rem;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .6);
     
        img{
            width: 300px;
            height: 300px;
            background: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    }
</style>
