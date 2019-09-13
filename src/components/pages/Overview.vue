<template>
  <section v-if="weeklyData">
    <qt-section icon="timer" title="Activity" subtitle="Average" :value="averageTimeSpent" />

    <qt-section icon="directions_run" title="Steps" subtitle="Total" :value="totalSteps" />

    <qt-section icon="whatshot" title="Calories" subtitle="Total Burned" :value="totalCalories" />
  </section>
</template>

<script>
import Section from '@/components/Section'

import trackerData from '@/mixins/trackerData'

export default {
  name: 'Overview',

  components: {
    'qt-section': Section
  },

  mixins: [trackerData]
}
</script>

<style lang="sass" scoped>
</style>
