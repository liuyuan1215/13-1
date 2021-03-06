import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import Category from '../views/Category.vue'
// import Cart from '../views/Cart.vue'
// import Profile from '../views/Profile.vue'
let Home = ()=> import('../views/Home.vue');
let Category = ()=> import('../views/Category.vue');
let Cart = ()=> import('../views/Cart.vue');
let Profile = ()=> import('../views/Profile.vue');
let Mine = ()=> import('../views/Mine.vue');
let Star = ()=> import('../views/Star.vue');
let Address = ()=> import('../views/Address.vue');
let Order = ()=> import('../views/Order.vue');
let Pay = ()=> import('../views/Pay.vue');
let Orderdetail = ()=> import('../views/Orderdetail.vue');
let AddressEdit = ()=> import('../views/AddressEdit.vue');
import Ajax from '../views/Ajax.vue'
import Detail from '../views/Detail.vue'
import FooterBar from '../components/FooterBar.vue'
import Error from '../views/Error.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // component: Home
    components: {
      default: Home,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/category',
    name: 'category',
    // component: () => import('../views/Category.vue')
    components: {
      default: Category,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/cart',
    name: 'cart',
    // component: () => import('../views/Cart.vue')
    components: {
      default: Cart,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/mine',
    name: 'mine',
    components: {
      default: Mine,
      'footer-bar': FooterBar
    },
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/star',
    name: 'star',
    components: {
      default: Star,
      'footer-bar': FooterBar
    }
  },
  {
    path: '/address',
    name: 'address',
    component: Address
  },
  {
    path: '/addressedit',
    name: 'addressedit',
    component: AddressEdit
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },
  {
    path: '/pay',
    name: 'pay',
    component: Pay
  },
  {
    path: '/orderdetail',
    name: 'orderdetail',
    component: Orderdetail
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
    // component: () => import('../views/Profile.vue')
    // components: {
    //   default: Profile,
    //   'footer-bar': FooterBar
    // }
  },
  {
    path: '/ajax',
    name: 'ajax',
    component: Ajax
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '*',
    component: Error
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  }
]

const router = new VueRouter({
  routes
})

export default router
