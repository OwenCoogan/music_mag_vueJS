<template>

  <div>
    <header-app />
    <h1>Page artiste</h1>
    <article-list />
  </div>
</template>

<script>
import Header from '@/components/ui-elements/Header'
import ArticleList from '@/components/articles/ArticleList'

export default {
  components: {
    'article-list': ArticleList,
    'header-app': Header
  }
}
</script>
