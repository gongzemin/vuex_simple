<template>
  <div class="child">
     <h3>这里是子组件</h3>
     <div>childText: {{ msg }}</div>
      <button type="button" @click="clickHandler">修改父组件文本</button>
      <button type="button" @click="clickHandler2">修改自己文本</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
