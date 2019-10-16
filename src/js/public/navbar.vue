<template>
  <section :class="$style.navbar">
    <div :class="$style.content">
      <router-link to="/home">
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t3451/188/644771475/2428/800d7cb7/580f2435Nbfaa8055.png?width=66&height=66"
          alt
        />
        <p>首页</p>
      </router-link>

      <router-link to="/money">
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66"
          alt
        />
        <p>理财</p>
      </router-link>

      <router-link to="/ious">
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66"
          alt
        />
        <p>白条</p>
      </router-link>

      <router-link to="/raise">
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66"
          alt
        />
        <p>众筹</p>
      </router-link>
      <router-link to="/self">
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66"
          alt
        />
        <p>我的</p>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.navbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  height: 2.5rem;
  .content {
    @include list(row);
    justify-content: space-around;
    a {
      display: block;
      text-decoration: none;
    }
    img{
        width: 1.1rem;
        height: 1.1rem;
        margin: 0.3rem auto 0.15rem;
    }
    p{
        font-size: 0.55rem;
        color:#656565;
    }
  }
}
</style>
