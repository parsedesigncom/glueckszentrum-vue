<script>
export default {
  name: "Footer",
  props: {
  },
  data() {
    return {
      wpHomeUrl: import.meta.env.VITE_WP_HOME_URL,
      impressumUrl: import.meta.env.VITE_WP_HOME_URL + 'impressum/',
      agbUrl: import.meta.env.VITE_WP_HOME_URL + 'allgemeine-geschaeftsbedingungen/',
      datenschutzUrl: import.meta.env.VITE_WP_HOME_URL + 'datenschutzvereinbarung/',
    };
  },
  methods: {
  },
};
</script>

<template>
  <div class="component-Footer">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="app-footer-holder">
            <div class="footer-holder">
              <div class="_block">
                <div class="_brand">
                  <router-link to="/">
                    <img src="@img/logo.png" alt="Glück zentrum" class="logo" height="50" />
                  </router-link>
                </div>
              </div>
              <div class="_block">
                <div class="_insider-block">
                  <p>
                    Das Glückszentrum ist die Coaching-Plattform für jeden, der glücklicher, erfolgreicher und gesünder sein möchte!
                  </p>
                  <p>
                    Die Glückszentrum-Online-Hilfe ermöglicht dir günstig professionelles COACHING & psychologische BERATUNG bei Problemen, Fragen oder zur Zielerreichung!
                  </p>
                </div>
                <div class="_insider-block">
                  <p class="_text-center _color-bg-alternative">
                    Bestelle hier gratis unseren Newsletter,
                    mit Rabatt-Codes, Angeboten und Wissenswertes für dein Glück und deinen Erfolg!
                  </p>
                </div>
                <div class="_insider-block">
                  <ul>
                    <li>
                      <router-link to="/impressum">Impressum</router-link>
                      <router-link to="/agb">AGB</router-link>
                      <router-link to="/datenschutz">Datenschutz</router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="_block">
                <p>
                  Hinweis: Zur besseren Lesbarkeit verwenden wir das generische Maskulinum. Die verwendeten Personenbezeichnungen beziehen sich – sofern nicht anders kenntlich gemacht – auf alle Geschlechter.
                </p>
              </div>
              <div class="_block">
                <p>
                  Für das Glückszentrum arbeiten nur professionelle Coaches, die dir Unterstützung bei deiner Persönlichkeitsentwicklung anbieten. Hingegen werden hier weder medizinische Diagnosen noch Psychotherapie angeboten. Das Glückszentrum bietet über diese Hilfs-Plattform Coaching- und Beratungsdienstleistungen an. Insofern geben wir weder Erfolgs- noch Heilversprechen. In Fällen von schwerwiegenderen Problemen, psychischen Erkrankungen oder körperlichen Beschwerden ist es wichtig, professionelle Hilfe von approbierten Ärzten, Psychotherapeuten oder Psychiatern in Anspruch zu nehmen.
                </p>
              </div>
              <div class="_block">
                <div class="_line"></div>
              </div>
              <div class="_block _column _text-center">
                <p class="_text-center">
                  © 2024 Glückszentrum • All Rights Reserved
                </p>
                <p>
                  <a href="https://parsedesign.com" target="_blank" class="_text-small _text-center">
                    Design by ParseDesign
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.component-Footer{
  background: $color-black-alpha;
  color: $color-white;
  .app-footer-holder{
    font-size: 16px;
    line-height: 24px;
    font-family: "Montserrat", serif;
    font-weight: 400;
    padding: 4rem 1rem;
    margin: 2rem 0;
    text-align: left;
    ._color-bg-alternative{
      color: $color-bg-alternative;
    }
    .footer-holder{
      ._block{
        padding: 1rem 0;
        display: flex;
        justify-content:space-between;
        flex-direction: column;
        @media(min-width: $break-point-master){
          flex-direction: row;
        }
        &._column{
          @media(min-width: $break-point-master){
            flex-direction: column;
          }
        }
        &._text-center{
          text-align: center;
        }
        ._text-center{
          text-align: left;
          @media(min-width: $break-point-master){
            text-align: center;
          }
        }
        ._text-small{
          font-size: 12px;
        }
        ._insider-block{
          padding: 2px;
          flex: 1;
        }
        p{
          margin: 0;
          padding: 5px 0;
        }
        a{
          color: $color-white;
          text-decoration: none;
        }
        ._line{
          width: 100%;
          height: 1px ;
          background: $color-text;
        }
        ul{
          list-style: none;
          margin: 0;
          padding: 5px 0;
          li{
            display: block;
            a{
              display: block;
              color: $color-white;
              text-decoration: none;
              text-align: left;
              @media(min-width: $break-point-master){
                text-align: center;
              }
            }
          }
        }
      }
    }
  }

}

</style>