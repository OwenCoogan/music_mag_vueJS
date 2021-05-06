<template>
  <div>
    <Header/>
    <h1>Articles</h1>
    <article-list />
  </div>
</template>

<script>
import ArticleList from '@/components/articles/ArticleList'
import Header from '@/components/ui-elements/Header'

export default {
  components: {
    'article-list': ArticleList,
    Header: Header
  }
}
</script>
