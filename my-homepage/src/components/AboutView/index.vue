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
          <transition tag="ul" class='slide-ul' name="list" mode="out-in">
            <li v-for="(list, index) in slideList"
              :key="index"
              v-if="index===currentIndex">
              <a href="#">
                <img style="height:530px" :src="list.image" :alt="list.desc">
              </a>
            </li>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'd',
  data () {
    return {
      slideList: [
        {
          desc: 'nhwc',
          image: '/static/img/slide0.6b2d0d7.jpg'
        },
        {
          desc: 'hxrj',
          image: '/static/img/slide1.3dd4871.jpg'
        },
        {
          desc: 'rsdh',
          image: '/static/img/slide2.89b04ae.jpg'
        },
        {
          desc: 'rsah',
          image: '/static/img/slide3.d507211.jpg'
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
    height: 530px;
    li {
      list-style:none;
    }
  }
}

.list-enter-to {
  transition: all 1s ease-out;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease-in;
  transform: translateX(-20px)
}

.list-enter {
  transform: translateX(20px)
}

.list-leave {
  transform: translateX(0)
}

</style>
