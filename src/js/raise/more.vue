<template>
  <Panel :class="$style.panel" title="众筹福利">
      <section :class="$style.content">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330" alt="">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330" alt="">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330" alt="">
          <span>专享福利 ></span>
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
            padding-bottom: 1.5rem;
            position: relative;
            img{
                width: 33.3333%;
                display: block;
            }
            span{
                position: absolute;
                right: 30px;
                top:-74px;
                font-size: 0.7rem;
                color:#999;
            }
        }
    }
</style>
