<template>
  <div class="about-view">
    <div class="card-title">
      About
      <div class="card-sub-title">
        What I am all about.
      </div>
    </div>
    <div class="card">
      <div class="about-message">
        <p>
          <b>Zikun Deng</b>
          attended Transportation of Engineering, Sun Yat-sen University in September 2014. During study in SYSU, he successively
          focused on the smart card data mining for public transportation and travel time prediction in Guangdong Provincial Key Laboratory of ITS.
          In addition, he has won a <b>national scholarship</b> in 2015 and his GPA ranked the top 5% as of the third year.
        </p>
        <p>
          Since February 2017, he has begun to study computer science and engaged in the research of urban data visualization.
          He's now a member of ZJUVIS Group at the State Key Lab of CAD&CG, Zhejiang University,
          supervised by Prof. <a href="http://www.ycwu.org">Yingcai Wu</a>.
          Starting from September 2018, he will pursue a Ph.D. in Computer Science from Zhejiang University.
          His research interests include Urban Computing and Visual Analytics, especially <b>the Visualization of Urban Data</b>.
        </p>
        <div class="slides">
          <transition-group tag="ul" class='slide-ul' name="list">
            <li v-for="(i, index) in slideList"
              :key="index"
              v-if="index === currentIndex">
              <a href="#">
                <img style="height:530px" :src="i.image" :alt="i.desc">
              </a>
            </li>

            <!-- <li v-if="0===currentIndex">
              <a href="#">
                <img style="height:530px" src='../../assets/slide0.jpg' alt="nhwc">
              </a>
            </li>
            <li v-else-if="1===currentIndex">
              <a href="#">
                <img style="height:530px" src='../../assets/slide1.jpg' alt="hxrj">
              </a>
            </li>
            <li v-else-if="2===currentIndex">
              <a href="#">
                <img style="height:530px" src='../../assets/slide2.jpg' alt="rsdh">
              </a>
            </li>
            <li v-else>
              <a href="#">
                <img style="height:530px" src='../../assets/slide3.jpg' alt="rsah">
              </a>
            </li> -->
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import image0 from '../../assets/slide0.jpg'
import image1 from '../../assets/slide1.jpg'
import image2 from '../../assets/slide2.jpg'
import image3 from '../../assets/slide3.jpg'

export default {
  name: 'd',
  data () {
    return {
      slideList: [
        {
          desc: 'nhwc',
          image: image0
        },
        {
          desc: 'hxrj',
          image: image1
        },
        {
          desc: 'rsdh',
          image: image2
        },
        {
          desc: 'rsah',
          image: image3
        }
      ],
      currentIndex: 0,
      timer: ''
    }
  },
  mounted () {
    const _this = this
    this.$nextTick(() => {
      _this.timer = setInterval(() => {
        _this.autoPlay()
      }, 4000)
    })
  },
  // go () {
  //   const _this = this
  //   this.timer = setInterval(() => {
  //     _this.autoPlay()
  //   }, 4000)
  // },
  // stop () {
  //   clearInterval(this.timer)
  //   this.timer = null
  // },
  // change (index) {
  //   this.currentIndex = index
  // },
  methods: {
    autoPlay: function () {
      this.currentIndex++
      if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0
      }
    }
    // greet: function (event) {
    //   // `this` 在方法里指向当前 Vue 实例
    //   alert('Hello ' + this.name + '!')
    //   // `event` 是原生 DOM 事件
    //   if (event) {
    //     alert(event.target.tagName)
    //   }
    // }
  }
}
</script>

<style lang="scss">

.about-view {
  width: calc(100%);
  background-color: #ffffff;
  border-bottom: 1px solid #dedede;
  padding: 50px;
  float: left;
  display: flex;

  .about-message {
    width: calc(70%);
  }

  .slides {
    position: relative;
    height: 530px;

    li {
      left: 0px;
      list-style: none;
      position: absolute;
      // display: none;
    }

    // .shown {
    //   display: block !important;
    // }
  }
}

.list-enter-to {
  transition: all .5s ease-in;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease-in;
  transform: translateX(0px)
}

.list-enter {
  transform: translateX(30px)
}

.list-leave {
  transform: translateX(0)
}

</style>
