<template>
  <div>
    <header-app />
    <form>
          <label for="search">Barre de recherche</label>
          <input type="text" name="search" v-model="search">
          <input type="submit" v-on:click="fetchData">
    </form>
    <h1> Mon application </h1>
    <div>
      <h2>Articles</h2>
      <article-list />
    </div>
    <div>
      <h2>Artistes</h2>
      <artist-list />
    </div>
  </div>
</template>

<script>
import Header from '@/components/ui-elements/Header'
import ArticleList from '@/components/articles/ArticleList'
import ArtistList from '@/components/artists/ArtistList'

export default {
  components: {
    'article-list': ArticleList,
    'artist-list': ArtistList,
    'header-app': Header
  }
}
</script>
