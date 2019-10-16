<template>
  <section :class="$style.container">
      <div :class="$style.content">
          <div></div>
          <p>立即下载</p>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" module>
    @import '../../css/element.scss';
    .container{
        .content{
            @include list;
            align-items: center;
            justify-content: space-around;
            width: 100%;
            div{
                width: 15rem;
                height: 20rem;
                background:url('https://img12.360buyimg.com/jrpmobile/jfs/t8956/285/1249806938/50853/8cd3c8f0/59b65f36N05367075.png?') center center no-repeat;
                background-size: 100% auto;

            }
            p{
                height: 2.5rem;
                line-height: 2.5rem;
                width: 11.775rem;

                padding:0.125rem;
                background-color: #F1443E;
                text-align: center;
                font-size: 0.8rem;
                color: #fff;

                border: 0.025rem solid #F1443E;
                border-radius: 0.125rem;
                background-image: linear-gradient(270deg,#F55C33 0,#EE2D1B 75%);
                box-shadow: 0 0.3rem 0.8rem 0 rgba(255,159,153,0.6);

                position: fixed;
                bottom: 3.25rem;
            }
        }
    }
</style>
