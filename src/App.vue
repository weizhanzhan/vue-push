<template>
  <div id="app">
    <div style="height:200px">
      <keep-alive :include="RouterStore.keepAliveRoutes">
        <router-view></router-view>   
      </keep-alive>
    </div>
    <div>
      <ul>
        <li>direction:{{RouterStore.route.direction}}</li>
        <li>keepAliveSelf:{{RouterStore.route.keepAliveSelf}}</li>
        <li>toBack:{{RouterStore.route.toBack}}</li>
        <li>defaultBackPath:{{RouterStore.route.defaultBackPath}}</li>
        <li>name:{{RouterStore.route.name}}</li>
      </ul>
      <p>缓存的有</p>
      <div>
        {{RouterStore.keepAliveRoutes}}
      </div>
    </div>
  </div>
</template>

<script>
import { RouterStore } from './main'
export default {
  name: 'App',
  data(){
    return{
      RouterStore
    }
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
