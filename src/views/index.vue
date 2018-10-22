<template>
<div class="index-container">
    <div class="body-detail ">
        <div class="slider">
            <swiper :options="swiperOption">
                <swiper-slide v-for="item in sliders" :key="item.id">
                    <router-link :to="{path:'/newDetails',query:{id:item.url}}" class="slider-wrap">
                        <div class="wrap">
                            <img :src= "item.imgUrl" >
                            <div class="desc">
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
                <router-link to="/"  class="menu-item">
                    <div>
                        <img src="../assets/icon_03.png">
                    </div>
                    <div class="menu-btn-title">
                        掌上组织生活
                    </div>
                </router-link>
                <router-link to="/"  class="menu-item">
                    <div>
                        <img src="../assets/icon_05.png">
                    </div>
                    <div class="menu-btn-title">
                       党员云互动
                    </div>
                </router-link>
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
                <router-link to="/"  class="menu-item">
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
                    <router-link to="/"></router-link>
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
            <router-link to="/login">
            登录
            </router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

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
            axios.get('http://211.67.177.56:8080/hhdj/carousel/carouselList.do?type=0').then(res =>{
                this.sliders = res.data.rows
            })
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


