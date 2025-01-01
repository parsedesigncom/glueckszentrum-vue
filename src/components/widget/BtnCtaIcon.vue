<script>
export default {
  name: "BtnCtaIcon",
  props: {
    link: {
      type: String,
      required: true,
    },
    clickText: {
      type: String,
      default: 'Click Me',
    },
    target: {
      type: String,
      default: '_self',
    },
    cssClass: {
      type: String,
      default: '',
    },
    svgIcon: {
      type: String,
      default: 'pfeil-01', // Standard-Icon
    },
  },
  data() {
    return {
      svgIcons: {}, // Speicher für geladene SVG-Dateien
      missingIcon: 'pfeil-01', // Fallback-Icon als Name
    };
  },
  created() {
    this.loadSvgIcons();
  },
  methods: {
    async loadSvgIcons() {
      const svgModules = import.meta.glob('@/assets/images/*.svg', { as: 'raw' });

      for (const [path, loader] of Object.entries(svgModules)) {
        const fileName = path.split('/').pop().replace('.svg', ''); // Extrahiert den Dateinamen
        const content = await loader();
        this.svgIcons[fileName] = content;
      }
    },
    getSvgContent(iconName) {
      // Nutze das gewünschte Icon oder den Fallback-Icon-Namen
      const name = iconName || this.missingIcon;
      return this.svgIcons[name] || this.svgIcons[this.missingIcon];
    },
    isExternalLink() {
      // Prüfe, ob der Link extern ist (beginnt mit https://)
      return this.link.startsWith('https://');
    },
  },
}
</script>

<template>
  <div :class="['component-holder-CtaBtnIcon', cssClass]">
    <!-- Rendert das Icon -->
    <div class="icon" v-html="getSvgContent(svgIcon)"></div>
    <!-- Linkbereich -->
    <div class="link">
      <template v-if="isExternalLink()">
        <a :href="link" :target="target">
          {{ clickText }}
        </a>
      </template>
      <template v-else>
        <router-link :to="link">
          {{ clickText }}
        </router-link>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.component-holder-CtaBtnIcon {
  font-family: $font-family-montserrat;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
  * {
    box-sizing: border-box;
  }
  div {
    &.icon {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      flex-shrink: 0;
      fill: $color-accent;

      svg {
        width: 100%;
        height: 100%;
      }
    }
    &.link {
      a, router-link {
        display: block;
        text-decoration: none;
        background: $color-accent;
        color: $color-white;
        padding: $padding-btn-x $padding-btn-y;
        border-radius: $border-radius-base;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }

  &.use-pfeil-02 {
    div {
      &.icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        flex-shrink: 0;
        fill: $color-black;
        transform: rotate(29deg);
        margin-top: -80px;
      }
    }
  }
}
</style>
