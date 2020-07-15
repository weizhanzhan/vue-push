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
    direction:'forward',
    keepAliveSelf:false,
    toBack:null,
    defaultBackPath:null
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
Vue.prototype.$routerBack = function(query){
  
  const init =  { direction:'back',keepAliveSelf:false,toBack:null}
  routeInfo = Object.assign(init,query)
  if(routeInfo.toBack){
    router.go()
  } else{
    router.back()
  }
}
Vue.prototype.$routerPush = function(path,query){
  const init =  { direction:'forward',keepAliveSelf:false,toBack:null}
  routeInfo = Object.assign(init,query)
  router.push(path)
}

router.beforeEach((to, from, next) => {
 
  RouterStore.pickerRoute({
    ...routeInfo,
    defaultBackPath:from.path,
    name:from.name
  })
  next()
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
