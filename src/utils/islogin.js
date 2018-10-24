export function islogin(url,vm) {
    if(vm.$store.state.userInfo){
        vm.$router.push(`${url}`)
    }else{
        vm.$router.push(`/login?redirect=${url}`)
    }
}