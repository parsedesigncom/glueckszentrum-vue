<template>
  <div :style="wrapperStyle">
    <div
        :class="computedClass"
        :style="computedStyle"
    ></div>
  </div>
</template>

<script>
export default {
  name: "HorizontalLine",
  props: {
    length: {
      type: String,
      default: "250px"
    },
    thickness: {
      type: String,
      default: "2px"
    },
    lineStyle: {
      type: String,
      default: "solid", // Standardstil ist durchgezogene Linie
      validator: (value) => ["solid", "dashed", "dotted"].includes(value)
    },
    customClass: {
      type: String,
      default: ""
    },
    alignment: {
      type: String,
      default: "center", // Standardpositionierung ist zentriert
      validator: (value) => ["left", "center", "right"].includes(value)
    }
  },
  computed: {
    wrapperStyle() {
      const alignmentStyles = {
        left: "flex-start",
        center: "center",
        right: "flex-end"
      };
      return {
        display: "flex",
        justifyContent: alignmentStyles[this.alignment]
      };
    },
    computedStyle() {
      return {
        width: this.length,
        height: this.thickness,
        borderTopStyle: this.lineStyle,
        borderTopWidth: this.thickness,
        margin: 0
      };
    },
    computedClass() {
      return [this.customClass];
    }
  }
};
</script>

<style scoped lang="scss">
div {
  border: none;
}
</style>
