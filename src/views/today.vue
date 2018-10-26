<template>
    <div class="day pt110">
        <div v-html="content">

        </div>
    </div>
</template>

<script>
import axios from 'axios'
import getPartyToday from '../utils/getPartyToday'
import cheerio from 'cheerio'
export default {
    data(){
        return {
            content:''
        }
    },
    methods:{
        getData() {
            let url = `http://211.67.177.56:8080/hhdj/proxy/proxy.do`
            let day = new Date().getDate() 
            let month = new Date().getMonth() + 1

            day = day >= 10 ? day + "" : "0" + day
            month = month >=10 ? month + "" : "0" + month
            axios.get(url,{params:{url:getPartyToday(month,day)}}).then(res=>{
                console.log(res);
               const $ = cheerio.load(res.data)
               this.content =  $('.p1_02').html()
            })
        }
    },
    created() {
        this.getData()
    }
}
</script>

<style  lang = "scss">
.day{
    h1{
        font-weight: 400;
        font-size: 26px;
    }
    h2{
        font-size: 20px;
    }
    p{
       font-size: 18px; 
    }
}
    
</style>
