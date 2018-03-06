<template>
  <div class="menu-bar">
    <div class="menu">
      <div class="menu-item">HOME</div>
      <div class="menu-item">ABOUT</div>
      <div class="menu-item">GITHUB</div>
      <div class="menu-item">BLOG</div>
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
    left: calc(50% - 300px);
    display: flex;
    height: calc(100%);
    width: 600px;
    line-height: 80px;

    .menu-item {
      position: relative;
      height: calc(100%);
      text-align: center;
      font-size: 1.2em;
      flex: 1;
      cursor: pointer;
    }
  }
}

</style>
