<template>
  <div class="menu-bar">
    <div class="menu">
      <div class="menu-item">HOME</div>
      <div class="menu-item">ABOUT</div>
      <div class="menu-item"><a href="https://github.com/MRsoldiers">GITHUB</a></div>
      <div class="menu-item"><a href="./blog.html">BLOG</a></div>
      <div class="menu-item">PUBLICATIONS</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.menu-bar {
  width: calc(100%);
  height: 80px;

  .menu {
    position: relative;
    left: calc(50% - 400px);
    display: flex;
    height: calc(100%);
    width: 800px;
    line-height: 80px;

    .menu-item {
      position: relative;
      height: calc(100%);
      text-align: center;
      font-weight: 500;
      font-size: 1.3em;
      flex: 1;

      a {
        text-decoration: none !important;
        color: #333333 !important;
      }
    }
  }
}

.fixed {
  position: fixed !important;
  width: calc(100% - 17px) !important;
  z-index: 10;
  top: 0px;
  background-color: rgba(255,255,255,0.7) !important;
}

</style>
