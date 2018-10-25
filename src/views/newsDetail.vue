<template>
    <div>
    <div class="com-header" fixed>
      <mt-header  :title="title">
          <mt-button icon="back" @click="$router.back(-1)" slot="left" >

          </mt-button>
      </mt-header>
    </div>
        <div class="detail">
            <div class="title" v-text="newDetail.title">

            </div>
            <div class="content" v-html="newDetail.content">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            newDetail:{},
            title:''
        }
    },
    methods:{
        getnewdata(){
            this.$axios.get(`news/newsContent.do?newsId=${this.$route.params.id}`).then(res=>{
                this.newDetail = res.data
    
                switch(res.data.type){
                        case 8:
                            this.title = '政治学习';
                            break;
                        case 7:
                            this.title = '随时随地拍';
                            break;
                        case 6:
                            this.title = '随时随地学';
                            break;
                        case 5:
                            this.title = '党员亮身份';
                            break;
                        case 4:
                            this.title = '制度建设';
                            break;
                        case 3:
                            this.title = '党建一点通';
                            break;
                        case 2:
                            this.title = '通知早知道';
                            break;
                        case 1:
                            this.title = '特色活动';
                            break;
                        case 0:
                            this.title = '信工新闻眼';
                            break;
                        default:
                            break;
                    }
            })
        }

    },
    created(){
        this.getnewdata()
    }
}
</script>

<style  lang = "scss">
    @import '../style/nesDetail.scss';
</style>
