<template lang="pug">
  .input
    input(v-model='value' :type='type' @input='setValue()' :placeholder='placeholder')
    .input_clear(@click='value = null')
</template>
<script>
export default {
  name:'Input',
  props: ['placeholder', 'type'],
  data () {
    return {
      value: null
    }
  },
  methods: {
    setValue () {
      this.$emit('setValue', this.value)
    }
  },
}
</script>
<style lang="scss">
@import '../../scss/variables.scss';
.input {
  position: relative;
  margin: 10px;
  input {
    width: 100%;
    border: none;
    background: $light;
    border-radius: 10px;
    padding: 10px 20px;
  }
  &_clear {
    position: absolute;
    top:0;
    right: 0;
    width: 20px;
    height: 20px;
    background: red;
  }
}
</style>