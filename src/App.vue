<template>
  <section v-if="weeklyData" class="main">
    <div v-if="!selected" class="welcome-general">
      <div class="welcome-top">Welcome!</div>
      <div class="welcome-bottom">Overview of you activity</div>
    </div>

    <div v-else class="top-info">
      <div class="icon" @click="toOverview">
        <i class="material-icons">arrow_back_ios</i>
      </div>
      <div class="date">
        <div class="date-top">{{dayInWeek}}</div>
        <div class="date-bottom">{{dateCustom}}</div>
      </div>      
    </div>

    <qt-weekly :weeklyData="weeklyData" v-model="selected" />

    <router-view />
  </section>
</template>

<script>
import moment from 'moment'

import trackerData from '@/mixins/trackerData'

import Weekly from '@/components/Weekly'

export default {
  name: 'app',

  data() {
    return {
      selected: null
    }
  },

  components: {
    'qt-weekly': Weekly
  },

  methods: {
    toOverview() {
      this.selected = null
    }
  },

  mixins: [trackerData],

  watch: {
    selected(val) {
      if (val === null) {
        this.$router.push({ path: '/overview' })
        return
      }
      this.dayInWeek = moment(val.date).format('dddd')
      this.dateCustom = moment(val.date).format('MMMM DD, YYYY.')
      this.$router.push({ path: `/overview/${val.date.getDay()}` })
    }
  }
}
</script>

<style lang="sass">
@import '@/styles/main.sass'

.main
  text-align: center
  padding: 20px 17px 0px 18px

  .welcome-general,
  .top-info
    border-radius: $big-border-radius
    padding: 26px
    text-align: left

  .welcome-general
    background-color: $color-white

    .welcome-top
      font-size: 34px
      color: $color-green
      font-weight: $font-bold
      margin-bottom: 12px

    .welcome-bottom
      font-size: 16px
      color: $color-dark-grey

  .top-info
    background-color: $bg-color
    display: flex
    align-items: center

    .icon
      color: $color-white
      padding-right: 12px

    .date  
      .date-top
        font-size: 34px
        color: $color-white
        font-weight: $font-bold
        margin-bottom: 12px

      .date-bottom
        font-size: 16px
        color: $color-light-grey

</style>
