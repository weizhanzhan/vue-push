
<template>
  <div>
    A页面首页
     <div>
      <button @click="$routerBack()">返回</button>
    </div>
    <ul>
      <li @click="$routerPush('/b',{keepAliveSelf:true})">B</li>
      <li @click="$routerPush('/c')">C</li>
      <li @click="$routerPush('/d')">D</li>
    </ul>
    <input type="text" v-model="msg">
  </div>
</template>

<script>
  export default {
    name:'A',
    data(){
      return {
        msg:''
      }
    }
  }
</script>

<style scoped>

</style>