<template lang="html">
  <div>
    <Header></Header>
    <h-slider></h-slider>
    <Novice></Novice>
    <Borrow></Borrow>
    <Money></Money>
    <Product></Product>
    <Life></Life>
    <Footer></Footer>
    <Navbar></Navbar>
  </div>
</template>

<script>
import Header from '../public/header'
import hSlider from './homeslide'
import Novice from './novice'
import Borrow from './borrow'
import Money from './money'
import Product from './product'
import Life from './life'
import Footer from '../public/footer'
import Navbar from '../public/navbar'
export default {
  components: {
    Header,
    hSlider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
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
