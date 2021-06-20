<template>
  <div class="grid grid-flow-row grid-cols-3 grid-rows-3 gap-4">
    <div class="article-card" v-for="article in articles" :key="article.content">
      <h2>{{ article.title }}</h2>
      <p class="content">{{ article.content }}</p>
      <p class="date"> <b>rédigé le :</b> {{ article.published }}</p>
      <a class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" v-bind:href="`/article/`+ article.id">Lire l'article</a>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      articles: [],
      prev: null,
      next: null,
    }
  },
  methods: {
    async fetchData () {
      const token = localStorage.getItem('vuejs_token')
      const res = await axios.get('http://localhost:3000/news?_limit=20', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.articles = res.data
      this.next = null
      this.prev = null
    }


  },
  mounted () {
    this.fetchData()
  }
}
</script>
