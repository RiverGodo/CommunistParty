<template>
    <div class="cell">
        <router-link to="/">
            <mt-cell v-for="item in sliders" :key="item.id" class="notice" >
                <div class="detail-img">
                    <img slot="icon" src="../assets/iconfont_gonggaotongzhi.png" class="laba">
                </div>
                <div class="desc ">
                    {{item.title}} <br/>
                    <div class="desc-time">
                        {{item.currentTime}}
                    </div>
                </div>
            </mt-cell>
        </router-link>
        <span class="nodesc">没有数据了</span>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            sliders:[],
        }
    },
    methods:{
        getSlider(){
              axios.get('http://211.67.177.56:8080/hhdj/news/newsList.do?page=1&rows=10&type=2').then(res =>{
                this.sliders = res.data.rows
            })
        }
    },
     created() {
        this.getSlider();
    },
}
</script>

<style lang = "scss">
    @import '../style/notice.scss';
</style>
