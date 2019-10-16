<template lang="html">
  <div>
    <Header></Header>
    <h-slider></h-slider>
    <Fuli></Fuli>
    <Service></Service>
    <Footer></Footer>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Header from '../public/header'
import hSlider from './iousslide'
import Fuli from './fuli'
import Service from './service'
import Footer from '../public/footer'
import Navbar from '../public/navbar'
export default {
  components: {
    Header,
    hSlider,
    Fuli,
    Service,
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
