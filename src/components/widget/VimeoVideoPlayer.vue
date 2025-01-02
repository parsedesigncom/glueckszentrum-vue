<template>
  <div :class="['component-holder-VimeoVideoPlayer', cssClass]">
    <div class="iframe-container">
      <iframe
          :src="videoUrl"
          frameborder="0"
          allow="{{allow}}"
          allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "VimeoVideoPlayer",
  props: {
    videoId: {
      type: String,
      required: true,
    },
    h: {
      type: String,
      default: '4642f202da',
    },
    player_id: {
      type: String,
      default: '0',
    },
    app_id: {
      type: String,
      default: '58479',
    },
    allow: {
      type: String,
      default: 'autoplay; fullscreen; picture-in-picture',
    },
    cssClass: {
      type: String,
      default: '',
    },
  },
  computed: {
    videoUrl() {
      return `https://player.vimeo.com/video/${this.videoId}?h=${this.h}&amp;badge=0&amp;autopause=0&amp;player_id=${this.player_id}&amp;app_id=${this.app_id}`;
    },
  },
};
</script>

<style scoped lang="scss">
.component-holder-VimeoVideoPlayer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.iframe-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
  border-radius: 10px;
  background-color: #000; /* Optional for fallback color */
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: none;
}
</style>
