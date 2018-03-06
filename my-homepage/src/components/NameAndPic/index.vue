<template>
  <div class="name-and-pic">
    <img class="background-pic" src="../../assets/cat2.jpg">
    <img class="small-pic" src="../../assets/cat3.jpg">
    <span class="title">Zikun Deng</span>
    <span class="sub-title">Will be CS PhD candidate in Sept. this year</span>
    <span class="email">zikun.rain@gmail.com</span>
  </div>
</template>

<script>
export default {
  name: 'NameAndPic'

}
</script>

<style lang="scss">
.name-and-pic {
  background-color: #ddd;
  height: 400px;
  overflow: hidden;
  position: relative;

  .background-pic {
    width: calc(100%);
    opacity: 0.4;
    -webkit-filter: grayscale(1);
    position: absolute;
  }

  .small-pic {
    position: absolute;
    top: 100px;
    left: calc(50% - 75px);
    width: 130px;
    height: 130px;
    border: 10px solid rgba(0, 0, 0, 0.05);
    border-radius: 50%;
  }

  .title {
    position: absolute;
    width: 200px;
    top: 260px;
    left: calc(50% - 100px);
    font-weight: 900;
    font-size: 2.2em;
    color: #333333;
    line-height: 1.1;
    text-align: center;
  }

  .sub-title {
    position: absolute;
    width: 400px;
    top: 320px;
    left: calc(50% - 200px);
    color: #333333;
    line-height: 1.1;
    text-align: center;

    font-weight: 400;
    font-size: 1em;
  }

  .email {
    position: absolute;
    width: 300px;
    top: 340px;
    left: calc(50% - 150px);
    color: #333333;
    line-height: 1.1;
    text-align: center;

    font-weight: 400;
    font-size: 1em;
  }
}
</style>
