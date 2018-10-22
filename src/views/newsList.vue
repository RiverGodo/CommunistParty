<template>
    <div>
        <div class="cell" 
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="isOffdown"
        infinite-scroll-distance="0">
            <router-link to="/">
                <mt-cell v-for="item in sliders" :key="item.id" >
                    <div class="detail-img">
                        <img slot="icon" :src = "item.pic" class="laba">
                    </div>
                    <div>
                    <div class="desclist ">
                        {{item.title}}
                    </div>
                    <div class="desc-time">
                        {{item.currentTime}}
                    </div>
                    </div>
                    
                    <span class="eyes">
                        <img src="../assets/12-eye.png" alt="" class="eyes-icon">
                        <li class="lili">{{item.count}}</li>
                    </span>
                </mt-cell>
            </router-link>
            <span class="nodesc">没有数据了</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            type:'',
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
              axios.get(`http://211.67.177.56:8080/hhdj/news/newsList.do?page=${this.pn}&rows=10&type=${this.type}`).then(res =>{
                this.sliders = [...this.sliders , ...res.data.rows]
                this.isOffdown = false
                if(res.data.rows.length == 0){
                        this.isOffdown = true
                    }
            })
        },
        
    },
     created() {
         switch(this.$route.name){
             case 'newseye':
             this.type = 0
             break;
             case 'oneclick':
             this.type = 3
             break;
             case 'showidentity':
             this.type = 5
             break;
             case 'study':
             this.type = 8
             break;
             case 'anytimestudy':
             this.type = 6
             break;
             case 'System':
             this.type = 4
             break;
             case 'activity':
             this.type = 1
             break;
             default :
             break;
         }
        this.getSlider();
    },
}
</script>

<style  lang = "scss">
    @import '../style/newsList.scss';
</style>
