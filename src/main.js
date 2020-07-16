/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const router = new VueRouter({
  mode:'history',
  routes:[
    { path:'/', name:'A',component:()=> import('./view/a.vue')},
    { path:'/b',name:'B',component:()=> import('./view/b.vue')},
    { path:'/c',name:'C',component:()=> import('./view/c.vue')},
    { path:'/d',name:'D',component:()=> import('./view/d.vue')}
  ]
})

export const RouterStore = Vue.observable({
  route:{
    currentRoute:null,
    direction:'forward',
    keepAliveSelf:false,
   
  },
  keepAliveRoutes:[],

  pickerRoute:function(route){
    this.route = route
    if(route.keepAliveSelf){
      this.pushAlive(route.name)
    }else{
      this.removeAlive(route.name)
    }
  },
  findAliveRouteIndex(name){
    return this.keepAliveRoutes.findIndex(item=>item===name)
  },
  pushAlive:function(name){
    const index = this.findAliveRouteIndex(name)
    if(index === -1){
      this.keepAliveRoutes.push(name)
    }
  },

  removeAlive:function(name){
    const index = this.findAliveRouteIndex(name)
    if(index !== -1){
      this.keepAliveRoutes.splice(index,1)
    }
  }
})


let routeInfo = {}
Vue.prototype.$routerBack = function(path,query){
  const init =  { direction:'back',keepAliveSelf:false}
  routeInfo = Object.assign(init,query)

  if(path){
    path!==RouterStore.route.currentRoute.path&& router.push(path)
  }else{
    router.back()
  }
  
}
Vue.prototype.$routerPush = function(path,query){
  const init =  { direction:'forward',keepAliveSelf:false}
  routeInfo = Object.assign(init,query)
  router.push(path)
}

router.beforeEach((to, from, next) => {
  RouterStore.pickerRoute({
    ...routeInfo,
    name:from.name,
    currentRoute:to
  })
  next()
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
