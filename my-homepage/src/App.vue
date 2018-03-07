<template>
  <div id="app"
    @mousewheel="wheeling()">
    <name-and-pic></name-and-pic>
    <menu-bar ref="refOfMenuBar" id="menubar"
      :class="{fixed: isFixedMenuBar}">
    </menu-bar>
    <about-view></about-view>
    <publication-view></publication-view>
    <blog-view></blog-view>
    <!-- <img src="./assets/me.jpg"> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import NameAndPic from './components/Home/NameAndPic'
import MenuBar from './components/Home/MenuBar'
import AboutView from './components/Home/AboutView'
import PublicationView from './components/Home/PublicationView'
import BlogView from './components/Home/BlogView'

export default {
  name: 'App',
  data () {
    return {
      // isFixedMenuBar: false,
      menuBarOffsetY: 0
    }
  },
  computed: {
    isFixedMenuBar: function () {
      return this.menuBarOffsetY >= 400
    }
  },
  components: {
    NameAndPic,
    MenuBar,
    AboutView,
    PublicationView,
    BlogView
  },
  methods: {
    wheeling: function (e) {
      // const a = document.getElementById('menubar').getBoundingClientRect().y
      // console.log(a)
      console.log(document.getElementById('app').scrollTop)
      this.menuBarOffsetY = document.getElementById('app').scrollTop
      // console.log(menuBarOffsetY)
      // // if (menuBarOffsetY < 0) {
      // //   this.isFixedMenuBar = true
      // // } else {
      // //   this.isFixedMenuBar = false
      // // }
    }
  }
}
</script>

<style lang="scss">
body, #app {
  background-color: #ecf0f1;
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}
#app {
  .name-and-pic {
    width: calc(100%);
    height: 380px;
  }

  .menu-bar {
    background-color: #fff;
    border-bottom: 1px solid #dedede;
  }

  .card-title {
    position: relative;
    flex: 1;
    padding: 10px;
    text-align: right;
    right: 100px;
    font-size: 3em;

    .card-sub-title {
      color: #a6a7aa;
      font-size: 0.5em;
    }
  }
  .card {
    flex: 2;
    padding: 10px;
    color: #a6a7aa;
    font-size: 1.2em;

    p {
      text-align: justify;
    }

    b {
      color: #444 !important;
    }
  }

  // .main-view {
  //   flex: 1 1;
  //   display: flex;
  //   flex-direction: column;
  //   margin: 4px;

  //   .view {
  //     background-color: #fff;
  //     margin: 4px;
  //     border-radius: 5px;
  //     border: 1px solid #dedede;
  //   }

  //   & > .top {
  //     flex: 0 0 65%;
  //     display: flex;
  //     flex-direction: row;

  //     .corview-cont {
  //       flex: 0 0 60%;
  //       min-width: #{(1920px - 73px) * 0.6};
  //     }

  //     .stview-cont {
  //       flex: 1 1;
  //     }
  //   }

  //   & > .bottom {
  //     flex: 1 1;
  //     display: flex;
  //     flex-direction: row;

  //     .statview-cont {
  //       flex: 0 0 60%;
  //       min-width: #{(1920px - 73px) * 0.6};
  //     }

  //     .pattable-cont {
  //       flex: 1 1;
  //     }
  //   }
  // }
}
</style>
