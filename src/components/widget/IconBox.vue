<script>
import GapComponent from "@/components/widget/GapComponent.vue";
export default {
  name: "IconBox",
  components: {
    GapComponent
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    cssClass: {
      type: String,
      default: "",
    },
    svgIcon: {
      type: String,
      default: "pfeil-01", // Standard-Icon
    },
    svgIcon2: {
      type: String,
      default: "", // Standard-Icon
    },
  },
  data() {
    return {
      svgIcons: {}, // Speicher für geladene SVG-Dateien
      missingIcon: "pfeil-01", // Fallback-Icon als Name
    };
  },
  async created() {
    await this.loadSvgIcons();
  },
  methods: {
    // Lädt SVG-Dateien aus dem angegebenen Verzeichnis
    async loadSvgIcons() {
      const svgModules = import.meta.glob("@/assets/images/*.svg", {as: "raw"});

      const promises = Object.entries(svgModules).map(async ([path, loader]) => {
        const fileName = path.split("/").pop().replace(".svg", ""); // Dateiname extrahieren
        const content = await loader();
        this.svgIcons[fileName] = content;
      });

      await Promise.all(promises);
      console.info("SVGs geladen:", Object.keys(this.svgIcons)); // Debugging
    },

    // Gibt den SVG-Inhalt basierend auf dem Namen zurück
    getSvgContent(iconName) {
      const icon = iconName || this.missingIcon;
      if (!this.svgIcons[icon]) {
        console.warn(`Icon "${icon}" nicht gefunden. Fallback auf "${this.missingIcon}".`);
      }
      return this.svgIcons[icon] || this.svgIcons[this.missingIcon];
    },

    // Prüft, ob der Link extern ist
    isExternalLink() {
      return /^(https?:)?\/\//.test(this.link);
    },
  },
};
</script>

<template>
  <div :class="['component-holder-IconBox', cssClass]">
    <div class="component-holder-IconBox-holder">
      <div class="icon" v-html="getSvgContent(svgIcon)"></div>
      <div v-if="svgIcon2" class="icon2" v-html="getSvgContent(svgIcon2)"></div>
      <div class="title" v-html="title"></div>
      <div v-if="description" class="description">
        <GapComponent responsiveConfig="0-15"/>
        <div v-html="description"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.component-holder-IconBox {
  .component-holder-IconBox-holder {
    background: $color-white;
    padding: calc(2 * $size-base-10);
    border-radius: $border-radius-base;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    .icon {
      width: 120px;
      height: 120px;
      padding: calc(2 * $size-base-7);
      color: $color-accent;
      fill: $color-accent;
      border-radius: 120px;
      align-self: center;

      * {
        max-width: 100%;
        max-height: 100%;
      }

    }

    .title {
      font-family: $font-family-montserrat;
      font-size: $font-lg;
      line-height: $font-lg;
      font-weight: 500;
      color: $color-black;
    }

    .description {
      font-family: $font-family-montserrat;
      font-size: $font-text;
      line-height: $font-text;
      font-weight: 400;
      color: $color-black;
    }
  }

  &.twice-icon {
    .component-holder-IconBox-holder {
      background: $color-accent;
      text-align: left;
      justify-content: left;
      overflow: hidden;
      position: relative;
      min-height: 370px;

      .icon {
        background: transparent;
        color: $color-white;
        fill: $color-white;
        align-self: flex-start;
      }

      .icon2 {
        position: absolute;
        z-index: 0;
        right: -100px;
        top: -100px;
        width: 200px;
        height: 200px;
        fill: rgba(255, 255, 255, 0.3);

        * {
          max-width: 100%;
          max-height: 100%;
        }
      }

      .title {
        color: $color-white;
        font-weight: 600;
      }

      .description {
        color: $color-white;
        line-height: 1.5rem;
      }
    }
  }

  &.single-icon-inside {
    .component-holder-IconBox-holder {
      background: $color-bg-gray;

      .icon {
        background: $color-bg-gray;
      }
    }
  }

  &.single-icon-outside {
    padding-top: calc($gutter + 57px);

    .component-holder-IconBox-holder {
      position: relative;
      background-image: url("./src/assets/images/bg-2-blue.png");
      background-attachment: scroll;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      min-height: 200px;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.95);
        z-index: 0;
        border-radius: $border-radius-base;
      }

      .icon {
        position: absolute;
        left: 50%;
        margin-left: -64px;
        top: -57px;
        background: $color-white;
        z-index: 1;
      }

      .title {
        margin-top: calc(2 * $size-base-10);
        z-index: 1;
        position: relative;
      }

      .description {
        z-index: 1;
        position: relative;
      }
    }
  }

  &.single-icon-outside-2 {
    padding-top: calc($gutter + 57px);

    .component-holder-IconBox-holder {
      position: relative;
      background: $color-accent ;
      .icon {
        position: absolute;
        left: 50%;
        margin-left: -64px;
        top: -57px;
        background: $color-white;
        z-index: 1;
        fill: $color-white;
        background: $color-accent;
      }

      .title {
        margin-top: calc(5 * $size-base-10);
        color: $color-white;
      }

      .description {
        color: $color-white;
      }
    }
  }
}
</style>