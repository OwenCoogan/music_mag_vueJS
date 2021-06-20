<template>
    <div>
    <form @submit="postData">
      <label>Nom</label>
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
    const splitUrl = window.location.href.split('/')
    const id = splitUrl[4] + '/' + splitUrl[5]
    return {
      artist: null,
      url: id,
      name: null,
      country: null,
      description: null,
    }
  },
  methods: {
    async fetchData () {
      const splitUrl = window.location.href.split('/')
      const id = splitUrl[5]
      const token = localStorage.getItem('vuejs_token')
      const res = await axios.get(`http://localhost:3000/artists/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.artist = res.data
      this.name = this.artist.name
      this.country = this.artist.country
      this.description = this.artist.description
      this.avatar = this.artist.avatar
      this.genreId = this.artist.genreId
      this.avatar = this.artist.avatar
    },


    async postData (e) {
      e.preventDefault()
      // const token = localStorage.getItem('vuejs_token')
      const splitUrl = window.location.href.split('/')
      const id = splitUrl[5]
      const res = await axios.put(`http://localhost:3000/artists/${id}`, {
        name: this.name,
        country: this.country,
        description: this.description,
        avatar: this.avatar,
        genreId: this.genreId,
        likes: this.likes
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

