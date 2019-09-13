<template>
  <section>
    <div class="icon">
      <i class="material-icons">{{icon}}</i>
    </div>
    <div class="section">
      <div class="section-about">
        <div class="title">{{title}}</div>
        <div class="subtitle">{{subtitle}}</div>
      </div>
      <div class="section-content">{{value}}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Section',

  props: {
    icon: String,
    title: String,
    subtitle: String,
    value: String
  }
}
</script>

<style lang="sass" scoped>
@import '@/styles/base/_variables.sass'

section
  display: flex
  flex-direction: row
  border-radius: $big-border-radius
  padding: 12px 20px
  background-color: $bg-color
  margin-bottom: 18px
  color: $color-white

  .icon
    margin: 14px 14px 0 0
    display: flex
    justify-content: center
    flex-shrink: 0
    align-items: center
    width: 40px
    height: 40px
    border-radius: 20px
    background-color: $bg-color
    color: $color-white

  .section
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-between
    width: 100%

    .section-about
      text-align: left
      flex-wrap: wrap
      margin-right: 30px
      padding: 12px 16px 12px 0

      .title
        font-size: 20px
        margin-bottom: 5px

      .subtitle
        color: $color-light-grey

    .section-content
      font-size: 38px
      font-weight: $font-bold
      white-space: nowrap
      padding: 12px 0

</style>
