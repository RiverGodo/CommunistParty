<template>
  <div class="pt110">
       <div class="redact" @click="update">
            保存
        </div>
        <div class="content">
            <div class="content-item">
                <span>头像</span>
                <label>
                    <input style="display:none"  type="file" @change="handleupimg" >
                    <div class="flr">
                        <img :src="imgurl" alt="">
                    </div>
                </label> 
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>姓名</span> 
                <div class="flr">
                    <input type="text" v-model="userinfo.username"  >
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>身份证</span>
                <div class="flr">
                    {{userinfo.idCard}}
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>家庭住址</span>
                <div class="flr">
                    <input type="text"  v-model="userinfo.hometown">
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>工作地址</span>
                <div class="flr">
                    <input type="text"  v-model="userinfo.address">
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>民族</span>nation
                <div class="flr">
                    <input type="text"  v-model="userinfo.nation">
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>微信号</span>
                <div class="flr">
                    <input type="text"  v-model="userinfo.wxNum">
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>qq号</span>
                <div class="flr">
                    <input type="text" v-model="userinfo.qqNum">
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>性别</span>
                <div class="radio flr">
                    <input class="radio-ys" value="1" name="sex" type="radio" v-model="userinfo.sex">男
                    <input class="radio-ys" value="2" name="sex" type="radio"  v-model="userinfo.sex">女
                </div>
                <!-- <div class="flr">{{userinfo.sex == 1 ? '男' : '女'}}</div> -->
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>最高学历</span>
                <div class="flr">
                    <input type="text" v-model="userinfo.education">
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>职称</span>
                <div class="flr">
                    <input type="text" v-model="userinfo.jobRank">
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>薪资水平</span>
                <div class="flr">
                    <input type="text" v-model="userinfo.salary">
                </div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>入党时间</span>
                <mt-datetime-picker
                    ref="picker1"
                    type="date"
                    v-model="joinTime"
                    @confirm="updatejoinTime">
                </mt-datetime-picker>
                <div class="flr" @click="openPicker1">{{userinfo.joinPartyTime}}</div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>党费最后缴纳时间</span>
                <mt-datetime-picker
                    ref="picker2"
                    type="date"
                    v-model="lastTime"
                    @confirm="updateLastTime">
                </mt-datetime-picker>
                <div class="flr" @click="openPicker2">{{userinfo.lastPayTime}}</div>
            </div>
        </div>
        <div class="content">
            <div class="content-item">
                <span>当前身份</span>
                <div class="flr">
                    <select name="partyStatus" v-model="userinfo.partyStatus">
                        <option value="0">积极分子</option>
                        <option value="1">预备党员</option>
                        <option value="2">党员</option>
                    </select>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'mint-ui'
import { handletime } from '@/utils'
export default {
  data(){
    return{
        userinfo:'',
        joinTime:'',
        lastTime:'',
        imgurl:'', //图片img 修改后是base64格式
        isupdateimg:false
    }
  },
  methods:{
            // 开启入党时间日期框
            openPicker1() {
                this.$refs.picker1.open();
            },
            // 点击入党时间日期框内确认按钮
            updatejoinTime(){
                this.userinfo.joinPartyTime = handletime(this.joinTime)
            },
             // 开启党费缴纳日期框
            openPicker2() {
                this.$refs.picker2.open();
            },
            // 点击党费缴纳日期框内确认按钮
            updateLastTime(){
                this.userinfo.lastPayTime = handletime(this.lastTime)
            },
            // 修改数据
            update(){
                let obj ={
                    username:this.userinfo.username,
                    hometown:this.userinfo.hometown,
                    address:this.userinfo.address,
                    nation:this.userinfo.nation,
                    wxNum:this.userinfo.wxNum,
                    qqNum:this.userinfo.qqNum,
                    sex:this.userinfo.sex,
                    education:this.userinfo.education,
                    jobRank:this.userinfo.jobRank,
                    salary:this.userinfo.salary,
                    joinPartyTime:this.userinfo.joinPartyTime,
                    lastPayTime:this.userinfo.lastPayTime,
                    partyStatus:this.userinfo.partyStatus,
                }
                if(this.isupdateimg){
                    obj.header = this.userinfo.header
                }
                this.$axios.post(`/user/modifyInfo.do`,obj).then( res => {
                    console.log(res)
                    Toast(res.msg)
                    if(res.code == 1){
                        setTimeout(() => {
                            this.$router.push(`/myparty`)
                        }, 300);
                    }
                })
            },
            
            // 姚哥修改 上传图片
             handleupimg(e){
                let _this = this
                let myFile1 = e.target.files[0];
                var reader = new FileReader();  
                reader.onload = function (evt) {  
                    let base64Data = evt.target.result
                    _this.imgurl = base64Data
                    const reg = /data:image\/png;base64,/
                    let sendData = base64Data.replace(reg, '')
                    _this.$axios.post(`/image/uploadBase64.do`,{myFile:sendData}).then (res => {
                        console.log(res)
                    _this.userinfo.header = res.url
                    _this.isupdateimg = true;
                    })
                };  
                reader.readAsDataURL(myFile1); 
            }
            
        },
        
        created(){
            this.userinfo = this.$store.state.userInfo
            this.imgurl = this.$store.state.userInfo.header
        },
}
</script>

<style scoped lang = "scss">
  .redact{
    position: fixed;
    width: 1.1rem;
    height: 1.11rem;
    line-height: 1.1rem;
    right: 0;
    top: 0;
    z-index: 998;
    font-size: 14px;
    color: #fff;
    text-align: center;
}

  /deep/ .content-item{
    padding: 0 0.2rem;
    height: 0.9rem;
    line-height: 0.9rem;
    font-size: 13px;
    color: #333;
    border-bottom: 1px solid #e8e8e8;
    img{
        display: block;
        width: 0.6rem;
        height: 0.6rem;
        margin: 0.15rem auto;
    }
    input{
        display: block;
        line-height: 0.9rem;
        text-align: right;
        color: #333;
        border: none;
        outline: none;
        background: #fff;
    }
    select{
        display: block;
        height: 0.9rem;
        color: #333;
        border: none;
        outline: none;
        background: #fff;
    }
}
.radio{
    /deep/ .radio-ys{
        display: inline-block;
        vertical-align: middle;
        margin-right: 0.1rem;
    }
}
.sanjiao{
    float: right;
    margin: 0.4rem 0 0 0.2rem;
    width: 0;
    height: 0; 
    border: 7px solid transparent;
    border-top: 7px solid #333;
}

</style>
