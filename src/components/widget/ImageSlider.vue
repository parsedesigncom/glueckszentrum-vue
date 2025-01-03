<template>
  <div :class="['image-slider', customClass]">
    <div class="slider">
      <div class="slide-track">
        <div class="slide" v-for="(image, index) in duplicatedImages" :key="index">
          <router-link v-if="image.link && !image.link.startsWith('http')" :to="image.link">
            <img :src="image.src" :alt="image.alt || ''" />
          </router-link>
          <a v-else-if="image.link && image.link.startsWith('http')" :href="image.link" target="_blank">
            <img :src="image.src" :alt="image.alt || ''" />
          </a>
          <img v-else :src="image.src" :alt="image.alt || ''" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageSlider",
  props: {
    images: {
      type: Array,
      required: true,
    },
    customClass: {
      type: String,
      default: "",
    },
  },
  computed: {
    duplicatedImages() {
      return [...this.images, ...this.images]; // Duplicate the images to create an infinite effect
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin white-gradient {
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
}

$animationSpeed: 40s;

// Animation
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}

// Styling
.slider {
  background: transparent;
  height: 100px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
  max-width: 960px;

  &::before,
  &::after {
    @include white-gradient;
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
  }

  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }

  &::before {
    left: 0;
    top: 0;
  }

  .slide-track {
    animation: scroll $animationSpeed linear infinite;
    display: flex;
    width: calc(250px * 14);
  }

  .slide {
    flex: 0 0 auto;
    height: 70px;
    width: 150px;
  }
}
</style>
