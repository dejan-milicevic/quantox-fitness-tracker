<template>
  <section class="activity-info" v-if="weeklyData">
    <div class="steps">
      <div class="icon">
        <i class="material-icons">directions_run</i>
      </div>
      <div class="steps-text">Steps</div>
      <div class="content">{{totalSteps}}</div>
    </div>

    <div class="support-note">
      <div class="small">Very good</div>
      <div class="large">Keep going!</div>
    </div>

    <div class="details">
      <div class="item">
        <div class="name">km</div>
        <div class="value">{{distance}}</div>
      </div>

      <div class="item">
        <div class="name">cal</div>
        <div class="value">{{calories}}</div>          
      </div>

      <div class="item">
        <div class="name">hours</div>
        <div class="value">{{hours}}</div>
      </div>
    </div>
  </section>
</template>

<script>
import trackerData from '@/mixins/trackerData'

export default {
  name: 'Detail',

  data() {
    return {
      steps: '',
      totalSteps: '',
      distance: '',
      calories: '',
      hours: ''
    }
  },

  mixins: [trackerData],

  methods: {
    getCurrent(id) {
      for (let key in this.weeklyData) {
        if (key.slice(0, 1) === id) {
          this.steps = this.weeklyData[key].totalSteps.toFixed(0)
          this.totalSteps = this.steps.split('').reverse().join('').match(/.{1,3}/g).join(',').split('').reverse().join('')
          this.distance = (this.steps * this.distancePerStep / 1000).toFixed(1)
          this.calories = (this.steps * this.caloriesPerStep).toFixed(0)
          this.hours = Math.ceil(this.steps * this.secondsPerStep / 360) / 10
        }
      }
    }
  },

  watch: {
    '$route.params.id'(val) {
      this.getCurrent(val)
    },

    weeklyData() {
      this.getCurrent(this.$route.params.id)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/base/_variables.sass'

.activity-info
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  border-radius: $big-border-radius
  padding: 12px 24px
  background-color: $color-white
  margin-bottom: 18px
  color: $color-black

  .steps
    width: 208px
    height: 208px
    border-radius: 116px
    border: 8px solid $color-green
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    margin-top: 30px

    .icon
      display: flex
      justify-content: center
      align-items: center
      width: 40px
      height: 40px
      border-radius: 20px
      background-color: lighten($color-secondary, 30)
      color: $color-white
      margin-bottom: 8px

    .steps-text
      font-size: 20px
      margin-bottom: 8px

    .content
      font-size: 48px
      font-weight: $font-bold
      margin-bottom: 40px

  .support-note
    margin-top: 30px

    .small
      font-size: 20px

    .large
      font-size: 40px
      font-weight: $font-bold

  .details
    display: flex
    width: calc(100% + 40px)
    margin: 70px -20px 30px -20px

    .item
      width: 33.33%
      border-right: 2px solid lighten($color-grey, 20%)

      &:last-of-type
        border: none

      .name
        font-size: 18px
        color: $color-grey
        font-weight: $font-medium

      .value
        font-size: 40px
        font-weight: $font-bold
        color: $color-green

</style>
