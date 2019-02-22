<template>
  <div class="parent">
    <h3>这里是父组件</h3>
    <button type="button" @click="clickHandler">修改自己文本</button>
    <button type="button" @click="clickHandler2">修改子组件文本</button>
    <div>Test: {{msg}}</div>
    <child></child>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
