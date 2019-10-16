<template lang="html">
  <div>
    <Header></Header>
    <m-slider></m-slider>
    <Ada></Ada>
    <Money></Money>
    <Adb></Adb>
    <Finance></Finance>
    <Adc></Adc>
    <Footer cname="mfooter"></Footer>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Header from '../public/header';
import mSlider from './moneyslide';
import Ada from './ada';
import Money from './money';
import Adb from './adb';
import Finance from './finance';
import Adc from './adc';
import Footer from '../public/footer';
import Navbar from '../public/navbar';
export default {
  components: {
    Header,
    mSlider,
    Ada,
    Adb,
    Money,
    Finance,
    Footer,
    Adc,
    Navbar
  }
};
</script>

<style lang="scss" module>
@import "../../css/reset.scss";
.home {
  color: red;
  font-size: 20px;
}
</style>

<style lang="scss">
.mfooter {
  ul {
    li {
      &:first-child {
        display: none;
      }
    }
  }
}
</style>
