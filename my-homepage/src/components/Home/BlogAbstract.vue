<template>
  <div class="blog-abstract">
    <article class="abstract">
      <header>
        <h2>{{theme}}</h2>
      </header>
      <section>
        <P>
          {{msgone}}
        </P>
        <p>
          {{msgtwo}}
        </p>
      </section>
      <footer>
        <p>
          Posted on
          <time>{{time}}</time>
          by Zikun Deng.
        </p>
      </footer>
      <div class="btn-div">
        <div class="btn"
          :class="{highlighted: isHightlighted}"
          @mouseleave="unHighlightBtn()"
          @mouseenter="highlightBtn()">
          Read more »
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: ['theme', 'msgone', 'msgtwo', 'time'],
  data () {
    return {
      isHightlighted: false
    }
  },
  methods: {
    highlightBtn: function () {
      this.isHightlighted = true
    },
    unHighlightBtn: function () {
      this.isHightlighted = false
    }
  }
}
</script>

<style lang="scss">
.abstract {
  margin-bottom: 100px;
  position: relative;
  width: calc(90%);
  left: calc(5%);

  header {
    text-align: center;
    color: #444444
  }

  footer {
    position: relative;
    height: 20px;
    width: calc(100%);
    font-size: 0.6em;
    font-weight: 300;

    p {
      float: right;
    }
  }

  .btn-div {
    position: relative;
    width: calc(100%);
    top: 20px;

    .btn {
      position: relative;
      text-align: center;
      width: 180px;
      height: 40px;
      line-height: 40px;
      font-size: 1.1em;
      border-radius: 5px;
      border: 2px solid #aaa;
      background-color: #ffffff;
      color: #333333;
      left: calc(50% - 90px - 2px);
      cursor: pointer;

      transition: all .3s;

      &.highlighted {
        border: 2px solid #fff;
        color: #fff;
        background-color: #333333;
      }
    }
  }
}
</style>
