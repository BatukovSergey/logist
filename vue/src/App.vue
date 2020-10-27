<template lang='pug'>
  #app
    .wrapper
      NavPanel
      router-view
      .clients
        .client(v-for='(client, i) in clients')
          span {{ client.name }}
          span {{ client.UR }}
          span {{ client.pasport }} 
          span {{ client.adres }}
          span {{ client.company }}
          span {{ client.INN }}
          span {{ client.urAdres }}
          span {{ client.invoice }}
          span {{ client.bank }}
          span {{ client.BIC }}
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
.clients {
  width: 100vw;
  display: flex;
}
.client {
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-size: 10px;
  border: 1px solid gray;
}
</style>
