<script>
export default {
  name: "HeroHeaderSlot",
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      default: 'Image description',
    },
    cssClass: {
      type: String,
      required: false,
      default: ""
    }
  },
};
</script>

<template>
  <div :class="['component-HeroHeaderSlot', cssClass]">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="component-holder">
            <div class="_left">
              <img :src="imgSrc" :alt="imgAlt">
            </div>
            <div class="_right">
              <div class="_content">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.component-HeroHeaderSlot {
  padding: 2rem 0;
  background:
      linear-gradient(
              to bottom,
              $color-bg-gold,
              $color-bg-gold-2,
      );
  .component-holder {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    @media(min-width:$break-point-tablets-landscape){
      flex-direction: row;
      min-height:500px;
    }
    ._left {
      width: 100%;
      text-align: center;
      box-sizing: border-box;
      @media(min-width:$break-point-tablets-landscape){
        width: 45%;
        position: relative;
      }
      img {
        display: block;
        max-width: 350px;
        height: auto;
        margin: auto;
        border-radius: 50%;
        width: 100%;
        @media(min-width:$break-point-tablets-landscape){
          img {
            max-width: 500px;
          }
        }
      }

    }
    ._right {
      width: 100%;
      text-align: center;
      position: relative;
      display: flex;
      box-sizing: border-box;
      @media(min-width:$break-point-tablets-landscape){
        width: 55%;
        text-align: left;
      }
      ._content{
        align-self: center;
        width: 100%;
        h1{
          font-family: $font-family-playfair;
          font-size: $font-size-headline-big;
          font-weight: 600;
          line-height: 70px;
          color: $color-accent;
        }
      }
    }
  }
  &.center-mode-ever{
    .component-holder {
      display: flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      text-align: center;
      @media(min-width:$break-point-tablets-landscape){
        flex-direction: column;
      }
      ._left {
        width: 100%;
        text-align: center;
        box-sizing: border-box;
        @media(min-width:$break-point-tablets-landscape){
          width: 100%;
        }
        img {
          max-width: 250px;
          @media(min-width:$break-point-tablets-landscape){
            max-width: 250px;
          }
        }

      }
      ._right {
        width: 100%;
        text-align: center;
        position: relative;
        display: flex;
        box-sizing: border-box;
        @media(min-width:$break-point-tablets-landscape){
          width: 100%;
          text-align: cenetr;
        }
        ._content{
          align-self: center;
          text-align: center;
        }
      }
    }
  }
  &.use-in-homepage{
    .component-holder{
      ._left {
        img {
          border-radius:0;
        }
        @media(min-width:$break-point-tablets-landscape){
          img {
            position: relative;
            z-index: 1;
            display: block;
            max-width: 700px;
            height: auto;
            left: 50%;
            margin-left:-350px;
            width:100%;
            margin-bottom: -100px;
          }
        }
      }
    }
  }
  &.use-in-coach-page{
    padding: 4rem 1rem;
    .component-holder{
      @media(min-width:$break-point-tablets-landscape){
        min-height:0;
      }
      ._left {
        img {
          display: block;
          max-width: 250px;
          margin: 0;
          height: auto;
          border-radius: $border-radius-base;
          width: 100%;
          padding: $size-base-1;
          border: solid $size-base-3 $color-white;
          box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.1);
          @media(min-width:$break-point-tablets-landscape){
            margin: auto;

          }
        }
      }
    }
  }
  &.bg-is-gold-light{
    background: $color-bg-gold-2;
  }

}
</style>
