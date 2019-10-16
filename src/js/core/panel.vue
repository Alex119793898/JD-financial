<template>
  <section :class=[panelClass]>
    <h4>-{{title}}-</h4>
    <slot></slot>
  </section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      panelClass: 'panel'
    }
  }
}
</script>
<style lang="scss">
  @import '../../css/element.scss';
  .panel{
    @include panel;
  }

</style>
