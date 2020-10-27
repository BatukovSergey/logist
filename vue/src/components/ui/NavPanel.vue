<template lang="pug">
  .nav
    .nav_list
      a(
        v-for='(button, i) in buttons'
        :href='button.link'
        ) {{ button.text }}
</template>
<script>
export default {
  name:'NavPanel',
  data () {
    return {
      buttons: [
        {
          text: '123',
          icon: '123',
          link: '123'
        },
        {
          text: '123',
          icon: '123',
          link: '123'
        },
        {
          text: '123',
          icon: '123',
          link: '123'
        },
        {
          text: '123',
          icon: '123',
          link: '123'
        },
      ]
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
.nav {
  height: 40px;
  width: 100vw;
  padding: 10px;
  border: 1px solid $light;
  margin-bottom: -1px;
  &_list {
    width: 50%;
    display: flex;
    justify-content: space-between;
    a {
      color: $dark-gray;
      text-decoration: none;
      &:hover {
        color: black;
      }
    }
  }
}
</style>