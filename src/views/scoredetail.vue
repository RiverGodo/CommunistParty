<template>
    <div class="jifenmingxi pt110"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="isOffdown"
        infinite-scroll-distance="0"
    >
        <mt-cell :title="item.typeName" class="scdecell" v-for="item in sliders" :key="item.id">
            +{{item.singleDesc}}  
            <span class="detailspan">{{item.timeFormat}}</span>
        </mt-cell>
        <span class="nodesc">没有数据了</span>
        
    </div>
</template>

<script>
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
            this.$axios.get(`integral/integralList.do?page=${this.pn}&rows=10`).then(res=>{
                this.sliders = [...this.sliders , ...res.rows]
                this.isOffdown = false
                if(res.rows.length == 0){
                        this.isOffdown = true
                    }
            })
        }
    },
    created(){
        this.getSlider()
    }
}
</script>

<style lang = "scss">
    @import '../style/scoredetail.scss';
</style>
