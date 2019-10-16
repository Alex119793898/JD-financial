<template>
  <div :class="$style.header">
    <span :class="$style.left"><em>注册</em>&nbsp;|&nbsp;<em>登录</em></span>
    <btn :class="$style.btnDownload">APP下载</btn>
  </div>
</template>

<script>
import btn from '../core/btn.vue'
export default {
  components: {
    btn
  }
}
</script>

<style lang="scss" module>
.header {
  color:#666;
  height: 2.5rem;
  line-height: 2.5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: 0.8rem;
  background: #fff url('//m.jr.jd.com/spe/qyy/main/images/jr-logo.png') center center no-repeat;
  background-size: auto 50%;
  z-index: 100;
  .left {
    font-size: 0.7rem;
    height: 0.75rem;
    line-height: 0.75rem;
    margin: 17px 0 0 18px;
  }
  .btnDownload {
    float: right;
    font-size: 0.6rem;
    border-width: 0;
    height: 1.4rem;
    line-height: 1.4rem;
    min-width: 3rem;
    padding: 0;
    border-radius: 0.1rem;
    margin: 0.6rem 0.6rem 0 0;
  }
}
</style>
