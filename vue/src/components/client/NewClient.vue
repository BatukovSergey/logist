<template lang='pug'>
  .form
    h2 Новый клиент
    Input(:type='"text"' @setValue='client.name = $event' :placeholder='"ФИО"')
    Toggle(:name='"юр. лицо"' @switch='client.UR = !client.UR')
    Input(:type='"text"' @setValue='client.type = $event' :placeholder='"Тип"')
    Input(:type='"number"' @setValue='client.pasport = $event' :placeholder='"Паспорт"')
    Input(:type='"text"' @setValue='client.adres = $event' :placeholder='"Адрес"')
    Input(:type='"text"' @setValue='client.company = $event' :placeholder='"Компания"')
    Input(:type='"number"' @setValue='client.INN = $event' :placeholder='"ИНН"')
    Input(v-if='client.UR' :type='"text"' @setValue='client.urAdres = $event' :placeholder='"юр. адрес"')
    Input(:type='"number"' @setValue='client.invoice = $event' :placeholder='"счет"')
    Input(:type='"text"' @setValue='client.bank = $event' :placeholder='"банк"')
    Input(:type='"number"' @setValue='client.BIC = $event' :placeholder='"БИК"')
    button(@click='newClient') Новый клиент
</template>

<script>
import Input from '../ui/Input'
import Toggle from '../ui/Toggle'

export default {
  name: "NewClient",
  components: {
    Input,
    Toggle
  },
  data () {
    return {
      client: {
        name: '',
        UR: false,
        contacts: [],
        pasrot: '',
        adres: '',
        company: '',
        INN: '',
        urAdres: '',
        invoice: '',
        bank: '',
        BIC: '',
        corInvoice: '',
        invoices: [],
        contracts: []
      }
    }
  },
  methods: {
    newClient () {
      this.$store.dispatch('newClient', this.client)
    }
  }
}
</script>
<style lang="scss">
</style>