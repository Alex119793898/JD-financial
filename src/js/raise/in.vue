<template>
  <Panel title="In货推荐" :class="$style.panel">
    <section :class="$style.item" v-for="item in items" :key="item.catery">
      <img :src="item.catery" alt />
      <section :class="$style.list">
        <div :class="$style.product" v-for="pro in item.list" :key="pro.src">
          <img :src="pro.src" alt />
          <p :class="$style.title">{{pro.title}}</p>
          <p :class="$style.price">
            <em>{{pro.price}}</em>起
          </p>
          <article>
            <div :class="$style.wrapper">
              <div :class="$style.inner" :style="{width : pro.progress}"></div>
            </div>
            <p>{{pro.progress}}</p>
          </article>
          <label>精选</label>
        </div>
      </section>
    </section>
  </Panel>
</template>

<script>
import Panel from '../core/panel';
export default {
  components: {
    Panel
  },
  data () {
    return {
      items: [
        {
          catery:
            '//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
          list: [
            {
              src:
                'https://img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg',
              title: '双响炮蓝牙音箱',
              price: '29.00',
              progress: '120%'
            },
            {
              src:
                'https://img30.360buyimg.com/cf/s250x250_jfs/t15529/308/632300625/135123/adb9c6d0/5a37676dNc31da9ea.jpg',
              title: '脑波相机',
              price: '998.00',
              progress: '79%'
            }
          ]
        },
        {
          catery:
            '//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
          list: [
            {
              src:
                'https://img30.360buyimg.com/cf/s250x250_jfs/t11257/287/2281727659/55759/e00b90a/5a138f21N32dca834.jpg',
              title: '智能电动牙刷',
              price: '19.00',
              progress: '60%'
            },
            {
              src:
                'https://img30.360buyimg.com/cf/s250x250_jfs/t14209/293/662014092/61635/bba5c330/5a33a983N077cac56.jpg',
              title: '烟草加热电子烟',
              price: '258.00',
              progress: '168%'
            }
          ]
        },
        {
          catery:
            '//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
          list: [
            {
              src:
                'https://img30.360buyimg.com/cf/s250x250_jfs/t15007/47/884045069/149879/17987250/5a3cb182N15868ea1.jpg',
              title: '赖公高淮封藏老酒',
              price: '99.00',
              progress: '95%'
            },
            {
              src:
                'https://img30.360buyimg.com/cf/s250x250_jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg',
              title: '泗洪花雕醉蟹',
              price: '58.00',
              progress: '89%'
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  .item {
    padding-bottom: 1rem;
    img {
      display: block;
      width: 100%;
    }
    .list {
      @include list(row);
      .product {
        width: 50%;
        height: 9.9rem;
        text-align: center;
        position: relative;
        img {
          width: 4.5rem;
          height: 4.5rem;
          margin: 1.1rem auto 0.5rem;
        }
        .title {
          font-size: 0.7rem;
          color: #444;
        }
        .price {
          font-size: 0.5rem;
          font-weight: 900;
          height: 1.2rem;
          line-height: 1.2rem;
          color: #999;
          em {
            font-size: 0.9rem;
            color: #ff3232;
            margin-right: 0.1rem;
          }
        }
        article {
          @include list(row);
          align-items: center;
          justify-content: space-around;
          height: 0.75rem;
          line-height: 0.75rem;
          margin-top: 0.4rem;
          padding: 0 0.5rem;
          .wrapper {
            width: 3.6rem;
            height: 0.25rem;
            background: #f6e6e6;
            border-radius: 0.55rem;
            .inner {
              max-width: 100%;
              height: 0.25rem;
              background-image: linear-gradient(270deg, #f55 1%, #ff9c31 100%);
              border-radius: 0.55rem;
            }
          }
          p {
            font-size: 0.6rem;
            color: #999;
          }
        }
        label {
          position: absolute;
          left: 0;
          top: 0;
          background: #ddd;
          font-size: 0.5rem;
          color: #ff0000;
          text-align: center;
          padding: 0.1rem 0.2rem;
        }
      }
    }
  }
}
</style>
