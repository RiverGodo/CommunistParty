<template>
    <div class="uppass pt1"> 
        <form class="login-from">
            旧密码: <input type="text" v-model="oldPwd">
            新密码: <input type="text" v-model="newPwd">
            确认新密码: <input type="text" v-model="insertPwd">
            <input type="button" name="" value="确定" class="button-assertive" @click="handleUppwd">
        </form>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data(){
        return{
            oldPwd:'',
            newPwd:'',
            insertPwd:''
        }
    },
    methods:{
        handleUppwd(){
            if(this.oldPwd&&this.newPwd&&this.insertPwd){
                if(this.newPwd == this.insertPwd){
                    this.updatapwd()
                }else{
                    Toast('两次密码不一致');
                }
            }else{
                Toast('请输入密码');
            }
        },
        updatapwd(){
            this.$axios.get(`user/updatePwd.do`,{newPwd:this.newPwd,oldPwd:this.oldPwd}).then(res=>{
                if(res.code == 1){
                    Toast(res.msg);
                    this.$router.push('/myparty')
                }else{
                    Toast(res.msg);
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../style/uppass.scss';
</style>
