<template>
    <div class="tabs">
        <router-link  to='/' class="tab-item" :class="{active: $route.name === 'index'}">
            <div class="bottom-detil">
                <i class="iconfont" v-if="$route.name === 'index'" ><img src="../assets/党_red.png"></i>
                <i class="iconfont" v-else ><img src="../assets/党_grey.png"></i>
                <div class="tab-title">
                    首页
                </div>
            </div> 
        </router-link>
        <router-link  to='/notice' class="tab-item" :class="{active: $route.name === 'notice'}">
         <div class="bottom-detil">
            <i class="iconfont" v-if="$route.name === 'notice'" ><img src="../assets/消息_red.png"></i>
            <i class="iconfont" v-else ><img src="../assets/消息_grey.png"></i>
            <div class="tab-title">
                通知早知道
            </div>
         </div>
        </router-link>
        <router-link  to='/myparty' class="tab-item" :class="{active: $route.name === 'myparty'}">
         <div class="bottom-detil">
            <i class="iconfont" v-if="$route.name === 'myparty'" ><img src="../assets/会员_red.png"></i>
            <i class="iconfont" v-else ><img src="../assets/会员_grey.png"></i>
            <div class="tab-title">
                我的党建
            </div>
         </div>
        </router-link>
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    a{
        font-size: 12px;
        color: #666;
    }
    .tabs{
        display: flex;
        align-items: center;
        height: 1.12rem;
        width:100%;
        position:fixed;
        bottom:0;
        z-index:1;
        background-color: #fff;
        .tab-item{
            flex: 1;
            text-align: center;
            height: 100%;
             .bottom-detil{
                padding-top: 0.1rem;
            }
        }
    .active{
            color: #c7000a;
            border-top: 2px solid #c7000a; 
        }
    }
</style>
