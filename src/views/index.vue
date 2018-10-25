<template>
<div class="index-container">
    <div class="body-detail ">
        <div class="slider">
            <swiper :options="swiperOption">    
                <swiper-slide v-for="item in sliders" :key="item.id">
                    <router-link :to="{path:`/newsDetail/${item.url}`}" class="slider-wrap"><!-- router-link页面间传数据 -->
                        <div class="wrap">
                            <img :src= "item.imgUrl" >
                            <div class="desc3">
                                {{item.title}}
                            </div>
                        </div>
                    </router-link>
                </swiper-slide>
            </swiper>
        </div>

        <div class="main-menu">
            <div class="row">
                <router-link to="/newseye" class="menu-item">
                    <div>
                        <img src="../assets/icon_01.png">
                    </div>
                    <div class="menu-btn-title">
                        信工新闻眼
                    </div>
                </router-link>
                <router-link to="/life"  class="menu-item">
                    <div>
                        <img src="../assets/icon_03.png">
                    </div>
                    <div class="menu-btn-title">
                        掌上组织生活
                    </div>
                </router-link>
                <div class="menu-item" @click="handleCloud">
                    <div>
                        <img src="../assets/icon_05.png">
                    </div>
                    <div class="menu-btn-title" >
                       党员云互动
                    </div>
                </div>
            </div>
            <div class="row">
                <router-link to="/oneclick"  class="menu-item">
                    <div>
                        <img src="../assets/icon_04.png">
                    </div>
                    <div class="menu-btn-title">
                      党建一点通
                    </div>
                </router-link>
                <router-link to="/showidentity"  class="menu-item">
                    <div>
                        <img src="../assets/icon_06.png">
                    </div>
                    <div class="menu-btn-title">
                        党员亮身份
                    </div>
                </router-link>
                <router-link to="/today"  class="menu-item">
                    <div>
                        <img src="../assets/icon_02.png">
                    </div>
                    <div class="menu-btn-title">
                        党史上的今天
                    </div>
                </router-link>
            </div>
        </div>
        <!-- 菜单结束 -->
        <div class="banner">
            <img src="../assets/banner02.png" alt="">
        </div>  

        <div class="footer-menu"> 
            <div class="menu-left">
            </div>
            <div class="menu-right">
                <div class="row">
                    <router-link to="/anytimestudy"></router-link>
                    <router-link to="/anytimephoto"></router-link>
                </div>
                <div class="row">
                    <router-link to="/System"></router-link>
                    <router-link to="/activity"></router-link>
                </div>
            </div>
        </div>
     </div>
       
        <div class="header">
            <div class="header-left">
                <img src="../assets/logo.png" class="header-img">
            </div>
            <router-link to="/login" v-if="!$store.state.userInfo">
            登录
            </router-link>
        </div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { islogin } from '@/utils/islogin'

export default {

    name:'index',
    data() {
        return{
            sliders:[],
            swiperOption: {
                autoplay: false,
                loop:true,
                pagination : '.swiper-pagination',
                on:{
                    click: function(){
                    alert('你点了Swiper'+this.activeIndex);
                    },
                },
            },
        }
    },
    methods:{
        getSlider() {
            this.$axios.get('carousel/carouselList.do?type=0').then(res =>{
                this.sliders = res.rows
            })
        },
        handleCloud() {
           islogin('interaction',this)
        }
    },
    created() {
        this.getSlider();
    },
components: {
    swiper,
    swiperSlide
  },
}

</script>

<style scoped lang="scss">
    @import "../style/index.scss";
</style>


