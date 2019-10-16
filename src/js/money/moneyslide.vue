<template>
  <article>
    <Slider :items="items" :cname="$style.slider"></Slider>
  </article>
</template>

<script>
import Slider from '../core/slide.vue';
export default {
  components: {
    Slider
  },
  data () {
    return {
      items: [
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400'
        },
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400'
        },
        {
          href: 'home',
          src:
            '//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400'
        }
      ]
    };
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.slider {
  margin-top: 3rem;
  img{
      width: 100%;
  }
}
.list {
  @include list(row);
  background: #fff;
  justify-content: space-around;
  padding: 1rem 0 0.5rem;
  a {
    text-decoration: none;
  }
  .item {
    text-align: center;
    img {
      display: inline-block;
      width: 2.25rem;
      height: 2.25rem;
    }
    h4 {
      font-size: 0.65rem;
      margin-top: 0.3rem;
      color: #666;
    }
  }
}
</style>
