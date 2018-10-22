<template>
    <div >
        <div class="partytop">
            <div class="indeximg">
                <img src="../assets/bt_bg.png" class="header">
            </div>
            <span> <a href="#/login">你还没有登录，请登录</a> </span>
        </div>
        <div class="partyfoot">
            <mt-cell title="个人信息"  is-link >
                <img slot="icon" src="../assets/gerenxinxi.png" >
            </mt-cell>
            <mt-cell title="个人量化积分"  is-link >
                <img slot="icon" src="../assets/gerenlianghua.png" >
            </mt-cell>
            <mt-cell title="修改密码"  is-link >
                <img slot="icon" src="../assets/xiugaimima.png" >
            </mt-cell>
            <mt-cell title="党费缴纳"  is-link >
                <img slot="icon" src="../assets/dangfeijiaona.png" >
            </mt-cell>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            sliders:[],
        }
    },
    methods:{
        getSlider() {
            axios.get('http://211.67.177.56:8080/hhdj/news/newsContent.do?newsId=2687').then(res =>{
                this.sliders = res.data.rows
            })
        }
    },
}
</script>

<style scoped lang="scss">
    @import "../style/myparty.scss";
</style>
