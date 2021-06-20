<template>
  <div >
    <div v-for="artist in artists" :key="artist.content">
        <img :srcset="artist.avatar" style="width:50px;">
        <h2>{{ artist.name }}</h2>
        <a v-bind:href="`/artist/`+ artist.id">Voir page artiste</a>
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
