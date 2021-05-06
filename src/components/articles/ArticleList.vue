<template>
  <div >
    <div v-for="article in articles" :key="article.content">
      <h2>{{ article.title }}</h2>
      <p>{{ article.content }}</p>
      <p>{{ article.published }}</p>
      <a v-bind:href="`/article/`+ article.id">Lire l'article</a>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      articles: [],
    }
  },
  methods: {
    async fetchData () {
      const token = localStorage.getItem('vuejs_token')
      const res = await axios.get('http://localhost:3000/news', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.articles = res.data
      console.log(this.articles)
    }


  },
  mounted () {
    this.fetchData()
  }
}
</script>
