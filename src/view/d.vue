<template>
  <div>
    D页面
    <div>
      <button @click="$routerBack()">返回</button>
      <button @click="$routerBack({toBack:'a'})">回到A</button>
    </div>
  </div>
</template>

<script>
  export default {
    name:'A',
  }
</script>

<style scoped>

</style>