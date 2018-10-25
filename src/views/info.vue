<template>
    <div class="pt1">
        <div class="com-header" fixed>
            <mt-header  title="个人信息">
                <mt-button icon="back" @click="$router.back(-1)" slot="left" ></mt-button>
                <mt-button @click="handleDetil" slot="right">编辑</mt-button>
            </mt-header>
        </div>
        <mt-cell title="姓名"></mt-cell>

    </div>
</template>

<script>
export default {
    methods:{
        handleDetil(){
            console.log(1);
            
        }
    }
}
</script>

<style scoped>

</style>
