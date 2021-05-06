<template>
  <div>
    <h1>Artistes</h1>
    <article-list />
  </div>
</template>

<script>
import ArticleList from '@/components/articles/ArticleList'

export default {
  components: {
    'article-list': ArticleList,
  }
}
</script>
