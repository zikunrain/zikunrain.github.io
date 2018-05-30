<template>
  <div id="blog">
    <div class="blog-header">
      <span class="blog-header-font">
        Zikun Deng's Mini Blog
      </span>
    </div>
    <div class="blog-content">
      <div class="doc-title-list">
        <div class="doc-title-list-header">
          <span class="header-text">Document List</span>
        </div>
        <div class="doc-title-list-cont">
          <div class="doc-title" v-for="(t, index) in docTitles" :key="index"
            :title="t"
            @mouseenter="hoverTitle(index)"
            @mouseleave="hoverTitle(-1)"
            @click="selectDoc(index)"
            :class="{ hover: hoveringTitleIndex === index, selected: selectedDoc.title === t }">
            {{t}}
          </div>
        </div>
      </div>
      <div class="doc">
        <Doc :doc="selectedDoc"></Doc>
      </div>
    </div>
  </div>
</template>

<script>
import Doc from './components/Blog/Doc'
import blogs from './assets/blogs.json'

export default {
  name: 'Blog',
  data () {
    return {
      msg: 'I am blog to be updated',
      blogs: blogs.Blogs,
      hoveringTitleIndex: -1,
      selectedDoc: blogs.Blogs[0]
    }
  },
  computed: {
    docTitles () {
      return this.blogs.map(b => b.title)
    }
  },
  methods: {
    hoverTitle (titleIndex) {
      this.hoveringTitleIndex = titleIndex
    },
    selectDoc (index) {
      this.selectedDoc = this.blogs[index]
    }
  },
  components: {
    Doc
  }
}
</script>

<style lang="scss">
body, #app {
  background-color: #fff;
  font-family: Lato;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}

#blog {
  position: relative;
  width: 100vw;

  .blog-header {
    position: relative;
    width: calc(100%);
    height: 50px;
    background-color: #3385ff;
    box-shadow: 0 5px 5px 0 rgba(0,0,0,.11);
    .blog-header-font {
      position: relative;
      height: 50px;
      padding-left: 20px;
      font-size: 20px;
      font-family: Lato;
      color: #fff;
      line-height: 50px;
      font-weight: 700;
    }
  }

  .blog-content {
    max-width: 700px;
    margin: auto;

    .doc-title-list {
      position: relative;
      width: calc(100%);
      height: 200px;
      margin: 20px 0;
      background-color: #fff;
      box-shadow: 0 6px 8px 0 rgba(0,0,0,0.2);
      border: 1px solid #ddd;
      border-radius: 4px;

      .doc-title-list-header {
        position: relative;
        width: calc(100%);
        height: 39px;
        border-bottom: 1px solid #ddd;
        background-color: #f7f7f7;
        .header-text {
          position: relative;
          height: 100%;
          color: #666;
          font-family: Lato;
          line-height: 39px;
          padding-left: 10px;
        }
      }

      .doc-title-list-cont {
        position: relative;
        width: calc(100% - 20px);
        height: calc(100% - 20px - 40px);
        margin: 10px;
        overflow-x: hidden;
        overflow-y: auto;

        .doc-title {
          position: relative;
          margin: 2px 0px;
          width: calc(100% - 10px);
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          height: 22px;
          line-height: 22px;
          font-family: Lato;
          color: #666;
          padding-left: 5px;
          border: 1px solid #fff;
          border-radius: 2px;
          cursor: pointer;
          transition: all 200ms;

          &.hover {
            background-color: #e4efff;
          }

          &.selected {
            border: 1px solid #3385ff;
          }
        }
      }
    }

    .doc {
      position: relative;
      width: calc(100%);
      margin: 20px 0;
      background-color: #fff;
      box-shadow: 0 6px 8px 0 rgba(0,0,0,0.2);
      border: 1px solid #ddd;
    }
  }
}
</style>
