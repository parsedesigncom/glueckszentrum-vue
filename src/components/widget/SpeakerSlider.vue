<script>
import { defineComponent, onMounted, onBeforeUnmount } from 'vue';
import { useCoaches } from '@/composables/useCoaches';
export default {
  name: "SpeakerSlider",
  props: {
    cardsMinHeight: {
      type: Number,
      default: 250,
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
    autoPlayInterval: {
      type: Number,
      default: 3000, // Default interval of 3 seconds
    },
    cssClass: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      currentIndex: 0,
      autoPlayTimer: null,
    };
  },
  methods: {
    setActive(index) {
      this.currentIndex = index;
    },
    getCardClass(index) {
      if (index === this.currentIndex) return "active";
      const prevIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
      const nextIndex = (this.currentIndex + 1) % this.items.length;
      if (index === prevIndex) return "prev";
      if (index === nextIndex) return "next";
      return "inactive";
    },
    startAutoPlay() {
      if (this.autoPlay) {
        this.autoPlayTimer = setInterval(() => {
          this.currentIndex = (this.currentIndex + 1) % this.items.length;
        }, this.autoPlayInterval);
      }
    },
    stopAutoPlay() {
      if (this.autoPlayTimer) {
        clearInterval(this.autoPlayTimer);
        this.autoPlayTimer = null;
      }
    },
  },
  setup() {
    const {coaches, isLoading, error, fetchCoaches} = useCoaches();

    // Fetch coaches when the component is created
    fetchCoaches();

    return {
      items: coaches,
      isLoading,
      error,
    };
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    this.stopAutoPlay();
  },
}
</script>

<template>
  <div :class="['component-holder-SpeakerSlider', cssClass]">
    <div class="slider-container" @mouseover="stopAutoPlay" @mouseleave="startAutoPlay">
      <div v-for="(item, index) in items" :key="index">
        <input
            type="radio"
            class="ite-radio"
            :name="`slider`"
            :id="`item-${index + 1}`"
            :checked="currentIndex === index"
            @change="setActive(index)"
        />
      </div>
      <div class="speaker-cards" :style="{ minHeight: cardsMinHeight + 'px' }">
        <div
            v-for="(item, index) in items"
            :key="index"
            class="speaker-card"
            :class="getCardClass(index)"
            @click="setActive(index)"
        >
          <div class="speaker-holder">
            <div class="speaker-image">
              <img :src="item.vip_eberl_coach_image" :alt="item.vip_eberl_coach_pseudonym_displayname" :style="{ maxWidth: cardsMinHeight + 'px' }" />
            </div>
            <div class="speaker-info">
              <router-link :to="`/coach/${item.ID}`" target="_self">
                {{ item.vip_eberl_coach_pseudonym_displayname }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.component-holder-SpeakerSlider {
  * {
    box-sizing: border-box;
  }

  .slider-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    input[type="radio"] {
      display: none;
    }

    .speaker-cards {
      position: relative;
      width: 100%;

      .speaker-card {
        position: absolute;
        width: fit-content;
        height: auto;
        left: 0;
        right: 0;
        margin: auto;
        transition: transform 0.4s ease, opacity 0.4s ease;

        .speaker-holder {
          border-radius: $border-radius-base;
          overflow: hidden;
          .speaker-image {
            position: relative;
            z-index: 0;

            img {
              display: block;
              height: auto;
              width: 100%;
            }

          }

          .speaker-info {
            a{
              position: absolute;
              padding: 5*$size-base-5 $size-base-5;
              bottom: 0;
              left: 0;
              width: 100%;
              z-index: 1;
              background-image: repeating-linear-gradient(transparent,$color-black-alpha);
              font-family: $font-family-montserrat;
              color: $color-white;
              text-decoration: none;
              border-radius: 0 0 $border-radius-base $border-radius-base;
              font-size: $font-size-text;
            }

          }

        }

        &.inactive {
          transform: translateX(-100%) scale(0.8);
          opacity: 0;
          z-index: 0;
        }

        &.prev {
          transform: translateX(-40%) scale(0.8);
          opacity: 0.4;
          z-index: 1;
        }

        &.next {
          transform: translateX(40%) scale(0.8);
          opacity: 0.4;
          z-index: 1;
        }

        &.active {
          transform: translateX(0) scale(1);
          opacity: 1;
          z-index: 2;
        }
      }
    }
  }

  &.small-style{
    .slider-container {
      .speaker-cards {
        .speaker-card {
          .speaker-holder {
            .speaker-info {
              a{
                font-size: 12px;
              }

            }
          }
        }
      }
    }

  }
  &.no-links{
    .slider-container {
      .speaker-cards {
        .speaker-card {
          .speaker-holder {
            .speaker-info {
             display: none;
            }
          }
        }
      }
    }

  }
}
</style>