<template lang='pug'>
  #app
    .wrapper
      NavPanel
      router-view
    //- pre {{ clients }}
</template>

<script>
import { mapGetters } from 'vuex';
import NavPanel from './components/ui/NavPanel'

export default {
  name: "app",
  components: {
    NavPanel
  },
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
