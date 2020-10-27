<template lang="pug">
  .input
    input(v-model='value' :type='type' @input='setValue()' :placeholder='placeholder')
    .input_clear(v-if='value != null' @click='value = null')
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
  input {
    width: 100%;
    border: none;
    background: $light;
    padding: 10px 20px;
    padding-right: 40px;
  }
  &_clear {
    position: absolute;
    transition: all ease 0.3s;
    transform: rotate(90deg);
    cursor: pointer;
    top:8px;
    right: 10px;
    width: 20px;
    height: 20px;
    background-image: url('../../assets/img/icons/cancel.svg');
    &:hover {
      transform: rotate(0deg);
    }
  }
}
</style>