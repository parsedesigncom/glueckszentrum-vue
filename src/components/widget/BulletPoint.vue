<script>
export default {
  name: "BulletPoint",
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    },
    cssClass: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      svgIcons: {},
      missingIcon: `x`
    };
  },
  created() {
    this.loadSvgIcons();
  },
  methods: {
    loadSvgIcons() {
      const svgModules = import.meta.glob('@/assets/images/*.svg', {as: 'raw'});

      // Lädt alle SVGs und speichert sie in `svgIcons`
      for (const [path, loader] of Object.entries(svgModules)) {
        const fileName = path.split('/').pop().replace('.svg', ''); // Extrahiert den Dateinamen
        loader().then((content) => {
          this.svgIcons[fileName] = content;
        });
      }
    }
  }
};
</script>

<template>
  <div v-if="items && items.length" :class="['component-holder-BulletPoint', cssClass]">
    <ul class="bullet-point-items">
      <li v-for="(item, index) in items" :key="index" class="bullet-point-item">
        <div class="icon" v-html="svgIcons[item.icon] || missingIcon"></div>
        <div class="content" v-html="item.content"></div>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.component-holder-BulletPoint {
  ul.bullet-point-items {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: left;

    li.bullet-point-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      margin-bottom: 10px;
      div {
        &.icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 25px;
          height: 25px;
          flex-shrink: 0;

          svg {
            width: 100%;
            height: 100%;
          }
        }

        &.content {
          flex: 1;
          font-family: $font-family-montserrat;
          font-weight: 400;
          font-size:$font-text;
          ::v-deep(strong),
          ::v-deep(b) {
            font-weight: 600;
          }
        }
      }
    }
  }
  &.use-in-homepage{
    ul.bullet-point-items {
      li.bullet-point-item {
        max-width: 600px;
        div {
          &.icon {
            fill: $color-accent;
            width: 38px;
            height: 38px;
            align-self: start;
          }
          &.content {
            @include responsive-text($font-accent, $font-accent);
          }
        }
      }
    }
  }
  &.inlineStyle{
    ul.bullet-point-items {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 0;
      li.bullet-point-item {
        margin: 0;
        div {
          display: flex;
          flex-direction: row;
          gap: 0;
          &.icon {
            fill: $color-text-gray;
            width: 15px;
            height: 15px;
            align-self: center;
            margin-left:$size-base-10 ;
          }
          &.content {
            font-size: $font-text;
          }
        }
      }
    }
  }
}


</style>
