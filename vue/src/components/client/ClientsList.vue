<template lang='pug'>
  .test
    pre {{ clients }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "ClientsList",
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['clients'])
  }
}
</script>
<style lang="scss">
</style>