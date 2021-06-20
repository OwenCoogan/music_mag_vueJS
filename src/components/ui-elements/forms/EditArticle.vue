<template>
    <div>
    <form @submit="postData" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">Titre</label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="name" v-model="title"/>
      <label class="block text-gray-700 text-sm font-bold mb-2">Contenu</label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="country" v-model="content"/>
      <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
    </form>
  </div>
</template>
<script>
import axios from 'axios'
export default ({
  setup () {

  },
  data () {
    return {
      article: null,
      title: null,
      published: null,
      content: null,
      id: null,
    }
  },
  methods: {
    async fetchData () {
      const splitUrl = window.location.href.split('/')
      const id = splitUrl[5]
      const token = localStorage.getItem('vuejs_token')
      const res = await axios.get(`http://localhost:3000/news/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.article = res.data
      this.title = this.article.title
      this.published = this.article.published
      this.content = this.article.content
      this.id = this.article.id
    },


    async postData (e) {
      e.preventDefault()
      // const token = localStorage.getItem('vuejs_token')
      const splitUrl = window.location.href.split('/')
      const id = splitUrl[5]
      const res = await axios.put(`http://localhost:3000/news/${id}`, {
        title: this.title,
        published: this.published,
        content: this.content,
        id: this.id
      })
      console.log(res)
    },
    getAuth () {
      const token = localStorage.getItem('vuejs_token')
      if (token) {
        this.editor = true
      }
    }

  },
  mounted () {
    this.fetchData()
    this.getAuth()
  }

})
</script>

