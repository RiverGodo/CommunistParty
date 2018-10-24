<template>
    <div class="container login">
        <div class="wrap">
            <div class="logo-wrap">
                <img src="../assets/logo2.png">
            </div>
            <form class="form">
                <div class="input-wrap" @submit.prevent>
                    <input type="text" placeholder="身份证号" v-model="formData.id_card">
                </div>
                <div class="input-wrap " >
                    <input type="text" placeholder='密码' v-model="formData.password">
                </div>
            </form>
                <div class="input-wrap2">
                    <mt-button size="large" @click="handleLogin">登录</mt-button>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            formData:{
                id_card:"",
                password:"",

            }
        }
    },
    methods:{
        handleLogin(){
            this.$axios.post('/user/userLogin.do',this.formData).then(res=>{
                console.log(res)
               
                if(res.code == 0){
                    console.log(res.msg);
                }else{
                    this.$store.commit('CHANGE_userInfo',res.data)
                    console.log(res.msg);
                    this.$store.commit('CHANGETOKEN',res.token)
                    let url ='myparty'
                    let isreplace = false
                    if(this.$route.query&&this.$route.query.redirect){
                        url = this.$route.query.redirect
                        isreplace = true;
                    }
                    if(isreplace){
                        setTimeout(() => {
                            this.$router.replace(`/${url}`)
                        }, 300);
                    }else{
                            setTimeout(() => {
                            this.$router.push(`/${url}`)
                        }, 300);
                    }
                }
            })
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
