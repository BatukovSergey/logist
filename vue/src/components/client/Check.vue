<template lang='pug'>
  .check
    h2 Сохранить?
    button(@click='check(false)') Отмена
    button(@click='check(true)') Да
</template>

<script>
export default {
  name: "Check",
  data () {
    return {
    }
  },
  methods: {
    check (ok) {
      this.$emit('check', ok)
    }
  }
}
</script>
<style lang="scss">
</style>