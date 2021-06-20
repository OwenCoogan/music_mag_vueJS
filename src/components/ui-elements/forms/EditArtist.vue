<template>
    <div>
    <form @submit="postData" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">Nom</label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ÒÒÒtype="name" v-model="name"/>
      <label class="block text-gray-700 text-sm font-bold mb-2">Pays</label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="country" v-model="country"/>
      <label class="block text-gray-700 text-sm font-bold mb-2">description</label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="description" v-model="description"/>
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

