<template>
  <div class="hello">
    <vue-zmsg ref="msg"></vue-zmsg>
    <div @click="handleClick">
      <vue-zbutton type='error' class="button"></vue-zbutton>
    </div>
    <vue-zbutton type='warn' class="button"></vue-zbutton>
    <vue-zbutton class="button"></vue-zbutton>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleClick() {
      this.$nextTick(() => {
        this.$refs.msg.msgPlugin('你好呀')
      })
    }
  },
  mounted () {
    console.log(this.$msg)
    this.$myMethods()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
  margin: 10px;
}
</style>
