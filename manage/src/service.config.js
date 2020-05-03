const SERVERURL = 'http://localhost:3000/';

const URL = {
    registUser: SERVERURL + 'user/registUser',
    loginUser: SERVERURL + 'user/loginUser',
    exitUser: SERVERURL + 'user/exitUser',
    getTypes: SERVERURL + 'type/getTypes',
    getProductsByType: SERVERURL + 'product/getProductsByType',
    getDetail: SERVERURL + 'product/getDetail',
    addCart: SERVERURL + 'cart/addCart',
    getCart: SERVERURL + 'cart/getCart',
    delCart: SERVERURL + 'cart/delCart',
    addStar: SERVERURL + 'star/addStar',
    getStar: SERVERURL + 'star/getStar',
    delStar: SERVERURL + 'star/delStar',
    delAllStar: SERVERURL + 'star/delAllStar',
    getProductList: SERVERURL + 'product/getProductList',
    submitOrder: SERVERURL + 'order/submitOrder',
    getOrder: SERVERURL + 'order/getOrder',
    successOrder: SERVERURL + 'successorder/successOrder',
    getSuccessOrder: SERVERURL + 'successorder/getSuccessOrder',
    delAllproductList: SERVERURL + 'cart/delAllproductList',
    addAddress: SERVERURL + 'address/addAddress',
    getAddress: SERVERURL + 'address/getAddress',
    delAddress: SERVERURL + 'address/delAddress',
};

export default URL;