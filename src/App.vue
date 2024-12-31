<script>
import {useAuthStore} from "@/stores/auth";
import Header from "@/components/template/Header.vue";


export default {
  components: {
    Header,
  },
  setup() {
    const authStore = useAuthStore();
    authStore.autoLogin(); // Token bei App-Start prüfen
  },
  mounted() {
    console.log("Component mounted!");
  },

};
</script>

<template>
  <div id="app">
    <Header />
    <router-view />
  </div>

</template>

<style scoped lang="scss">


p{
  font-family: $font-family-playfair;
  @include responsive-text(15px, 1.5);
}
</style>

