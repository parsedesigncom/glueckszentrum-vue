<script>
import GapComponent from "@/components/widget/GapComponent.vue";
export default {
  name: "CoachBox",
  components: {
    GapComponent,
  },
  props: {
    coach: {
      type: Object,
      required: true,
    },
    cssClass: {
      type: String,
      default: '',
    }
  },
};
</script>

<template>
  <div :class="['component-holder-CoachBox', cssClass]">
    <div class="coach-item" :key="coach.ID">
      <div class="_name">
        <h3>{{coach.vip_eberl_coach_pseudonym_displayname}}</h3>
      </div>
      <div class="_area">
        <div class="_area-1">
          <img :src="coach.vip_eberl_coach_image" alt="{{coach.vip_eberl_coach_pseudonym_displayname}}" class="mb-2">
        </div>
        <div class="_area-2">
          <div class="_content">
            <div>{{coach.vip_eberl_coach_experience}}</div>
            <ul>
              <li>Spezialisiert:</li>
              <li v-for="item in coach.vip_eberl_coach_specialized_in" :key="index">{{ item.specialized_in_label }}</li>
            </ul>
          </div>
          <div class="_action">
            <GapComponent responsiveConfig="0-15" />
            <router-link :to="`/coach/${coach.ID}`" target="_blank" class="g-style-btn">
              Profil Coach
            </router-link>
            <router-link :to="`/start-chat/${coach.ID}`" target="_blank" class="g-style-btn _btn-is-reverse">
              Coaching starten
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.component-holder-CoachBox{
  .coach-item{
    padding: 3rem 0;
    border-top: 1px solid $color-text-gray;
    ._name{
      text-align: center;
      h3{
        box-sizing: border-box;
        font-size: 20px;
        font-weight: 600;
        margin: 0;
        padding: 0 0 1rem 0;
        color: $color-accent;
      }
      @media(min-width: $centered-width_small){
        text-align: left;
      }
    }
    ._area{
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      @media(min-width: $centered-width_small){
        flex-direction: row;
      }
      ._area-1{
        text-align: center;
        img{
          max-width: 150px;
          display: block;
          border-radius: 50%;
          margin: auto;
        }
        a{
          font-weight: 400;
          font-size: 18px;
          color: $color-accent;
        }
      }
      ._area-2{
        box-sizing: border-box;
        padding: 0 1rem;
        ._content{
          font-size: 15px;
          font-weight: 400;
          line-height: 1.5em;
          div{
            padding-bottom: 1rem;
          }
          ul{
            list-style: none;
            margin: 0;
            padding: 0;
            li{
              margin-left: 20px;
              position: relative;
              font-weight: 400;
              &:before{
                content: "-  ";
                font-size: 14px;
              }

              &:first-child{
                font-weight: 500;
                margin-left: 0;
                color: $color-accent;
                &:before{
                  display: none;
                }
              }

            }
          }
        }
        ._action{
          a{
            &:first-of-type{}
            &:last-of-type{
              margin-left: 20px;
            }
          }
        }
      }
    }
  }
}

</style>