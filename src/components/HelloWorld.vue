<template>
  <div class="hello">
    <vue-zmsg ref="msg"></vue-zmsg>
    <vue-zbutton type='error' @click="this.handleClick"></vue-zbutton>
    <vue-zbutton type='warn'></vue-zbutton>
    <vue-zbutton></vue-zbutton>
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
