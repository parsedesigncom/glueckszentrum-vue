<script>
export default {
  name: "NavBar",
  props: {
    links: {
      type: Array,
      required: false,
      default: () => [
        { text: "Home", target: "_self", url: "/" },
        { text: "Coaches", target: "_self", url: "/coaches" },
        { text: "Preise", target: "_self", url: "/preise" },
        { text: "Glückszentrum", target: "_self", url: "/glueckszentrum" },
        { text: "FAQ", target: "_self", url: "/faq" }
      ],
    },
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    isExternal(url) {
      return /^https?:\/\//.test(url);
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>


<template>
  <div class="component-NavBar">
    <div class="navbar-holder">
      <nav class="navbar">
        <div class="brand">
          <a href="/">
            <img src="@img/logo.png" alt="Glück zentrum" class="logo" height="50" />
          </a>
        </div>
        <div class="hamburger" @click="toggleMenu">
          <span></span>
          <span class="small"></span>
          <span></span>
          <span class="small"></span>
        </div>
        <ul :class="{ 'menu': true, open: isMenuOpen }">
          <li class="close" @click="closeMenu">
            <span></span>
            <span></span>
          </li>
          <li v-for="link in links" :key="link.text">
            <template v-if="isExternal(link.url)">
              <a :href="link.url" :target="link.target" rel="noopener noreferrer" @click="closeMenu">
                {{ link.text }}
              </a>
            </template>
            <template v-else>
              <router-link :to="link.url" :target="link.target" @click="closeMenu">
                {{ link.text }}
              </router-link>
            </template>
          </li>
        </ul>
      </nav>
    </div>
  </div>

</template>

<style scoped lang="scss">
.component-NavBar{
  .navbar-holder{
    padding: 10px 1rem;
    .navbar {
      display: flex;
      justify-content: space-between;
      background-color: #ffffff;
      color: #343434;
      padding:0;
      margin: 0;
      position: relative;
      font-family: 'Montserrat',serif;
      font-weight: 400;
      font-style: normal;
      font-optical-sizing: auto;
      align-items: center;
      .brand {
        font-size: 1.5em;
        font-weight: bold;
      }
      .hamburger {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 25px;
        height: 20px;
        cursor: pointer;
        rotate: 180deg;
        span {
          display: block;
          height: 2px;
          background: $color-primary;
          border-radius: 2px;
          max-width: 100%;
          &.small{
            max-width: 70%;
          }
        }
        @media(min-width:$break-point-master){
          display: none;
        }
      }
      ul.menu {
        display: none;
        gap: 1em;
        list-style: none;
        padding: 1rem;
        margin: 0;
        font-size: 16px;
        box-sizing: border-box;
        @media(min-width:$break-point-master){
          display: flex;
        }
        li {
          margin: 0;
          text-align: center;
          color: $color-dark-gray-text-90;
          a {
            color: $color-dark-gray-text-90;
            text-decoration: none;
            &:hover {
              color: $color-accent;
            }
          }
          &.close{
            display: none;
            position: absolute;
            right: 30px;
            top: 30px;
            width: 30px;
            height: 30px;
            &:hover{
              cursor: pointer;
            }
            span {
              display: block;
              height: 3px;
              background: $color-white; // Deine Variable
              width: 30px;
              border-radius: 2px;
              position: absolute; // Damit sie sich überlagern
              top: 50%; // Zentrierung
              left: 50%; // Zentrierung
              transform-origin: center; // Drehpunkt im Zentrum
              transition: all 0.3s ease-in-out; // Für Animationen (optional)

              &:nth-of-type(1) {
                transform: rotate(45deg) translate(-50%, -50%);
              }

              &:nth-of-type(2) {
                transform: rotate(-45deg) translate(-50%, -50%);
                top: -6px;
                left: 16px;
              }
            }

          }
          &:hover {
            color: $color-accent;
            cursor: pointer;
          }

        }
        &.open {
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          width: 80vw;
          display: flex;
          height: 100%;
          flex-direction: column;
          background-color: $color-black-alpha;
          z-index: 10;
          justify-content: center;
          align-items: start;
          font-size: 25px;
          padding: 1em;
          li{
            color: $color-white;
            a {
              color: $color-white;
              text-decoration: none;
              &:hover {
                color: $color-accent;
              }
            }

            &.close{
              display: block;
            }

          }
        }
      }



    }
  }

}
</style>
