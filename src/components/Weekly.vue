<template>
  <ul>
    <li v-for="(value, name) in weeklyData" v-bind:key="name" @click="setActive(name)" v-bind:class="{active: currentActive === name[0]}">
      <div>{{name.slice(0, 1)}}</div>
      <div>{{name.slice(2, 5)}}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Weekly',

  data() {
    return {
      currentActive: null
    }
  },

  props: {
    value: Object,
    weeklyData: Object
  },

  methods: {
    setActive(name) {
      if (this.currentActive === name[0]) {
        this.currentActive = null
        this.$emit('input', null)
      } else {
        this.currentActive = name[0]
        this.$emit('input', this.weeklyData[name])
      }
    }
  },

  watch: {
    value(val) {
      if (!val) {
        this.currentActive = null
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/base/_variables.sass'

ul
  list-style: none
  padding: 0
  margin: 26px 0
  display: flex
  flex-direction: row
  justify-content: space-between

  li
    display: flex
    flex-direction: column
    align-items: center
    justify-content: space-around
    width: 40px
    height: 40px
    background-color: $bg-color
    color: $color-light-grey
    border-radius: $small-border-radius
    padding: 10px
    text-transform: uppercase

    &.active
      color: $color-green
      background-color: $color-white
      box-shadow: $box-shadow
      transition: all 0.3s ease-out

</style>
