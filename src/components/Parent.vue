<template>
  <div class="parent">
    <h3>这里是父组件</h3>
    <button type="button" @click="clickHandler">修改自己文本</button>
    <button type="button" @click="clickHandler2">修改子组件文本</button>
    <div>Test: {{msg}}</div>
    <Child></Child>
  </div>
</template>

<script>
import Child from './Child'
export default {
  name: 'Parent',
  components: {
    Child
  },
  computed: {
    msg () {
      return this.$store.state.testMsg
    }
  },
  methods: {
    clickHandler () {
      this.$store.commit('changeTestMsg', '父组件修改自己后的文本')
    },
    clickHandler2 () {
      this.$store.commit('changeChildText', '父组件修改子组件后的文本')
    }
  }

}
</script>

<style>

</style>
