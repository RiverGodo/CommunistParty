<template>
    <div class="pt1">
        <div class="shlogo"> 
            <img src="../assets/shenhe.png" alt="" class="shenhe">
        </div>
        <div class="shsp">
            <span class="shtitle">正在审核中</span>
        </div>
        <div class="closeBtn" style="width: 60%;" @click="$router.back(-1)">关闭</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '../style/auditStatus.scss';
</style>
