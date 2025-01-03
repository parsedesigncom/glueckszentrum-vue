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
      console.log('Geladene SVGs:', this.svgIcons); // Debugging
    },
    getSvgContent(iconName) {
      const name = iconName || this.missingIcon;
      if (!this.svgIcons[name]) {
        console.warn(`Icon "${name}" nicht gefunden. Fallback auf "${this.missingIcon}".`);
      }
      return this.svgIcons[name] || this.svgIcons[this.missingIcon];
    },
    isExternalLink() {
      // Prüfe, ob der Link extern ist (beginnt mit https://)
      return this.link.startsWith('https://');
    },
  },
};
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
  @include responsive-text($font-text-small, $font-text-small);
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
  div {
    &.icon {
      display: none;
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

      @media (min-width:$break-point-master){
        display: inline-flex;
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
        width: 100%;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  &.use-pfeil-02 {
    align-self: center;
    @media (min-width:$break-point-master){
      margin-left: -150px;
    }
    div {
      &.icon {
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        flex-shrink: 0;
        fill: $color-black;
        transform: rotate(29deg);
        margin-top: -80px;
        @media (min-width:$break-point-master){
          display: inline-flex;
        }
      }
    }
  }
  &.small-btn{
    font-size: $font-text;
    font-weight: 400;
    div{
      &.link{
        a, router-link {
          padding: $size-base-10 $padding-btn-x;
        }
      }
    }
  }
}
</style>
