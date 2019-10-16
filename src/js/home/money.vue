<template>
  <Panel title="理财精选" :class="$style.panel">
      <section :class="$style.content">
          <dl :class="$style.item" v-for="item in items" :key="item.title">
              <dt>{{item.title}} <span>{{item.sub}}</span></dt>
              <dd>{{item.rate}}</dd>
              <dd>{{item.text}}</dd>
          </dl>
      </section>

  </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  components: {
    Panel
  },
  data () {
    return {
      items: [
        {
          title: '理财首选',
          sub: '理财首选',
          rate: '5.60%',
          text: '历史年化回报率'
        },
        {
          title: '小白理财',
          sub: '理财首选',
          rate: '4.22%',
          text: '7日年化收益率'
        },
        {
          title: '月月盈',
          sub: '养老保障',
          rate: '5%',
          text: '7日年化收益率'
        },
        {
          title: '小白基金',
          sub: '天天赚钱',
          rate: '4.27%',
          text: '7日年化收益率'
        }
      ]
    }
  }
}
</script>

<style lang="scss" module>
    @import '../../css/element.scss';
    .panel{
        .content{
            @include list(row);
            justify-content:space-around;
            &::after{
                content: ' ';
                display: block;
                width: 100%;
                height: 0;
                box-sizing: border-box;
                border-bottom: 0.025rem solid #eee;
                position: relative;
                top:-5.2rem;
            }
            .item{
                width: 50%;
                position: relative;
                padding:0.85rem 0.6rem;
                box-sizing: border-box;
                &::after{
                    content:' ';
                    width: 1px;
                    height: 136px;
                    display: block;
                    position: absolute;
                    top:50%;
                    right: 0;
                    margin-top: -68px;
                    border-right:1px solid #eee;
                }
                &:nth-child(2n){
                    &::after{
                        display: none;
                    }
                }
                dt{
                    font-size: 0.75rem;
                    line-height: 1.05rem;
                    color: #333;
                    span{
                        font-size: 0.55rem;
                        color:#ff5155;
                        border: 0.025rem solid #ff5155;
                        padding: 0 0.2rem;
                        margin-left: 0.05rem;
                        vertical-align: 0.025rem;
                    }
                }
                dd{
                    &:nth-child(2){
                        font-weight: 700;
                        font-size: 1.1rem;
                        height: 1.45rem;
                        line-height: 1.45rem;
                        color: #ff5155;
                    }
                    &:nth-child(3){
                        font-size: 0.6rem;
                        height: 0.85rem;
                        line-height: 0.85rem;
                        color: #999;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                }
            }
        }
    }
</style>
