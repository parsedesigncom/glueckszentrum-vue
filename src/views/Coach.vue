<script>
import AreaComponent from "@/components/widget/AreaComponent.vue";
import BtnCtaIcon from "@/components/widget/BtnCtaIcon.vue";
import BulletPoint from "@/components/widget/BulletPoint.vue";
import { ref, onMounted } from 'vue';
import { useCoaches } from '@/composables/useCoaches';
import GapComponent from "@/components/widget/GapComponent.vue";
import HeroHeaderSlot from "@/components/widget/HeroHeaderSlot.vue";
import Separator from "@/components/widget/Separator.vue";

export default {
  name: 'Coach',
  props: ['id'],
  components: {
    AreaComponent,
    BulletPoint, BtnCtaIcon,
    GapComponent,
    HeroHeaderSlot,
    Separator
  },
  setup(props) {
    const {coachDetails, isLoading, error, fetchCoachDetails} = useCoaches();
    const hours = ref(Array.from({ length: 24 }, (_, i) => i)); // Stunden-Array für die Zeitreihe
    const days = ref(Array.from({ length:7 }, (_, i) => i)); // Stunden-Array für die Zeitreihe

    const timeSlots = {
      morning: [6, 7, 8, 9],
      late_morning: [10, 11],
      midday: [12, 13],
      afternoon: [14, 15, 16, 17],
      evening: [18, 19, 20, 21],
      night: [22, 23, 0, 1, 2, 3, 4, 5],
    };
    const isAvailable = (day, hour, weekdayAvailability, weekendAvailability) => {
      // Hilfsfunktion: Prüft, ob die Stunde in einem bestimmten Zeitfenster liegt
      const isInTimeSlot = (slot) => timeSlots[slot]?.includes(hour);

      // Wochentage: Montag bis Freitag (day: 0-4)
      if (day <= 4) {
        for (let zone of weekdayAvailability) {
          if (isInTimeSlot(zone)) {
            return true;
          }
        }
      } else {
        // Wochenende: Samstag und Sonntag (day: 5, 6)
        for (let zone of weekendAvailability) {
          if (isInTimeSlot(zone)) {
            return true;
          }
        }
      }
      return false;
    };


    const formatTime = (hour) => `${hour}:00`;

    onMounted(() => {
      fetchCoachDetails(props.id);
    });

    return {
      coachDetails,
      isLoading,
      error,
      hours,
      days,
      formatTime,
      isAvailable
    };
  },
};
</script>

<template>
  <div class="view-coach">
    <p v-if="isLoading">Loading...</p>
    <p v-if="error" class="error">{{ error }}</p>
    <div v-if="coachDetails">
      <HeroHeaderSlot
          :imgSrc="coachDetails?.vip_eberl_coach_image"
          :imgAlt="coachDetails?.vip_eberl_coach_pseudonym_displayname"
          cssClass="use-in-coach-page"
      >
        <GapComponent responsiveConfig="0-30#992-0" />
        <h1 class="g-style-h2 g-style-text-gold g-style-text-left">{{coachDetails.vip_eberl_coach_pseudonym_displayname}}</h1>
        <GapComponent responsiveConfig="0-15" />
        <p class="g-style-text-accent g-style-text-left">{{coachDetails.vip_eberl_coach_profession}}</p>
        <GapComponent responsiveConfig="0-30" />
        <BtnCtaIcon
            link="/coaches"
            target="_blank"
            clickText="Coaching starten"
            cssClass=""
        />
      </HeroHeaderSlot>
      <AreaComponent cssClass="bg-color-white">
        <div class="container">
          <div class="row">
            <div class="col col-12 col-xl-7">
              <h2 class="g-style-accent">Was ich dir biete:</h2>
              <GapComponent responsiveConfig="0-10" />
              <Separator length="150px" thickness="1px" alignment="left"/>
              <GapComponent responsiveConfig="0-30" />
              <div class="g-style-text">
                {{coachDetails.vip_eberl_coach_description}}
              </div>
              <GapComponent responsiveConfig="0-50" />
              <AreaComponent cssClass="use-as-insider-box">
                <h3>Coaching-Themen:</h3>
                <GapComponent responsiveConfig="0-10" />
                <ul class="g-ul-listing-inline g-style-text">
                  <li v-for="(item, index) in coachDetails.vip_eberl_coach_coaching_topics" :key="item">
                    {{ coachDetails.vip_eberl_coach_coaching_topics_mapping[item] || item }}<span v-if="index < coachDetails.vip_eberl_coach_coaching_topics.length - 1">,</span><span v-else>.</span>
                  </li>
                </ul>

              </AreaComponent>
              <GapComponent responsiveConfig="0-50" />
              <AreaComponent cssClass="use-as-insider-box">
                <h3>Coaching-Methoden:</h3>
                <GapComponent responsiveConfig="0-10" />
                <ul class="g-ul-listing-inline g-style-text">
                  <li
                      v-for="(itemMapping, indexMapping) in Object.keys(coachDetails.vip_eberl_coach_coaching_methods_mapping)"
                      :key="itemMapping"
                  >
                    {{ coachDetails.vip_eberl_coach_coaching_methods_mapping[itemMapping] || itemMapping }}<span v-if="indexMapping < Object.keys(coachDetails.vip_eberl_coach_coaching_methods_mapping).length - 1">,</span><span v-else>.</span>
                  </li>
                </ul>
              </AreaComponent>

            </div>
            <div class="col col-12 col-xl-1"></div>
            <div class="col col-12 col-xl-4">
              <GapComponent responsiveConfig="0-50#1200-0" />
              <AreaComponent cssClass="use-as-insider-box">
                <div class="calendar-holder">
                  <h3>Zeitliche Verfügbarkeit</h3>
                  <GapComponent responsiveConfig="0-10" />
                  <p class="g-style-text">
                    Die angegebenen Zeiten sind unverbindlich. Bei der ersten Kontaktaufnahme vereinbart ihr gemeinsam einen Termin für die Erstberatung. Bitte beachte, dass eine direkte Terminbuchung über die angezeigte Übersicht noch nicht möglich ist.
                  </p>
                  <GapComponent responsiveConfig="0-30" />
                  <div class="_calendar">
                    <div class="time-row">
                      <div class="day-label"></div>
                      <div class="day-label">Mo.</div>
                      <div class="day-label">Di.</div>
                      <div class="day-label">Mi.</div>
                      <div class="day-label">Do.</div>
                      <div class="day-label">Fr.</div>
                      <div class="day-label">Sa.</div>
                      <div class="day-label">So.</div>
                    </div>
                    <!-- Generierung der Stunden- und Tageszellen -->
                    <div
                        v-for="hour in hours"
                        :key="hour"
                        :class="['time-row']"
                    >
                      <div class="time-label">{{ formatTime(hour) }}</div>
                      <div
                          v-for="day in days"
                          :key="day"
                          :class="['day-cell', { available: isAvailable(day, hour, coachDetails.vip_eberl_coach_mo_to_fr, coachDetails.vip_eberl_coach_sa_to_su) }]"

                      ></div>
                    </div>
                  </div>
                </div>
              </AreaComponent>
            </div>
          </div>
        </div>
      </AreaComponent>
      <HeroHeaderSlot
          :imgSrc="coachDetails?.vip_eberl_coach_image"
          :imgAlt="coachDetails?.vip_eberl_coach_pseudonym_displayname"
          cssClass="center-mode-ever bg-is-gold-light"
      >
        <GapComponent responsiveConfig="0-30" />
        <h2 class="g-style-h2 g-style-text-gold">{{coachDetails.vip_eberl_coach_pseudonym_displayname}}</h2>
        <GapComponent responsiveConfig="0-15" />
        <p class="g-style-text-accent">{{coachDetails.vip_eberl_coach_profession}}</p>
        <GapComponent responsiveConfig="0-50" />
        <div class="g-container-center">
          <BtnCtaIcon
              link="/coaches"
              target="_blank"
              clickText="Coaching starten"
              cssClass="use-pfeil-02"
              svgIcon="pfeil-02"
          />
        </div>
      </HeroHeaderSlot>
    </div>


  </div>
</template>

<style lang="scss" scoped>
.calendar-holder{
  font-family: $font-family-montserrat;
  flex: 1 1 40%;
  box-sizing: border-box;
  font-size: $font-text-small;
  ._calendar {
    display: grid;
    grid-template-columns: 50px repeat(7, 1fr);
    gap: 5px;
    width: 100%;
    .time-row {
      display: contents;
      .time-label {
        text-align: right;
        padding-right: 5px;
      }
      .day-label{
        font-weight: bold;
        text-align: center;
      }
      .day-cell {
        width: 100%;
        height: 20px;
        background-color: #e6e6e6; /* Light grey for unavailable times */
        border: 1px solid #eee;
        &.available{
          background-color: #81a51c; /* Green for available times */
        }
      }
    }
  }
}
</style>
