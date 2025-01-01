<script>
export default {
  name: "AreaComponent",
  props: {
    bgImgSrc: {
      type: String,
      required: false,
      default: '@assets/images/bg-transparent.png'
    },
    cssClass: {
      type: String,
      required: false,
      default: ""
    }
  },
}
</script>

<template>
  <div :class="['component-holder-AreaComponent', cssClass]" :style="`--background-image: url(${bgImgSrc});`">
    <slot></slot>
  </div>

</template>

<style scoped lang="scss">

.component-holder-AreaComponent{
  box-sizing: border-box;
  padding: 4rem 1rem;
  background-color: $color-bg-gray ;
  background-image: var(--background-image);
  background-size: auto;
  background-repeat: repeat;
  background-position: left top;
  &.bg-color-white{
    background-color: $color-white;
  }
}

</style>