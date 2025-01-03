<script>
export default {
  name: "AreaComponent",
  props: {
    bgImgSrc: {
      type: String,
      required: false,
      default: '@img/bg-transparent.png'
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
  &.bg-color-gold{
    background-color: $color-gold;
  }
  &.has-bg-left-center-cover-no-repeat{
    background-color: $color-bg-gray;
    background-image:var( --background-image ) ;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left center;
    position: relative;
    *{
      position: relative;
      z-index: 1;
    }
    &:before{
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $color-bg-gray-alpha;
      z-index: 0;
    }
  }
}

</style>