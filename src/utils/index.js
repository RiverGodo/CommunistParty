import axios from 'axios'
import qs from 'qs'//将json字符串格式改为form-data格式

const instance = axios.create({
    baseURL:'/api',
    timeout:15000,
})

const xhr = {
    get(url,data,config) {
        return new Promise((resolve,rejects) => {
            instance.get(url, {params:data,...config}).then(res =>{
                resolve(res.data)
            }).catch(err =>{
                reject(err)
            })
        })
    },
    fetch(url,data,config,methods){
        return new Promise((resolve,rejects) => {
            let queryData = qs.stringify(data)
            console.log('处理后的数据',queryData)
            instance[methods](url, queryData, config).then(res =>{
                resolve(res.data)
            }).catch(err =>{
                reject(err)
            })
        })
    },
    post(url,data,config) {
        return this.fetch(url,data,config,'post')
    },
    put(url,data,config){
        return this.fetch(url,data,config,'put')
    }
}

export const  $axios = xhr