<template lang='pug'>
  #app
    p {{ clients }}
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "app",
  components: {},
  computed: {
    ...mapGetters(['clients'])
  }
}
</script>
<style lang="scss">
</style>
