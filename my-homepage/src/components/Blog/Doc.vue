<template>
  <div class="doc-view">
    <div class="doc-header">
      <span class="header-text">Selected Blog</span>
    </div>
    <div class="doc-content">
      <div class="title">
        {{doc.title}}
      </div>
      <div class="pic">
        <img :src='src'>
      </div>
      <div class="text">
        <div v-html="doc.content"></div>
      </div>
      <div class="ref">
        [1] {{doc.ref}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['doc'],
  computed: {
    src () {
      return require(`../../assets/${this.doc.pic}`)
    }
  }
}
</script>

<style lang="scss">
.doc-view {
  position: relative;
  width: calc(100%);

  .doc-header {
    position: relative;
    width: calc(100%);
    height: 39px;
    border-bottom: 1px solid #ddd;
    background-color: #f7f7f7;
    .header-text {
      padding-left: 10px;
      position: relative;
      height: calc(100%);
      line-height: 39px;
      color: #666;
    }
  }
  .doc-content {
    position: relative;
    padding: 15px;
    width: calc(100% - 30px);
    .title {
      height: 36px;
      // line-height: 36px;
      font-size: 18px;
      font-weight: 700;
      color: #333;
      font-family: Lato;
      text-align: center;
      margin: 10px 0 20px 0;
      word-wrap: break-word;
    }
    .pic {
      position: relative;
      width: 100%;
      img {
        position: relative;
        width: 100%;;
      }
    }
    .text {
      p {
        word-break: keep-all;
      }
    }
    .ref {
      font-size: 14px;
      color: #999;
    }
  }
}

</style>
