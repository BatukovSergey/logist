<template lang='pug'>
  #app
    .wrapper
      router-view
    pre {{ clients }}
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "app",
  computed: {
    ...mapGetters(['clients'])
  },
}
</script>
<style lang="scss">
pre {
  font-size: 10px;
}
</style>
