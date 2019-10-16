<template>
  <Panel :class="$style.panel">
      <div :class="$style.content">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120" alt="">
      </div>
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
    .panel{
        >h4{
            display: none;
        }
        margin-bottom: 0;
        .content{
            img{
                width: 100%;
                display: block;
            }
        }
    }
</style>
