import Vue from 'vue'
import Blog from './Blog.vue'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#one',
//   render: h => h(blog)
// })
new Vue({
  el: '#blog',
  router,
  components: { Blog },
  template: '<Blog/>'
})
