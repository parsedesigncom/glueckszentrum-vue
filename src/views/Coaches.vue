<script>
import BulletPoint from "@/components/widget/BulletPoint.vue";
import Separator from "@/components/widget/Separator.vue";
import { useCoaches } from '@/composables/useCoaches';
import HeroHeader from "@/components/widget/HeroHeader.vue";
import CoachBox from "@/components/widget/CoachBox.vue";
import GapComponent from "@/components/widget/GapComponent.vue";
import AreaComponent from "@/components/widget/AreaComponent.vue";
import SpeakerSlider from "@/components/widget/SpeakerSlider.vue";
import BtnCtaIcon from "@/components/widget/BtnCtaIcon.vue";

export default {
  name: 'Coaches',
  components: {
    Separator, BulletPoint,
    HeroHeader,
    CoachBox,
    GapComponent,
    AreaComponent,
    SpeakerSlider,
    BtnCtaIcon
  },
  setup() {
    const {coaches, isLoading, error, fetchCoaches} = useCoaches();

    // Fetch coaches when the component is created
    fetchCoaches();

    return {
      coaches,
      isLoading,
      error,
    };
  },
};
</script>

<template>
  <div class="view-coaches">
    <HeroHeader
        bgImgSrc="https://glueckszentrum.help/wp-content/uploads/2023/11/Header-Desktop-01.jpg"
        imgSrc="https://glueckszentrum.help/wp-content/uploads/2023/11/Header-Mobil-01.jpg"
        imgAlt="My Image"
        title="Wir sind für DICH da!"
        description="Erlebe professionelles Coaching, bei dem du achtsame Beratung erhältst und Unterstützung findest, um Herausforderungen zu überwinden und deine Ziele zu erreichen."
        subtitle="Greif zu, wenn das Leben ruft!"
    />
    <AreaComponent cssClass="bg-color-gold">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-3"></div>
          <div class="col col-12 col-lg-6">
            <p class="g-style-text-center g-style-text g-style-text-white">
              Nutze gleich die 30-minütige Coaching-Erstberatung, selbst wenn du noch auf sonstige Hilfe oder eine Therapie wartest, denn sie ermöglicht dir sofort mehr Klarheit und Erleichterung,
            </p>
          </div>
          <div class="col col-12 col-lg-3"></div>
        </div>
      </div>
    </AreaComponent>
    <AreaComponent cssClass="bg-color-white">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-md-4">
            <SpeakerSlider :cardsMinHeight="200" :autoPlay="true" cssClass="small-style" />
          </div>
          <div class="col col-12 col-md-8">
            <GapComponent responsiveConfig="0-30" />
            <h2 class="g-style-accent">Wähle hier deinen professionellen Coach!</h2>
            <GapComponent responsiveConfig="0-10" />
            <p class="g-style-text">Wenn du schnellstmöglich den besten Coach für dich finden möchtest, dann nutze den digitalen Coach-Auswahl-Assistenten und lege direkt los!</p>
            <GapComponent responsiveConfig="0-15" />
            <BtnCtaIcon
                link="/coach-assistant"
                target="_blank"
                clickText="Coach-Auswahl-Assistent"
                cssClass="small-btn"
            />

          </div>
        </div>
      </div>
    </AreaComponent>
    <AreaComponent>
      <div class="container">
        <div class="row">
          <div class="col .col-12">
            <p class="g-style-text-center g-style-text-accent">Unsere Coaches – in zufälliger Reihenfolge für dich aufgelistet:</p>
          </div>
        </div>
      </div>
    </AreaComponent>
    <AreaComponent cssClass="bg-color-white">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-2"></div>
          <div class="col col-12 col-lg-8">
            <div v-if="isLoading">
              <div class="coachs-loading">
                <p>Lade Daten...</p>
              </div>
            </div>
            <div v-else-if="error">
              <div class="coachs-error">
                <p class="error">{{ error }}</p>
              </div>
            </div>
            <div v-else>
              <div class="coach-item-holder">
                <div v-for="coach in coaches" :key="coach.ID">
                  <CoachBox :coach="coach" />
                </div>
              </div>
            </div>
          </div>
          <div class="col col-12 col-lg-2"></div>
        </div>
      </div>
    </AreaComponent>
    <AreaComponent class="bg-color-white">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-1"></div>
          <div class="col col-12 col-lg-4">
            <div class="g-style-img">
              <img src="@img/Beratungsthemen.png" alt="" >
            </div>
          </div>
          <div class="col col-12 col-lg-1"></div>
          <div class="col col-12 col-lg-5">
            <div class=" user-style-4">
              <h2 class="g-style-accent">Mit wem willst du starten?</h2>
              <GapComponent responsiveConfig="0-10" />
              <Separator length="150px" thickness="1px" alignment="left"/>
              <GapComponent responsiveConfig="0-30" />
              <p class="g-style-text">Weißt du schon, mit wem du deine herausfordernden Themen lösen möchtest?<br>
                Egal was dich belastet und selbst, wenn du auf eine Therapie wartest, dieses effektive Coaching mit psychologischer Beratung kann immer eine großartige Erleichterung sein, vor allem dann, wenn sich endlich die Probleme auflösen und Klarheit entsteht.
              </p>
              <GapComponent responsiveConfig="0-15" />
              <BtnCtaIcon
                  link="/coach-assistant"
                  target="_blank"
                  clickText="Coach-Auswahl-Assistent"
                  cssClass="small-btn"
              />
            </div>
          </div>
          <div class="col col-12 col-lg-1"></div>

        </div>
      </div>
    </AreaComponent>
  </div>
</template>

<style scoped lang="scss">

</style>
