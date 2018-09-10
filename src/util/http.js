import store from '../store/store'
import axios from 'axios';
import router from '../router'
import qs from 'qs';
axios.defaults.timeout = 5000;

import { Message } from 'element-ui';
/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {

    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
    })
}

/**
 * get 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get(url, params = {}) {

    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                reject(err)
            })
    })
}
// http request 拦截器
// axios.interceptors.request.use(
//     config => {
//         config.headers = {
//             'Content-Type': 'application/x-www-form-urlencoded',
//         };
//         //增发 令牌
//         var token = store.getters.getToken;
//         if (token) {
//             config.headers['token'] = token;
//         }
//         else if (config.url != '/api/FwbServer.ashx?command=CheckLogin') {
//             router.replace({
//                 path: '/login',
//                 query: { redirect: router.currentRoute.fullPath }
//             });
//             return;
//         }
//         if (!config.data) {
//             config.data = [];
//         }
//         config.data = qs.stringify(config.data);
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
//     }
// );
// axios.interceptors.request.use(
//     config => {
//         if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
//             config.headers.Authorization = `token ${store.state.token}`;
//         }
//         return config;
//     },
//     err => {
//         return Promise.reject(err);
//     });
// // http response 拦截器
// axios.interceptors.response.use(
//     response => {
//         switch (response.data.code) {
//             case 401:
//                 store.commit("clearToken");
//                 router.replace({
//                     path: '/login',
//                     query: { redirect: router.currentRoute.fullPath }
//                 });
//                 break;
//             case 500:
//                 break;
//             case 201:  //接口请求成功，但可能存在一些问题，且可由用户修正的问题，则通过通知帮助用户修正问题。
//                 Message.error(response.data.message);
//                 break;
//             case 202:  //请求成功，客户端提示，例如删除数据时候
//                 Message.success(response.data.message);
//                 break;
//             case 203: //请求成功，客户端提示消息，并且路由后退一节，列如修改和新增时
//                 Message.success(response.data.message);
//                 router.go(-1)
//                 break;
//             default:
//
//         }
//         return response.data;
//     },
//     error => {
//         if (error.response) {
//             return Promise.reject(error.response.data);
//         }
//     });
//
// export default axios;