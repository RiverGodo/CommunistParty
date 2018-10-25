<template>
    <div class="pt1">
        <img src="../assets/liangxueyizuo.jpg" class="twostudy">
        <div class="main-menu2">
            <div class="row2">
                <router-link to="/study" class="menu-item2">
                    <div >
                        <img src="../assets/icon1.png" class="life-bloc">
                    </div>
                    <div class="menu-btn-title2">
                        政治学习
                    </div>
                </router-link>
            </div>
            <div class="row2">
                <router-link to="/auditStatus/0/1"  class="menu-item2">
                    <div>
                        <img src="../assets/icon2.png" class="life-bloc">
                    </div>
                    <div class="menu-btn-title2">
                      思想汇报
                    </div>
                </router-link>
            </div>
            <div class="row2">
                <router-link to="/auditStatus/0/2"  class="menu-item2">
                    <div>
                        <img src="../assets/icon3.png" class="life-bloc">
                    </div>
                    <div class="menu-btn-title2">
                      心得总结
                    </div>
                </router-link>
            </div>
            <div class="row2">
                <router-link to="/LifeChoice"  class="menu-item2">
                    <div>
                        <img src="../assets/icon4.png" class="life-bloc">
                    </div>
                    <div class="menu-btn-title2">
                      民主评议
                    </div>
                </router-link>
            </div>
            <div class="row2">
                <router-link to="/findorg"  class="menu-item2">
                    <div>
                        <img src="../assets/icon5.png" class="life-bloc" >
                    </div>
                    <div class="menu-btn-title2" >
                      流动党员找组织
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped >
    @import "../style/life.scss";
</style>
