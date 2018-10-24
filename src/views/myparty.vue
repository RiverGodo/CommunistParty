<template>
    <div >
        <div class="partytop" v-if="!$store.state.userInfo">
            <div class="indeximg">
                <img src="../assets/bt_bg.png" class="header">
            </div>
            <span> <a href="#/login">你还没有登录，请登录</a> </span>
        </div>
        <div class="partytop" v-else>
            <div class="indeximg">
                <img v-lazy="$store.state.userInfo.header" class="header">
            </div>
            <span> <a href="#/login">  {{$store.state.userInfo.username}}</a> </span>
        </div>
        <div class="partyfoot">
            <div @click="handleInfo">
                <mt-cell title="个人信息"  is-link >
                    <img slot="icon" src="../assets/gerenxinxi.png" >
                </mt-cell>
            </div>
            <div @click="handlescore">
                <mt-cell title="个人量化积分"  is-link >
                    <img slot="icon" src="../assets/gerenlianghua.png" >
                </mt-cell>
            </div>
            <div @click="handleUppass">
                <mt-cell title="修改密码"  is-link >
                    <img slot="icon" src="../assets/xiugaimima.png" >
                </mt-cell>
            </div>
            <div @click="handlePay">
                <mt-cell title="党费缴纳"  is-link >
                    <img slot="icon" src="../assets/dangfeijiaona.png" >
                </mt-cell>
            </div>
        </div>
        <div v-if="$store.state.userInfo">
            <mt-button size="large" class="party-btn" @click="handleLogout">退出登录</mt-button>
        </div>
        
    </div>
</template>

<script>
import { islogin } from '@/utils/islogin'
export default {
    data() {
        return{
            sliders:[],
        }
    },
    methods:{
        getSlider() {
            this.$axios.get(`/user/userInfo.do`).then(res =>{
               this.$store.commit('CHANGE_userInfo',res.data)
            })
        },
        handleLogout(){
            let userInfo = ''
            let token = ''
            this.$store.commit('CHANGE_userInfo',userInfo) //清空vuex里数据
            this.$store.commit('CHANGETOKEN',token) //清空vuex里数据
            this.getSlider()
        },
        handleInfo(){
            islogin('info',this)
        },
        handlescore(){
            islogin('score',this)
        },
        handleUppass(){
            islogin('uppass',this)
        },
        handlePay(){
            islogin('pay',this)
        }
    },
}
</script>

<style scoped lang="scss">
    @import "../style/myparty.scss";
</style>
