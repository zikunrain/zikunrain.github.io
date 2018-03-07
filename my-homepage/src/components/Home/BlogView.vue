<template>
  <div class="blog-view">
    <div class="card-title">
      Blog
      <div class="card-sub-title">
        Penny and penny!
      </div>
    </div>
    <div class="card">
      <div class="blog-message">
        <p>
          The followings are my illustrative notes and homeworks during my study, in order to help myself quickly regain those knowledge
          and facilitate further research in the future.
          In addition, it is also a task for me to keep learning english writing and advanced knowledge fetching.
          Inevitably, some of them would have some mistakes and confuse somebody.
          Please take the essence and discard the dregs.
        </p>
      </div>
      <blog-abstract v-for="ab in abstractList"
        :key="ab.theme"
        :theme="ab.theme"
        :msgone="ab.msgone"
        :msgtwo="ab.msgtwo"
        :time="ab.time">
      </blog-abstract>
      <div class="more-to-blog">
        <a href="#">MORE »</a>
      </div>
    </div>
  </div>

</template>

<script>
import BlogAbstract from './BlogAbstract'

export default {
  data () {
    return {
      abstractList: [
        {
          theme: 'SVM',
          time: 'March 7',
          msgone: '$\\mathbf {SVM}$ Similar to logistic regression, support vector machines(SVM) are supervised learning models used for classification and regression analysis in machine learning context.',
          msgtwo: '$\\mathbf {Motivation}$ ' +
            'Our training data consists of N pairs ($x_1,y_1$), ($x_2,y_2$), ... ,($x_N,y_N$), with $x_{i}\\in \\mathbb{R}^{p}$' +
            'and $y_{i}\\in \\left \\{ -1,1 \\right \\}$. ' +
            'We want to separate such points with a (p-1)-dimensional hyperplane so that the distance from it to the nearest data point on each side is maximized'
        },
        {
          theme: 'PCA',
          time: 'March 7',
          msgone: '$\\mathbf {PCA}$(Principal Component Analysis) is popular approach for dimension reduction in machine' +
            'learning and statistic communities. It uses an orthogonal transformation to convert a set of' +
            'observations of possibly correlated variables into a set of values of linearly uncorrelated variables' +
            'called principal components.',
          msgtwo: '$\\mathbf {Primitive Problem}$: Given a schematic data set with five two-dimensional items, is there a solution' +
            'to describe those items in one dimension while preserving as much original information as possible?'
        }
      ]
    }
  },
  components: {
    BlogAbstract
  }
}
</script>

<style lang="scss">
.blog-view {
  width: calc(100%);
  background-color: #ffffff;
  border-bottom: 1px solid #dedede;
  padding: 50px;
  float: left;
  display: flex;

  .blog-message {
    width: calc(70%);
    margin-bottom: 80px;
  }

  .blog-abstract {
    width: calc(70%);
  }

  .more-to-blog {
    width: calc(70%);
    text-align: right;
  }
}
</style>
