const axios = require('axios');


export default ({url,method,headers,data},options={})=>{
    return axios(url,{
        //get post put delete
        method:method||'get',

        headers:headers||{
            'content-type':'application/json'
        },
        
        data,
        ...options
    })
}
