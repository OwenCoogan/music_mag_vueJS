<template>
  
  <div>
    <Header/>
    <h1>Artistes</h1>
    <article-list />
  </div>
</template>

<script>
import Header from '@/components/ui-elements/Header'
import ArticleList from '@/components/articles/ArticleList'

export default {
  components: {
    'article-list': ArticleList,
    'Header':Header
  }
}
</script>
