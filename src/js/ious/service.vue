<template>
  <Panel title="更多服务" :class="$style.panel">
      <section :class="$style.content">
          <div :class="$style.item">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135" alt="">
              <p>小白卡</p>
          </div>
          <div :class="$style.item">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t5269/224/1031852465/12646/40e0f799/590aca55N22a6f274.png?width=135&height=135" alt="">
              <p>白条商城</p>
          </div>
          <div :class="$style.item">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t5095/216/1045040184/12370/564ae632/590ac7deN9a0eac2a.png?width=135&height=135" alt="">
              <p>消费分期</p>
          </div>
          <div :class="$style.item">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t8311/300/1385281399/9501/130a0046/59b8da06N14f62cf3.png?width=120&height=120" alt="">
              <p>借钱</p>
          </div>
          <div :class="$style.item">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135" alt="">
              <p>白条提额</p>
          </div>
          <div :class="$style.item">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t4417/98/4154366136/13785/5433ca92/590ac8afN5dd91d6e.png?width=135&height=135" alt="">
              <p>白条商城</p>
          </div>
          <div :class="$style.item">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t4453/75/4132459214/14188/939b7f34/590ac860N752d5738.png?width=135&height=135" alt="">
              <p>小白会玩</p>
          </div>
          <div :class="$style.item">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t5371/323/1038197138/12031/3ec72f6c/590aca20N089fd34a.png?width=135&height=135" alt="">
              <p>钢蹦</p>
          </div>
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
            .item{
                width: 4rem;
                height: 3.6rem;
                text-align: center;
                margin-bottom: 1rem;
                img{
                    width: 2.25rem;
                    height: 2.25rem;
                }
                p{
                    font-size: 0.65rem;
                    margin-top: 0.3rem;
                    color: #333;
                }
            }
        }
    }
</style>
