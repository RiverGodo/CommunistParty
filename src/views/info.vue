<template>
    <div class="pt1">
        <div class="com-header" fixed>
            <mt-header  title="个人信息">
                <mt-button icon="back" @click="$router.back(-1)" slot="left" ></mt-button>
                <mt-button @click="handleDetil" slot="right">编辑</mt-button>
            </mt-header>
        </div>
        <mt-cell title="头像">
            <img :src="sliders.header" alt="" style="height:0.84rem">
        </mt-cell>
        <mt-cell title="姓名">
            {{sliders.username}}
        </mt-cell>
        <mt-cell title="身份证">
            {{sliders.idCard}}
        </mt-cell>
        <mt-cell title="家庭住址">
            {{sliders.hometown}}
        </mt-cell>
        <mt-cell title="工作地址">
            {{sliders.address}}
        </mt-cell>
        <mt-cell title="民族">
            {{sliders.nation}}
        </mt-cell>
        <mt-cell title="微信号">
            {{sliders.wxNum}}
        </mt-cell>
        <mt-cell title="QQ号">
            {{sliders.qqNum}}
        </mt-cell>
        <mt-cell title="性别">
            {{sliders.sex == 1 ? '男' : '女'}}
        </mt-cell>
        <mt-cell title="最高学历">
            {{sliders.education}}
        </mt-cell>
        <mt-cell title="职称">
            {{sliders.username}}
        </mt-cell>
        <mt-cell title="薪资水平">
            {{sliders.salary}}
        </mt-cell>
        <mt-cell title="入党时间">
            {{sliders.joinPartyTime}}
        </mt-cell>
        <mt-cell title="党费最后缴纳时间">
            {{sliders.lastPayTime}}
        </mt-cell>
        <mt-cell title="当前身份">
            {{sliders.partyIdentity}}
        </mt-cell>
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
        getSlider() {
            this.$axios.get('/user/userInfo.do').then(res =>{
                console.log(res);
                this.sliders = res.data
            })
        },
        handleDetil(){
            console.log(1);
            this.$router.push('/updateInfo')
            
        }
    },
    created() {
        this.getSlider();
    },
}
</script>

<style scoped>

</style>
