<template lang='pug'>
  .form
    h2 Регистрация (test)
    Input(:type='"text"' @setValue='user.lastName = $event' :placeholder='"Фамилия"')
    Input(:type='"text"' @setValue='user.name = $event' :placeholder='"Имя"')
    Input(:type='"text"' @setValue='user.patronymic = $event' :placeholder='"Отчество"')
    Input(:type='"email"' @setValue='user.email = $event' :placeholder='"Email"')
    Input(:type='"password"' @setValue='user.password = $event' :placeholder='"Пароль"')
    button(@click='newUser') Регистрация
</template>

<script>
import Input from '../ui/Input'
import Toggle from '../ui/Toggle'

export default {
  name: "NewUser",
  components: {
    Input,
    Toggle
  },
  data () {
    return {
      user: {
        name: '',
        lastName: '',
        patronymic: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    newUser () {
      alert(JSON.stringify(this.user))
      // this.$store.dispatch('newUser', this.user)
    }
  }
}
</script>
<style lang="scss">
</style>