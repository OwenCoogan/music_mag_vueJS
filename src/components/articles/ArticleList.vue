<template>
  <div class="grid grid-flow-row grid-cols-3 grid-rows-2 gap-4">
    <div class="article-card my-1 px-1 w-full lg:my-4 rounded-lg shadow-lg" v-for="article in articles" :key="article.content">
    <article class="">
        <div class="flex items-center justify-between leading-tight p-2 md:p-4">
        <h2 class="text-lg">{{ article.title }}</h2>
        <p class="date"> <b>rédigé le :</b> {{ article.published }}</p>
        </div>
        <p class="content">{{ article.content }}</p>

        <a class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" v-bind:href="`/article/`+ article.id">Lire l'article</a>
      </article>
    </div>

    <div class="flex">
      <button v-on:click="previousPage" class="border border-teal-500 text-teal-500 block rounded-sm font-bold py-4 px-6 mr-2 flex items-center hover:bg-teal-500 hover:text-white paginate-btn">Précédent</button>
      <button v-on:click="nextPage" class="border border-teal-500 bg-teal-500 text-white block rounded-sm font-bold py-4 px-6 ml-2 flex items-center paginate-btn">Suivant</button>
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
    async fetchData (url) {
      const token = localStorage.getItem('vuejs_token')
      const res = await axios.get(url || 'http://localhost:3000/news?&_limit=3&_page=1', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.articles = res.data
      this.prev = 0
      this.next = 2
    },
    previousPage () {
      const url = 'http://localhost:3000/news?&_limit=3&_page=' + this.prev
      this.fetchData(url)
      this.prev = this.prev - 1
      this.next = this.next - 1
    },
    nextPage () {
      const url = 'http://localhost:3000/news?&_limit=3&_page=' + this.next
      this.fetchData(url)

      this.prev = this.prev + 1
      this.next = this.next + 1
    }


  },
  mounted () {
    this.fetchData()
  }
}
</script>
