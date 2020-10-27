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
    width: 30px;
    height: 16px;
    border-radius: 10px;
    padding: 2px;
  }
  &_switch {
    transition: all .3s;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: $dark_gray;
  }
  &_name {
    margin-left: 10px;
  }
  &_on {
    width: 100%;
    background-color: black;
  }
  &_contOn {
    border-color: $dark_gray;
  }
}
</style>