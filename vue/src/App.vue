<template lang='pug'>
  #app
    p {{ clients }}
    button(@click='newClient') Новый клиент
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "app",
  components: {},
  computed: {
    ...mapGetters(['clients'])
  },
  methods: {
    newClient () {
      let client = {
        name: '123',
        test: 1
      }
      this.$store.dispatch('newClient', client)
    }
  }
}
</script>
<style lang="scss">
</style>
