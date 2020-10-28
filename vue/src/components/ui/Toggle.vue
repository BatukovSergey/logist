<template lang="pug">
  .toggle(@click='toggleIt()')
    .toggle_container(:class='{ toggle_contOn: toggle }')
      .toggle_switch(:class='{ toggle_on: toggle }')
    .toggle_name {{ name }}
</template>
<script>
export default {
  name:'Toggle',
  props: ['name'],
  data () {
    return {
      toggle: false
    }
  },
  methods: {
    toggleIt () {
      this.toggle = !this.toggle
      this.$emit('switch', this.toggle)
    }
  },
}
</script>
<style lang="scss">
@import '../../scss/variables.scss';
.toggle {
  cursor: pointer;
  max-width: max-content;
  display: flex;
  align-items: center;
  &:hover {
    .toggle_container {
      border: 1px solid black;
    }
    .toggle_switch {
      background: black;
    }
  }
  &_container {
    transition: all .3s;
    position: relative;
    border: 1px solid $light;
    width: 25px;
    height: 14px;
    border-radius: 2px;
  }
  &_switch {
    border-radius: 1px;
    position: absolute;
    transition: all .3s;
    top: 1px;
    left: 1px;
    width: 10px;
    height: 10px;
    background-color: $dark_gray;
  }
  &_name {
    margin-left: 10px;
  }
  &_on {
    left: calc(100% - 11px);
    background-color: white !important;
  }
  &_contOn {
    border-color: black;
    background: black;
  }
}
</style>