<template>
    <div class="cell">
        <mt-cell v-for="item in sliders" :key="item.id" class="notice" >
            <div @click="handleNewDetail(item.newsId)" class="notice-middle">  
                <div class="detail-img">
                    <img slot="icon" src="../assets/iconfont_gonggaotongzhi.png" class="laba">
                </div>
                <div class="desc ">
                    {{item.title}} <br/>
                    <div class="desc-time">
                        {{item.currentTime}}
                    </div>
                </div>
            </div>
        </mt-cell>
        <span class="nodesc">没有数据了</span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            sliders:[],
        }
    },
    methods:{
        getSlider(){
              this.$axios.get('news/newsList.do?page=1&rows=10&type=2').then(res =>{
                this.sliders = res.rows
            })
        },
        handleNewDetail(id){
            console.log(id)
            this.$router.push(`/newsDetail/${id}`)
        }
    },
     created() {
        this.getSlider();
    },
}
</script>

<style scoped lang = "scss">
    @import '../style/notice.scss';
</style>
