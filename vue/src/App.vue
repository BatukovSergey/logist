<template lang='pug'>
  #app
    NavPanel
    router-view
</template>

<script>
import NavPanel from './components/ui/NavPanel'

export default {
  name: "app",
  components: {
    NavPanel
  }
}
</script>
<style lang="scss">
</style>
