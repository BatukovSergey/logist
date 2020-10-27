<template lang='pug'>
  .form
    p {{ clients }}
    Input(:type='"text"' @setValue='client.name = $event' :placeholder='"ФИО"')
    Input(:type='"text"' @setValue='client.type = $event' :placeholder='"Тип"')
    Input(:type='"number"' @setValue='client.pasport = $event' :placeholder='"Паспорт"')
    Input(:type='"text"' @setValue='client.adres = $event' :placeholder='"Адрес"')
    Input(:type='"text"' @setValue='client.company = $event' :placeholder='"Компания"')
    Input(:type='"number"' @setValue='client.INN = $event' :placeholder='"ИНН"')
    Input(:type='"text"' @setValue='client.urAdres = $event' :placeholder='"юр. адрес"')
    Input(:type='"number"' @setValue='client.invoice = $event' :placeholder='"счет"')
    Input(:type='"text"' @setValue='client.bank = $event' :placeholder='"банк"')
    Input(:type='"number"' @setValue='client.BIC = $event' :placeholder='"БИК"')
    button(@click='newClient') Новый клиент
</template>

<script>
import { mapGetters } from 'vuex';
import Input from '../ui/Input'

export default {
  name: "NewClient",
  components: {
    Input
  },
  data () {
    return {
      client: {
        name: '',
        type: '',
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
  computed: {
    ...mapGetters(['clients'])
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