<template>
    <div class="scoreitem pt1">
        <img src="../assets/bgscore.png" alt="" class="header">
        <span id="" style="font-size: 16px; position: absolute; top: 18%; left: 50%; color: white; transform: translate(-50%, -50%);">
						{{totalScore}}
		</span>
        <div class="scoremt">
            <mt-cell title="积分明细"  is-link :to="{name:'scoredetail'}">
                <img slot="icon" src="../assets/gerenxinxi.png" class="scoreimg"> 
            </mt-cell>
        </div>
        <div class="middle-jifen">
            <span class="jifen">积分规则</span>
            <img src="../assets/question.png" alt="">
        </div>
        <div >
            <mt-cell title="登陆APP" class="scorecell" value='5'></mt-cell>
            <mt-cell title="完善个人信息" class="scorecell" value='2'></mt-cell>
            <mt-cell title="查看积分" class="scorecell" value='1'></mt-cell>
            <mt-cell title="按时交纳党费" class="scorecell" value='10'></mt-cell>
            <mt-cell title="查看通知" class="scorecell" value='2'></mt-cell>
            <mt-cell title="了解学院工作动态" class="scorecell" value='5'></mt-cell>
            <mt-cell title="上交思想汇报经审核通过" class="scorecell" value='5'></mt-cell>
            <mt-cell title="主动学习相关文件" class="scorecell" value='10'></mt-cell>
            <mt-cell title="认真撰写心得总结并上交，经审核通过" class="scorecell" value='5'></mt-cell>
            <mt-cell title="提交个人总结，并参与评议" class="scorecell" value='2'></mt-cell>
            <mt-cell title="积极参与互动" class="scorecell" value='5'></mt-cell>
            <mt-cell title="学习党建知识" class="scorecell" value='5'></mt-cell>
            <mt-cell title="学习党史" class="scorecell" value='10'></mt-cell>
            <mt-cell title="创先争优事迹" class="scorecell" value='10'></mt-cell>
            <mt-cell title="学党章，学习近平总书记系列讲话" class="scorecell" value='10'></mt-cell>
            <mt-cell title="用镜头记录两学一做过程中令人感动的人和事" class="scorecell" value='3'></mt-cell>
            <mt-cell title="关注并积极参与特色活动" class="scorecell" value='5'></mt-cell>
            <mt-cell title="制度化、常态化建设" class="scorecell" value='5'></mt-cell>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            totalScore:''
        }
    },
    methods:{
        getInfo(){
            this.$axios.get('/user/userInfo.do').then(res=>{
                console.log(res);
                this.totalScore = res.data.totalScore
            })
        }
        
    },
    created(){
        this.getInfo()
    }
}
</script>

<style scoped lang = "scss">
@import '../style/score.scss'; 
</style>
