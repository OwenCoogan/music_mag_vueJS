<template>
    <div>
    <form @submit="postData">
      <label>Titre</label>
      <input type="name" v-model="name"/>
      <label>Pays</label>
      <input type="country" v-model="country"/>
      <label>description</label>
      <input type="description" v-model="description"/>
      <input type="submit">
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

