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
          attended Transportation of Engineering, Sun Yat-sen University(SYSU) in September 2014. During study in SYSU, he successively
          focused on the smart card data mining for public transportation and travel time prediction in Guangdong Provincial Key Lab of ITS.
          In addition, he has won the <b>national scholarship</b> in 2015 and his GPA ranked the top 5% as of the third year.
        </p>
        <p>
          Since February 2017, he has begun to study computer science and engaged in the research of urban data visualization.
          He has been in <a href="http://zjuvis.org">ZJUVIS Group</a> at the State Key Lab of CAD&CG, Zhejiang University(ZJU),
          under Prof. <a href="http://www.ycwu.org">Yingcai Wu</a>'s supervision.
          Starting from September 2018, he will pursue a Ph.D. in Computer Science from ZJU.
          His research interests include Urban Computing and Visual Analytics, especially <b>the Visualization of Urban Data</b>.
        </p>
        <div class="slides" :style="{ height: slidesHeight + 'px' }">
          <transition-group tag="ul" class='slide-ul' name="list">
            <li v-for="(i, index) in slideList"
              :key="index"
              v-if="index === currentIndex">
              <a href="#">
                <img ref="imgRef" :src="i.image" :alt="i.desc">
              </a>
            </li>
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
      slidesHeight: 1,
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

    const rect = this.$refs.imgRef[0].getBoundingClientRect()
    this.slidesHeight = rect.width * 0.75
  },
  methods: {
    autoPlay: function () {
      this.currentIndex++
      if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0
      }
    }
  }
}
</script>

<style lang="scss">

.about-view {
  position: relative;
  width: calc(100%);
  background-color: #ffffff;
  padding: 50px;
  display: flex;

  .about-message {
    position: relative;
    width: calc(70%);

    .slides {
      position: relative;
      width: calc(100%);

      li {
        left: 0px;
        list-style: none;
        position: relative;

        img {
          position: absolute;
          width: calc(100% - 30px);
        }
      }
    }
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
