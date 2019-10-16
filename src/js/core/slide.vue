<template lang="html">
    <section :class="cname">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="(item,index) in items" :key="index">
                <router-link :to="{name: item.href}">
                    <img :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </section>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')

export default {
  props: {
    options: {
      type: Object,
      default () {
        return {
          autoplay: 3000,
          loop: 1000,
          pagination: {
            el: '.swiper-pagination'
          },
          notNextTick: false
        }
      }
    },
    items: {
      type: Array,
      default () {
        return []
      }
    },
    cname: {
      type: String,
      default: ''
    }
  },
  components: {
    swiper,
    swiperSlide
  }

}
</script>
<style lang="scss" scoped>

</style>
