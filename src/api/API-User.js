// import request from './request';
const axios = require('axios');
const apiUrl = 'https://vue-course-api.hexschool.io';

export default class UserAPI {

    static login(n){
      return  axios({
            method:'POST',
            url:`${ apiUrl }/admin/signin`,
            data:n,
        })
    }
    
    static logOut(){
        return  axios({
            method:'POST',
            url:`https://vue-course-api.hexschool.io/logout`,
        })
    }

}