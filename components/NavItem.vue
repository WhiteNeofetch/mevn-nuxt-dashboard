<template>
  <nuxt-link class="link" :to="to">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: "NavItem",
  props:{
    to:{
      type:String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/global.scss';
.link{
  padding: 10px;
  margin-bottom: 10px;
  color:$link-color;
}
.nuxt-link-active{
  color:$link-color-active;
}
</style>
