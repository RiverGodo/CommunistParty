<template>
    <div class="cell-photo" 
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="isOffdown"
        infinite-scroll-distance="0"  
    >
        <div class="desc-photo">
            <div v-for="item in sliders" :key="item.id" class="notice-photo" >
                <div @click="handleNewDetail(item.newsId)">
                    <img :src="item.pic" class="img-photo">
                    <li class="span-photo">{{item.title}}</li>
                </div>  
            </div>
        </div>
              <span class="nodesc">没有数据了</span>
         
    </div>
</template>

<script>
export default {
    data(){
        return{
            sliders:[],
            pn:1,   
            isOffdown:true
        }
    },
    methods:{
        loadMore() {
            this.pn = this.pn+1
            this.getSlider()
        },
        getSlider(){
              this.$axios.get(`news/newsList.do?page=${this.pn}&rows=10&type=7`).then(res =>{
                this.sliders = [...this.sliders , ...res.rows]
                this.isOffdown = false
                if(res.rows.length == 0){
                        this.isOffdown = true
                    }
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

<style lang = "scss">
    @import '../style/anytimephoto.scss';
</style>
