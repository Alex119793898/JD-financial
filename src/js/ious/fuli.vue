<template>
  <Panel title="白条福利" :class="$style.panel">
      <section :class="$style.content">
          <div :class="$style.item" v-for="item in items" :key="item.src">
              <img :src="item.src" alt="">
              <div>
                  <h4>{{item.title}}</h4>
                  <p>{{item.desc}}</p>
              </div>
              <em>{{item.text}}</em>
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
          src: '//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120',
          title: '开通白条',
          desc: '送188元礼包',
          text: '立即开通 >'
        },
        {
          src: '//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120',
          title: '白条闪付',
          desc: '新手享158元礼包',
          text: '随机立减 >'
        },
        {
          src: '//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120',
          title: '白条提额',
          desc: '金融app专享提额礼包',
          text: '去提额 >'
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
                height: 3.5rem;
                align-items: center;
                img{
                    width: 2.2rem;
                    height: 2.2rem;
                    margin:0 0.8rem;
                }
                div{
                    width: 7.6rem;
                    font-size: 0.8rem;
                    line-height: 1.8;
                    color:#333;
                    p{
                        font-size: 0.6rem;
                        color: #999;
                        line-height: 1.1;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                }
                em{
                    font-size: 0.7rem;
                    color:#FF801A;
                }
                &:after{
                    content:' ';
                    height: 0;
                    width: 100%;
                    display: block;
                    margin-left: 3.75rem;
                    border-bottom: 1px solid #ddd;
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
