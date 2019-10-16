<template>
  <Panel title="每日签到" :class="$style.panel">
      <section :class="$style.content">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160" alt="">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160" alt="">
          <p>不抢白不抢</p>
      </section>
  </Panel>
</template>

<script>
import Panel from '../core/panel'
export default {
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
    .panel{
        .content{
            @include list(row);
            position: relative;
            padding-bottom: 1rem;
            img{
                width: 8rem;
                height: 3.4rem;
            }
            p{
                position: absolute;
                top:-1.8rem;
                right:0.5rem;
                font-size: 0.7rem;
                color:#999;
            }
        }
    }
</style>
