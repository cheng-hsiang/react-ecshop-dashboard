const axios = require('axios');
const apiUrl = 'https://vue-course-api.hexschool.io';
const dbName = `momonoshior`;

const testapi = 'https://vue-course-api.hexschool.io/api/momonoshior/products?page=1';

export default class ProductAPI {

    static getProduct(page = 1){
        return  axios({
            method:'GET',
            url:`${apiUrl}/api/${dbName}/products/?page=${page}`,
        })
    }

    static addProduct(){

    }

    static updateProduct(){

    }

    static deleteProduct(){

    }

    static uploadFile(){

    }
}