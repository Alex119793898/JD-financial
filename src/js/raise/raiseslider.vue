<template>
  <Panel title="金融头条" :class="$style.panel">
      <section :class="$style.content">
          <swiper :options="options">
              <swiper-slide>百万白条券免费送，速来领取！！<em>></em></swiper-slide>
              <swiper-slide>签到领流量，1元500M！<em>></em></swiper-slide>
          </swiper>
      </section>
  </Panel>
</template>

<script>
import Panel from '../core/panel'
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  components: {
    Panel,
    swiper,
    swiperSlide
  },
  props: {
    options: {
      type: Object,
      default () {
        return {
          autoplay: 2000,
          loop: true,
          direction: 'vertical'
        }
      }
    }
  }
}
</script>

<style lang="scss" module>
    .panel{
        margin-top: 3rem !important;
        >h4{
            display: none;
        }
        .content{
            height: 1.8rem;
            line-height: 1.8rem;
            overflow: hidden;
            padding-left: 4.45rem;
            background: url('//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png') top left no-repeat;
        }
    }
</style>

<style lang="scss">
    .swiper-container{
        .swiper-slide{
            font-size: 0.7rem;
            color: #333;
            em{
                color: #ddd;
                float: right;
                margin-right: 20px;
            }
        }
    }
</style>
