<template>
  <div class="component-holder-HeroHeader" :style="`--background-image: url(${bgImgSrc});`">
    <div class="hero-header-holder" >
      <div class="_left">
        <img :src="imgSrc" :alt="imgAlt">
      </div>
      <div class="_right">
        <div class="_content">
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
          <h2>{{ subtitle }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroHeader',
  props: {
    bgImgSrc: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      default: 'Image description',
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.component-holder-HeroHeader {
  background-color: $color-bg-gold-2;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  color: $color-black;

  @media(min-width:$break-point-tablets-landscape){
    background-image: var(--background-image);
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: left center;
  }
  .hero-header-holder {
    display: flex;
    max-width:$centered-width-large ;
    margin: 0 auto;
    flex-direction: column;
    @media(min-width:$break-point-tablets-landscape){
      flex-direction: row;
      align-items: stretch;
      min-height: 45vh;
    }
    ._left {
      width: 100%;
      background-color: $color-bg-gold-2;
      padding: 4rem 1rem 1rem;
      text-align: center;
      box-sizing: border-box;
      img {

        display: block;
        max-width: 150px;
        height: auto;
        margin: auto;
        border-radius: 50%;
        @media(min-width:$break-point-tablets-landscape){
          display: none;
        }


      }
      @media(min-width:$break-point-tablets-landscape){
        width: 45%;
        padding: 4rem 0;
        background:
            linear-gradient(
                    to right,
                    $color-transparent,
                    $color-bg-gold-2
            );
      }
    }

    ._right {
      width: 100%;
      padding: 1rem 1rem 4rem;
      text-align: center;
      position: relative;
      background: $color-bg-gold-2;
      display: flex;
      box-sizing: border-box;
      ._content{
        align-self: center;
        h1 {
          font-family: 'Playfair 9pt',serif;
          margin: 0;
          padding:0;
          font-size: 50px;
          font-weight: 700;
          line-height: 1em;
          color: $color-gold;
          text-wrap: wrap;
          @media(min-width:$break-point-tablets-landscape){
            font-size: 60px;
            line-height: 1.2em;
          }

        }
        h2{
          font-family: 'amsterdam-two',serif;
          font-size: 18px;
          letter-spacing: 2px;
          margin:0;
          padding:0;
          font-weight: 300;
          font-style: italic;
          text-wrap: wrap;
          @media(min-width:$break-point-tablets-landscape){
            font-size: 20px;
          }

        }
        p{
          font-family: 'Montserrat',serif;
          font-size: 16px;
          line-height: 1.5em;
          margin: 0;
          padding:20px 0 40px;
          text-wrap: wrap;
          @media(min-width:$break-point-tablets-landscape){
            font-size: 18px;
          }
        }
      }
      @media(min-width:$break-point-tablets-landscape){
        width: 55%;
        text-align: left;
        padding: 4rem 0;
      }
    }
  }
}
</style>

