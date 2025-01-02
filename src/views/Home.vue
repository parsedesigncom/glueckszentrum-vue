<script>
import heroHeaderImage from "@img/hero-header-start.png";
import AreaBg01 from "@img/unhappy-man-alone-at-home-2021-08-26-15-43-11-utc-scaled-e1693342614377.jpg"
import slider01 from '@img/slider-01.jpg';
import slider02 from '@img/slider-02.jpg';
import slider03 from '@img/slider-03.jpg';
import slider04 from '@img/slider-04.jpg';
import slider05 from '@img/slider-05.jpg';
import slider06 from '@img/slider-06.jpg';
import slider07 from '@img/slider-07.jpg';
import GapComponent from "@/components/widget/GapComponent.vue";
import HeroHeaderSlot from "@/components/widget/HeroHeaderSlot.vue";
import BulletPoint from "@/components/widget/BulletPoint.vue";
import BtnCtaIcon from "@/components/widget/BtnCtaIcon.vue";
import AreaComponent from "@/components/widget/AreaComponent.vue";
import Separator from "@/components/widget/Separator.vue";
import SpeakerSlider from "@/components/widget/SpeakerSlider.vue";
import IconBox from "@/components/widget/IconBox.vue";
import VimeoVideoPlayer from "@/components/widget/VimeoVideoPlayer.vue";
import ImageSlider from "@/components/widget/ImageSlider.vue";

export default {
  name: "HomePage",
  components: {
    GapComponent,
    HeroHeaderSlot,
    BulletPoint,
    BtnCtaIcon,
    AreaComponent,
    Separator,
    SpeakerSlider,
    IconBox,
    VimeoVideoPlayer,
    ImageSlider
  },
  data() {
    return {
      AreaBg01: AreaBg01,
      imgSrcHeroHeaderSlot: heroHeaderImage,
      bulletDataHeroSlider: [
        {
          icon: 'check-01',
          content: 'Erschaffe dein Wunschleben durch <strong>hochwertiges Coaching</strong> mit <strong>psychologischer Beratung</strong> zu <strong>günstigen Preisen</strong>.',
        },
        {
          icon: 'check-01',
          content: 'Profitiere <strong>privat, beruflich, finanziell</strong> und <strong>gesundheitlich.</strong>',
        }
      ],
      bulletData1: [
        {
          icon: 'check-01',
          content: '<b>private oder berufliche Probleme</b> auflösen und <b>mehr Erfolg</b> willst',
        },
        {
          icon: 'check-01',
          content: '<b>Klarheit und Entscheidungshilfen</b> bei wichtigen Fragen wünschst',
        },
        {
          icon: 'check-01',
          content: 'deine <b></b>Konflikte, Sorgen, Frust und Selbstzweifel</b> loswerden möchtest',
        },
        {
          icon: 'check-01',
          content: 'den Wunsch nach einer <b>liebevollen Partnerschaft</b> hegst',
        },
        {
          icon: 'check-01',
          content: '<b>emotionale Freiheit</b> sowie <b>finanzielle Freiheit</b> anstrebst',
        },
        {
          icon: 'check-01',
          content: 'deinen <b>Lebenssinn</b> und <b>Erfüllung</b> suchst',
        },
        {
          icon: 'check-01',
          content: '<b>körperliche Beschwerden</b> reduzieren und ein <b>vitaleres Leben</b> möchtest',
        }
      ],
      bulletData2: [
        {icon: 'plus1', content: 'Abhängigkeiten'},
        {icon: 'plus1', content: 'Ängste'},
        {icon: 'plus1', content: 'Beruf'},
        {icon: 'plus1', content: 'Beziehungen'},
        {icon: 'plus1', content: 'Emotionen'},
        {icon: 'plus1', content: 'Erfolg'},
        {icon: 'plus1', content: 'Erschöpfung'},
        {icon: 'plus1', content: 'Essen'},
        {icon: 'plus1', content: 'Finanzen'},
        {icon: 'plus1', content: 'Fitness'},
        {icon: 'plus1', content: 'Weiblichkeit'},
        {icon: 'plus1', content: 'Frust'},
        {icon: 'plus1', content: 'Gedanken'},
        {icon: 'plus1', content: 'Gesundheit'},
        {icon: 'plus1', content: 'Integration'},
        {icon: 'plus1', content: 'Kinder'},
        {icon: 'plus1', content: 'Konflikte'},
        {icon: 'plus1', content: 'Krisen'},
        {icon: 'plus1', content: 'Lernen'},
        {icon: 'plus1', content: 'LGBTQ'},
        {icon: 'plus1', content: 'Männlichkeit'},
        {icon: 'plus1', content: 'Mindset'},
        {icon: 'plus1', content: 'Missbrauch'},
        {icon: 'plus1', content: 'Mobbing'},
        {icon: 'plus1', content: 'Partnerschaft'},
        {icon: 'plus1', content: 'Persönlichkeit'},
        {icon: 'plus1', content: 'Rauchen'},
        {icon: 'plus1', content: 'Selbstwert'},
        {icon: 'plus1', content: 'Selbstbewusstsein'},
        {icon: 'plus1', content: 'Sexualität'},
        {icon: 'plus1', content: 'Stress'},
        {icon: 'plus1', content: 'Stimmungsschwankungen'},
        {icon: 'plus1', content: 'Toxisches Umfeld'},
        {icon: 'plus1', content: 'Trauer'},
        {icon: 'plus1', content: 'Trennung'},
        {icon: 'plus1', content: 'Wechseljahre'},
        {icon: 'plus1', content: 'Ziel'},
      ],
      imageSliderImages: [
        { src: slider01, alt: 'Glückszentrum' },
        { src: slider02, alt: 'Glückszentrum' },
        { src: slider03, alt: 'Glückszentrum' },
        { src: slider04, alt: 'Glückszentrum' },
        { src: slider05, alt: 'Glückszentrum' },
        { src: slider06, alt: 'Glückszentrum' },
        { src: slider07, alt: 'Glückszentrum' },

      ],
      imageSliderScreenConfig: '0-1#500-2#800-5',
      imageSliderAutoplayDuration: 5000,
    };
  },
  methods: {},
};
</script>

<template>
  <div class="view-home">
    <HeroHeaderSlot
        :imgSrc="imgSrcHeroHeaderSlot"
        imgAlt="My Image"
        cssClass="use-in-homepage"
    >
      <h1 class="user-style-1"><small>Deine online</small>COACHING-Plattform</h1>
      <GapComponent responsiveConfig="0-30" />
      <BulletPoint :items="bulletDataHeroSlider" cssClass="use-in-homepage" />
      <GapComponent responsiveConfig="0-30" />
      <BtnCtaIcon
          link="/coaches"
          target="_blank"
          clickText="Entdecke jetzt deinen professionellen Coach"
      />
    </HeroHeaderSlot>
    <AreaComponent cssClass="bg-color-white">
      <div class="user-style-2">
        <p>Bei uns  ist COACHING für ALLE möglich.</p>
        <GapComponent responsiveConfig="0-5#576-15" />
        <p>PROFESSIONELL & GÜNSTIG & SCHNELL & ANONYM</p>
      </div>
    </AreaComponent>
    <AreaComponent>
      <div class="container">
        <div class="row">
          <div class="col col-12">
            <div class="user-style-3">
              <h2 class="g-style-h2">Entdecke deinen Coach!</h2>
              <GapComponent responsiveConfig="0-10" />
              <Separator length="150px" thickness="1px"/>
              <GapComponent responsiveConfig="0-10" />
              <p class="g-style-text">
                Hier findest du eine große Auswahl an professionellen Coaches, die dir mit Herz und fachlichem Know-how zur Verfügung stehen. Alle haben weitere Qualifikationen beispielsweise als Psychologe, Heilpraktiker für Psychotherapie, Paarberater, Jugendcoach, Eltern- und Familiencoach, Gesundheitsberater, Businesscoach, Fitnesscoach, Ernährungsberater usw.
              </p>
              <GapComponent responsiveConfig="0-50" />
              <SpeakerSlider :cardsMinHeight="350" :autoPlay="true" />
              <GapComponent responsiveConfig="0-50" />
              <p class="g-style-text">Der Auswahl-Assistent hilft dir, deinen idealen Coach (auch Paarberater) zu finden.</p>
              <GapComponent responsiveConfig="0-15" />
              <p class="g-style-text"><strong>Starte mit nur 39,00 €  bei 30 Minuten.</strong></p>
              <GapComponent responsiveConfig="768-15" />
              <BtnCtaIcon
                  link="/coaches"
                  target="_blank"
                  clickText="Entdecke jetzt deinen professionellen Coach"
                  svgIcon="pfeil-02"
                  cssClass="use-pfeil-02"
              />
            </div>
          </div>
        </div>
      </div>
    </AreaComponent>
    <AreaComponent cssClass="bg-color-white">
      <div class="container">
        <div class="row">
          <div class="col col-12">
            <p class="g-style-text g-style-text-gold g-style-text-center">
              <u><b>96 %</b> der Kunden</u> sind mit ihrem Coaching zufrieden und würden es weiterempfehlen.
            </p>
          </div>
        </div>
      </div>
    </AreaComponent>
    <AreaComponent>
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6">
            <div class="  user-style-4">
              <h2 class="g-style-h2">Entdecke deinen Coach!</h2>
              <GapComponent responsiveConfig="0-10" />
              <Separator length="150px" thickness="1px" alignment="left"/>
              <GapComponent responsiveConfig="0-30" />
              <BulletPoint :items="bulletData1"/>
            </div>
          </div>
          <div class="col col-12 col-lg-2"></div>
          <div class="col col-12 col-lg-4 ">
            <GapComponent responsiveConfig="0-30#992-0" />
            <div class="g-style-img">
              <img src="@img/sad-shocked-upset-scared-european-millennial-woman.jpg" alt="" >
            </div>
          </div>
        </div>
      </div>
    </AreaComponent>
    <AreaComponent class="bg-color-white">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6">

            <div class="g-style-img">
              <img src="@img/Beratungsthemen.png" alt="" >
            </div>
            <GapComponent responsiveConfig="0-30#992-0" />
          </div>
            <div class="col col-12 col-lg-1"></div>
          <div class="col col-12 col-lg-5">
            <div class=" user-style-4">
              <h2 class="g-style-h2">Was fordert dich heraus?</h2>
              <GapComponent responsiveConfig="0-10" />
              <Separator length="150px" thickness="1px" alignment="left"/>
              <GapComponent responsiveConfig="0-30" />
              <BulletPoint :items="bulletData2" css-class="inlineStyle"/>
            </div>
          </div>
          <div class="col col-12">
            <GapComponent responsiveConfig="0-50" />
            <p class="g-style-text-gold g-style-text-accent">Wir unterstützen dich dabei, belastende Themen zu meistern, blockierende Hindernisse zu überwinden und die Voraussetzungen zu schaffen, die dich deinen Wünschen näherbringen.</p>
            <GapComponent responsiveConfig="0-30" />
            <p class=" g-style-text-accent">Es ist, als würden wir gemeinsam einen tief sitzenden Dorn aus deinen Füßen ziehen, der dir schon lange Schmerzen bereitet und dich daran hindert, voranzukommen.</p>
            <GapComponent responsiveConfig="0-30" />
            <p class="g-style-text-gold g-style-text-accent">Unsere Aufgabe ist es, dich mit <u>professionellem Coaching</u> und <u>psychologischer Beratung</u> zu unterstützen, ein Leben zu erschaffen, wie du es dir wünschst – und das zu <u>unschlagbar günstigen Konditionen</u>. Probiere es aus und entdecke, wie wir dir helfen können, das Leben zu gestalten, das du dir wünschst!</p>
          </div>

        </div>
      </div>
    </AreaComponent>
    <AreaComponent>
      <h2 class="g-style-h2 g-style-text-center">Die beliebtesten Themen:</h2>
      <GapComponent responsiveConfig="0-10" />
      <Separator length="150px" thickness="1px"/>
      <GapComponent responsiveConfig="0-50" />
      <div class="container">
        <div class="row">
          <div class="col col-1"></div>
          <div class="col col-10">
            <div class="row">
              <div class="col col-12 col-sm-6 col-lg-4"><IconBox title="Beziehungen & Konflikte" svgIcon="121-favourite" cssClass="single-icon-outside"/></div>
              <div class="col col-12 col-sm-6 col-lg-4"><IconBox title="Persönlichkeit & Mindset" svgIcon="153-target" cssClass="single-icon-outside"/></div>
              <div class="col col-12 col-sm-6 col-lg-4"><IconBox title="Gesundheit & Emotionen" svgIcon="088-emoji-2" cssClass="single-icon-outside"/></div>
              <div class="col col-12 col-sm-6 col-lg-4"><IconBox title="Beruf & Karriere" svgIcon="069-briefcase" cssClass="single-icon-outside"/></div>
              <div class="col col-12 col-sm-6 col-lg-4"><IconBox title="Wohlstand & Finanzen" svgIcon="077-cash-money" cssClass="single-icon-outside"/></div>
              <div class="col col-12 col-sm-6 col-lg-4"><IconBox title="Blockaden & Erfolg" svgIcon="055-podium" cssClass="single-icon-outside"/></div>
            </div>
          </div>
          <div class="col col-1"></div>
        </div>
      </div>
    </AreaComponent>
    <AreaComponent cssClass="bg-color-white">
      <h2 class="g-style-h2 g-style-text-center">Unsere Experten helfen dir auf dein nächstes Level!</h2>
      <GapComponent responsiveConfig="0-10" />
      <Separator length="150px" thickness="1px"/>
      <GapComponent responsiveConfig="0-15" />
      <p class="g-style-text-center g-style-text">Coaching mit Beratung kann jedem zu mehr Glück, Erfolg und Gesundheit verhelfen!</p>
      <GapComponent responsiveConfig="0-50" />
      <div class="container">
        <div class="row">
          <div class="col col-1"></div>
          <div class="col col-10">
            <div class="row">
              <div class="col col-12 col-md-6 col-xl-3">
                <GapComponent responsiveConfig="567-10" />
                <IconBox
                    title="Professionell"
                    description="Alle Coaches besitzen anerkannte Coaching-Qualifikationen, arbeiten mit bewährten Methoden, haben hervorragende Referenzen und mindestens zwei Jahre Praxiserfahrung."
                    svgIcon="063-diploma-1"
                    svgIcon2="063-diploma-1"
                    cssClass="twice-icon"/>
              </div>
              <div class="col col-12 col-md-6 col-xl-3">
                <GapComponent responsiveConfig="567-10" />
                <IconBox
                    title="Preiswert"
                    description="Wir machen professionelles Coaching endlich für alle bezahlbar. Durch unsere Effektivität können wir wertvolle Unterstützung zu Diskont-Preisen anbieten."
                    svgIcon="077-cash-money"
                    svgIcon2="077-cash-money"
                    cssClass="twice-icon"/>
              </div>
              <div class="col col-12 col-md-6 col-xl-3">
                <GapComponent responsiveConfig="567-10" />
                <IconBox
                    title="Schnell"
                    description="Wir unterstützen dich ohne lange Wartezeiten, genau dann, wenn du uns brauchst. Über 30 Profi-Coaches stehen dir zur Verfügung – einige auch nachts oder am Wochenende."
                    svgIcon="109-paper-plane"
                    svgIcon2="109-paper-plane"
                    cssClass="twice-icon"/>
              </div>
              <div class="col col-12 col-md-6 col-xl-3">
                <GapComponent responsiveConfig="567-10" />
                <IconBox
                    title="Anonym"
                    description="Wir nehmen die Anonymität und den Datenschutz ernst. Alle persönlichen Daten werden höchst vertraulich behandelt und nur zur Vertragsabwicklung benutzt!"
                    svgIcon="080-search-profile"
                    svgIcon2="080-search-profile"
                    cssClass="twice-icon"/>
              </div>
            </div>
          </div>
          <div class="col col-1"></div>
          <div class="col col-12">
            <GapComponent responsiveConfig="0-25#992-50" />
            <h3 class="g-style-h3 g-style-text-center">Das Glückszentrum ist für DICH da!</h3>
            <GapComponent responsiveConfig="0-25" />
            <div class="row">
              <div class="col col-12 col-md-3"></div>
              <div class="col col-12 col-md-6"><VimeoVideoPlayer videoId="968653675" /></div>
              <div class="col col-12 col-md-3"></div>
            </div>
          </div>
        </div>
      </div>
    </AreaComponent>
    <AreaComponent>
      <div class="container">
        <div class="row">
          <div class="col col-12 col-md-2"></div>
          <div class="col col-12 col-md-8">
            <div class="user-style-3">
              <h2 class="g-style-h2 g-style-text-center">Sofort mehr Lebensqualität?</h2>
              <GapComponent responsiveConfig="0-10" />
              <Separator length="150px" thickness="1px"/>
              <GapComponent responsiveConfig="0-10" />
              <p class="g-style-text-accent-bold g-style-text-center">Probiere das Coaching deiner Wahl noch heute aus!<br>Von 0 auf 100. Alles ist möglich!</p>
              <GapComponent responsiveConfig="0-10" />
              <p class="g-style-text g-style-text-center">Wähle deinen idealen Coach, buche einen Termin und freue dich auf zielgerichtete Unterstützung: sei es privat, beruflich, finanziell oder gesundheitlich.</p>
              <GapComponent responsiveConfig="0-50" />
              <BtnCtaIcon
                  link="/coaches"
                  target="_blank"
                  clickText="Entdecke jetzt deinen professionellen Coach"
                  svgIcon="pfeil-02"
                  cssClass="use-pfeil-02"
              />
            </div>
            </div>

          <div class="col col-12 col-md-2"></div>
        </div>
      </div>
    </AreaComponent>
    <AreaComponent cssClass="bg-color-white">
      <div class="user-style-3">
        <IconBox
            title="Das Glückszentrum ist die Coaching-Plattform für jeden der glücklicher, erfolgreicher und gesünder sein möchte!"
            description="Die Glückszentrum-Online-Hilfe ermöglicht preisgünstig<br><u>professionelles COACHING mit psychologischer BERATUNG,</u><br>bei Problemen, Fragen und zur Zielerreichung!"
            svgIcon="121-favourite"
            cssClass="single-icon-outside-2"/>
        <GapComponent responsiveConfig="0-50" />
        <ImageSlider
            :images="imageSliderImages"
            :screenConfig="imageSliderScreenConfig"
            :autoplayDuration="imageSliderAutoplayDuration"
            cssClass="custom-slider-class"
        />
        <GapComponent responsiveConfig="0-50" />
        <h3 class="g-style-accent">Mit Freude morgens aufwachen ...</h3>
        <GapComponent responsiveConfig="0-10" />
        <Separator length="150px" thickness="1px"/>
        <GapComponent responsiveConfig="0-10" />
        <p class="g-style-text">… dies und vieles mehr ist mit Coaching erreichbar:</p>
        <GapComponent responsiveConfig="0-30" />
        <div class="row">
          <div class="col col-12 col-sm-6 col-lg-3"><IconBox title="Mehr Freude und Glücksbewusstsein" svgIcon="139-human-brain" cssClass="single-icon-inside"/></div>
          <div class="col col-12 col-sm-6 col-lg-3"><IconBox title="Mehr Erfüllung und Zielerreichung" svgIcon="153-target" cssClass="single-icon-inside"/></div>
          <div class="col col-12 col-sm-6 col-lg-3"><IconBox title="Mehr Selbstliebe und Harmonie" svgIcon="121-favourite" cssClass="single-icon-inside"/></div>
          <div class="col col-12 col-sm-6 col-lg-3"><IconBox title="Mehr Gesundheit und Vitalität" svgIcon="108-firework" cssClass="single-icon-inside"/></div>
        </div>
      </div>
    </AreaComponent>
    <AreaComponent>
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6">
            <h2 class="g-style-h2">Hier bist du richtig, wenn ...</h2>
            <GapComponent responsiveConfig="0-10" />
            <Separator length="150px" thickness="1px" alignment="left"/>
            <GapComponent responsiveConfig="0-30" />
            <p class="g-style-text">Hinter allen scheinbar unüberwindbaren Problemen liegen verborgene Lösungsmöglichkeiten. Nur leider stehen oft hinderliche Denk- und Verhaltensmuster aus dem Unterbewusstsein im Wege.</p>
            <GapComponent responsiveConfig="0-15" />
            <p class="g-style-text">Du musst nicht im Alleingang kämpfen, um deine Hürden zu überwinden! Es ist auch ein Zeichen von Stärke, Hilfe anzunehmen und sich auf den Pfad des persönlichen Wachstums zu begeben.</p>
            <GapComponent responsiveConfig="0-15" />
            <p class="g-style-text">Wenn du schon einiges gelesen, gegrübelt und versucht hast, um deine Wünsche zu erfüllen, es bisher jedoch noch nicht geschafft hast, dann bist du bei uns genau richtig.</p>
            <GapComponent responsiveConfig="0-15" />
            <p class="g-style-text">Hier kannst du dich professionell und anonym unterstützen lassen (ohne dass du das beim Arbeitgeber oder bei Versicherungen angeben musst).</p>
            <GapComponent responsiveConfig="0-15" />
            <p class="g-style-text">Möchtest du genauso lebensverändernd, wie ein Spitzensportler gecoacht werden, nur weit preisgünstiger? Dann wähle jetzt deinen Coach aus!</p>
          </div>
          <div class="col col-12 col-lg-6">
            <div class="g-style-img-centered g-style-img-centered__300">
              <img src="@img/chat_01-768x1391.png" alt="Glüchszetrum">
            </div>
          </div>
        </div>
      </div>
    </AreaComponent>
    <AreaComponent class="bg-color-white">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6">
            <div class="g-style-img-centered g-style-img-centered__300">
              <img src="@img/chat_02-768x1391.png" alt="Glüchszetrum">
            </div>
          </div>
          <div class="col col-12 col-lg-6">
            <h2 class="g-style-h2">Was ist Coaching?</h2>
            <GapComponent responsiveConfig="0-10" />
            <Separator length="150px" thickness="1px" alignment="left"/>
            <GapComponent responsiveConfig="0-30" />
            <p class="g-style-text">Coaching hilft dir dabei, dein volles Potenzial zu entfalten.</p>
            <GapComponent responsiveConfig="0-15" />
            <p class="g-style-text">Im Coaching des Glückszentrums unterstützen dich vielseitig ausgebildete Experten effektiv bei der Lösung unterschiedlichster Probleme und bei der Erreichung deiner individuellen Ziele – sei es im beruflichen oder persönlichen Bereich:</p>
            <GapComponent responsiveConfig="0-15" />
            <p class="g-style-text">Ganz gleich, ob es um das Bewältigen von Krisen geht, um:</p>
            <GapComponent responsiveConfig="0-15" />
            <p class="g-style-text"></p>
            <GapComponent responsiveConfig="0-15" />
            <p class="g-style-text"><i><b>Entscheidungshilfen, Beziehungsprobleme, Konfliktbewältigung, Kommunikationsproblemen, Emotionen, Stress, Stimmungsschwankungen, Enttäuschung, Frustration, Veränderungsprozesse, Karriereplanung, finanzielle Erfolge, Verbesserung der beruflichen Fähigkeiten, Sinnfindung oder Ähnlichem.</b></i></p>
            <GapComponent responsiveConfig="0-15" />
            <p class="g-style-text"><b>Coaching basiert auf WISSENSCHAFTLICH anerkannten Methoden und hilft sich selbst zu reflektieren, hinderliche Denk- und Verhaltensmuster zu erkennen und durch positive zu ersetzen. Insbesondere können im Unterbewusstsein gespeicherte Blockaden gelöst und zielführende Fähigkeiten entwickelt werden.</b></p>
            <GapComponent responsiveConfig="0-15" />
          </div>
        </div>
      </div>
    </AreaComponent>
    <AreaComponent class="has-bg-left-center-cover-no-repeat" :bgImgSrc="AreaBg01">
      <div class="container">
        <div class="row">
          <div class="col col-12">
            <div class="user-style-3">
              <h2 class="g-style-h2 g-style-text-center">Lass nicht zu, dass die Umstände über dich bestimmen!</h2>
              <GapComponent responsiveConfig="0-30" />
              <p class="g-style-text g-style-text-center">Nutze diese unkomplizierte Gelegenheit, der professionellen Unterstützung für dein glücklicheres Leben!</p>
              <GapComponent responsiveConfig="0-30#992-50" />
              <p class="g-style-text-center g-style-hand">Von Frust zu Lebenslust!</p>
              <GapComponent responsiveConfig="0-50" />
              <BtnCtaIcon
                  link="/coaches"
                  target="_blank"
                  clickText="Entdecke jetzt deinen professionellen Coach"
                  svgIcon="pfeil-02"
                  cssClass="use-pfeil-02"
              />
            </div>
          </div>
        </div>
      </div>
    </AreaComponent>
  </div>
</template>

<style scoped lang="scss">
.user-style-1{
  font-weight: 600;
  font-family: $font-family-playfair;
  color:$color-accent;
  @include responsive-headline($font-xxl, $font-xxl);
  ::v-deep(small){
    display: block;
    & {
      @include responsive-headline($font-lg, $font-lg);
    }
  }
}

.user-style-2{
  p{
    text-align: center;
    font-family: $font-family-montserrat;
    font-weight: 600;
    color: $color-accent;
    font-size:$font-accent;
    &:last-of-type{
      font-weight: 700;
    }
  }
}

.user-style-3{
  text-align: center;
  max-width: $break-point-tablets-landscape;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
}

.user-style-4{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

}


</style>