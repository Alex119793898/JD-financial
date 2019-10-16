<template lang="html">
  <div>
    <Header></Header>
    <r-slider></r-slider>
    <Daily></Daily>
    <In></In>
    <More></More>
    <Footer></Footer>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Header from '../public/header'
import rSlider from './raiseslider'
import Daily from './daily'
import In from './in'
import More from './more'
import Footer from '../public/footer'
import Navbar from '../public/navbar'
export default {
  components: {
    Header,
    rSlider,
    Daily,
    In,
    More,
    Footer,
    Navbar
  }
}
</script>

<style lang="scss" module>
  @import '../../css/reset.scss';
  .home{
    color: red;
    font-size: 20px;
  }
</style>
