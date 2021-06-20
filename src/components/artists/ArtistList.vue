<template>
  <div class="grid grid-flow-row grid-cols-3 grid-rows-3 gap-4">
    <div class="artist-card" v-for="artist in artists" :key="artist.content">
        <img :srcset="artist.avatar">
        <h2>{{ artist.name }}</h2>
        <a class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" v-bind:href="`/artist/`+ artist.id">Voir page artiste</a>
    </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      artists: [],
    }
  },
  methods: {
    async fetchData () {
      const token = localStorage.getItem('vuejs_token')
      const res = await axios.get('http://localhost:3000/artists', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.artists = res.data
    }


  },
  mounted () {
    this.fetchData()
  }
}
</script>
