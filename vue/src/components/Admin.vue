<template lang="pug">
  .wrapper
    NewUser
    NewClient
</template>
<script>
import NewClient from './client/NewClient'
import NewUser from './user/NewUser'

export default {
  name:'Admin',
  components: {
    NewUser, NewClient
  }
}
</script>
<style lang="scss">