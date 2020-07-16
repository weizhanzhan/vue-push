<template>
  <div>
    C页面
     <div>
      <button @click="$routerBack()">返回</button>
    </div>
    <ul>
      <li @click="$routerPush('/d',{keepAliveSelf:true})">D</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'C',
  }
</script>

<style scoped>

</style>