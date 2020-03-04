const MOCKURL = 'http://www.liuliu.com/';
const SERVERURL = 'http://localhost:3000/';

const URL = {
    getVarietyItem: MOCKURL + 'getVarietyItem',
    getHotProduct: MOCKURL + 'getHotProduct',
    registUser: SERVERURL + 'user/registUser',
    loginUser: SERVERURL + 'user/loginUser',
    getTypes: SERVERURL + 'type/getTypes',
    getProductsByType: SERVERURL + 'product/getProductsByType',
    getDetail: SERVERURL + 'product/getDetail',
    addCart: SERVERURL + 'cart/addCart',
    getCart: SERVERURL + 'cart/getCart',
    delCart: SERVERURL + 'cart/delCart',
    getProductList: SERVERURL + 'product/getProductList',
};

export default URL;