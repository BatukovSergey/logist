<template lang="pug">
  .icon(:class='{icon_big: big}' :style='{margin: margin}')
    img(:src='require(`@/assets/img/icons/${name}.svg`)')
</template>
<script>
export default {
  name:'Icon',
  props: ['name', 'big', 'margin']
}
</script>
<style lang="scss">
.icon {
  img {
    width: 20px;
    height: 20px;
  }
}
.icon_big {
  img {
    width: 40px;
    height: 40px;
  }
}
</style>