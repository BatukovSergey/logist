<template lang="pug">
  .nav
    .nav_list
      a(
        v-for='(button, i) in buttons'
        :href='button.link'
        @click='fullScreen()'
        ) {{ button.text }}
    .nav_right
      Icon(:name='"notification"' :margin='"0 10px 0 0"')
      .full(@click='fullScreen()')
        Icon(:name='"full"')
</template>
<script>
import Icon from './Icon'

export default {
  name:'NavPanel',
  components: {
    Icon
  },
  data () {
    return {
      buttons: [
        {
          text: 'Заказы',
          icon: '123',
          link: '#'
        },
        {
          text: 'Каледарь',
          icon: '123',
          link: '#'
        },
        {
          text: 'Финансы',
          icon: '123',
          link: '#'
        },
        {
          text: 'Прием заявки',
          icon: '123',
          link: '#'
        },
        {
          text: 'Поставщики',
          icon: '123',
          link: '#'
        },
        {
          text: 'Аналитика',
          icon: '123',
          link: '#'
        },
        {
          text: 'Клиенты',
          icon: '123',
          link: '#'
        },
        {
          text: 'Сотрудники',
          icon: '123',
          link: '#'
        },
      ]
    }
  },
  methods: {
    fullScreen () {
      if (!document.fullscreen) {
        document.documentElement.requestFullscreen()
      } else {
        document.exitFullscreen()
      }
    },
    setValue () {
      this.$emit('setValue', this.value)
    }
  },
}
</script>
<style lang="scss">
@import '../../scss/variables.scss';
.nav {
  // height: 40px;
  width: 100vw;
  padding: 10px 40px;
  border: 1px solid $light;
  margin-bottom: -1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &_list {
    width: 50%;
    display: flex;
    justify-content: space-between;
    a {
      color: $dark-gray;
      text-decoration: none;
      &:hover {
        color: black;
      }
    }
  }
  &_right {
    display: flex;
  }
}
</style>