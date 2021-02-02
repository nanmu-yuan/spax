import axios from 'axios'
import $ from 'jquery'
const request = axios.create({
    //baseURL: process.env.VUE_APP_BASEURL,
    timeout: 30000
});
 export  function jsonp(url){
    return new Promise((resolve,reject) =>{
        $.ajax({
            url,
            type:"get",
            dataType:"jsonp",
            jsonp:'jsonpcallback',
            success:function (data) { 
                resolve(responseData(data));
             },
            error:function(data){
                reject(data)
            },
            beforeSend:function(req){
               req.setRequestHeader('pms-token','orderplus')
            },
        })
    })
 }