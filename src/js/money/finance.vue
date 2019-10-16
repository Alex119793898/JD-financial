<template>
  <Panel title="理财精选" :class="$style.panel">
      <section :class="$style.content">
          <div :class="$style.item" v-for="item in items" :key="item.src">
              <img :src="item.src" alt="">
              <div>
                  <h4>{{item.title}}</h4>
                  <p>{{item.desc}}</p>
              </div>
              <em>去赚钱 ></em>
          </div>
      </section>
  </Panel>
</template>

<script>
import Panel from '../core/panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      items: [
        {
          src: '//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76',
          title: '月度理财',
          desc: '预期年化收益率4.50%'
        },
        {
          src: '//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76',
          title: '季度理财',
          desc: '历史年化回报率5.50%'
        },
        {
          src: '//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76',
          title: '一年理财',
          desc: '历史年化回报率5.80%'
        }
      ]
    }
  }
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
    .panel{
        >h4{
            border-bottom: 1px solid #ddd;
        }
        .content{
            .item{
                @include list(row);
                align-items: center;
                height: 3.5rem;
                img{
                    display: inline-block;
                    width: 2.2rem;
                    height: 2.2rem;
                    margin: 0 0.8rem;
                }
                div{
                    font-size: 0.8rem;
                    line-height: 1.8;
                    width: 8.6rem;
                    color: #333;
                    p{
                        font-size: 0.6rem;
                        line-height: 1.1;
                        color:#ff3232;
                    }

                }
                em{
                    font-size: 0.7rem;
                    color: #FF801A;
                }
                &:after{
                        content:' ';
                        height: 0;
                        width: 100%;
                        border-bottom: 1px solid #ddd;
                        margin-left: 3.75rem;
                    }
                &:last-child{
                    &:after{
                        display: none;
                    }
                }
            }
        }
    }
</style>
