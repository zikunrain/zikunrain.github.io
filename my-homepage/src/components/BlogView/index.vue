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
        <article class="film_review">
          <header>
            <h2>Jurassic Park</h2>
          </header>
          <section class="main_review">
            <p>Dinos were great!</p>
          </section>
          <section class="user_reviews">
            <article class="user_review">
              <p>Way too scary for me.</p>
              <footer>
                <p>
                  Posted on
                  <time datetime="2015-05-16 19:00">May 16</time>
                  by Lisa.
                </p>
              </footer>
            </article>
            <article class="user_review">
              <p>I agree, dinos are my favorite.</p>
              <footer>
                <p>
                  Posted on
                  <time datetime="2015-05-17 19:00">May 17</time>
                  by Tom.
                </p>
              </footer>
            </article>
          </section>
          <footer>
            <p>
              Posted on
              <time datetime="2015-05-15 19:00">May 15</time>
              by Staff.
            </p>
          </footer>
        </article>
      </div>
    </div>
  </div>

</template>

<script>
export default {

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
  }
}
</style>
