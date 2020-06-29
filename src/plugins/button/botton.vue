<template>
  <div>
    <button
      :class="type"
    >wonderful
    </button>
  </div>
</template>

<script>
export default {
  name: 'vue-zbutton',
  props: {
    type: {
      type: String,
      default: 'defaultBtn'
    }
  }
}
</script>

<style scoped>
button {
  color: #ffffff;
  width: 80px;
  height: 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  /* z-index: 100000000000000; */
}
button.defaultBtn {
  background: #00008e;
}
button.warn {
  background: orangered;
}
button.error {
  background: red;
}
</style>
