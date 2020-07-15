<template>
  <div>
    B页面
    <div>
      <button @click="$routerBack()">返回</button>
    </div>
    <ul>
      <li @click="$routerPush('/c',{keepAliveSelf:true})">C</li>
      <li @click="$routerPush('/d')">D</li>
    </ul>
      <input type="text" v-model="msg">
  </div>
</template>

<script>
  export default {
    name:'B',
     data(){
      return {
        msg:''
      }
    }
  }
</script>

<style scoped>

</style>