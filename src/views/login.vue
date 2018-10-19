<template>
    <div class="container login">
        <div class="wrap">
            <div class="logo-wrap">
                <img src="../assets/logo2.png">
            </div>
            <form class="form">
                <div class="input-wrap" @submit.prevent>
                    <input type="text" placeholder="身份证号" v-model="formData.userName">
                </div>
                <div class="input-wrap " >
                    <input type="text" placeholder='密码' v-model="formData.password">
                </div>
            </form>
                <div class="input-wrap2">
                    <mt-button size="large" >登录</mt-button>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            formData:{
                userName:"",
                password:"",

            }
        }
    }
}
</script>

    <style>
    .mint-button{
        background: #e3574f;
        font-size: 14px;
        color: #fff;
    }
    </style>
    

<style scoped lang="scss">
   @import "../style/login.scss";
</style>
