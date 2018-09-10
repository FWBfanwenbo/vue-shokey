import * as types from './mutation-types';
const mutations={
    [types.SET_TRYLIST](state,trylist){
        state.trylist=trylist;
     },
    [types.SET_TOKEN](state,token){
        state.token=token;
    },
    [types.SET_PRODUCT_LIST](state,list){
        state.productList=list;
    }
}
export default mutations