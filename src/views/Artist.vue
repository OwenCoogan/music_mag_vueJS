<template>

  <div>
    <header-app />
    <h1>Page artiste : {{ artist.name }} </h1>
    <div>
        <img :srcset="artist.avatar">
        <h2>{{ artist.name }}</h2>
        <p>
            {{ artist.description }}
        </p>
        <p class="genre">{{ artist.genre }}</p>
    </div>
    <div class="grid grid-flow-row grid-cols-3 grid-rows-2 gap-4">
      <div class="article-card my-1 px-1 w-full lg:my-4 rounded-lg shadow-lg" v-for="concert in artist.concerts" :key="concert.name">
        <p class="genre">{{ concert.name }}</p>
        <p class="genre">{{ concert.date }}</p>
      </div>
    </div>

    <div class="grid grid-flow-row grid-cols-3 grid-rows-2 gap-4">
      <div class="article-card my-1 px-1 w-full lg:my-4 rounded-lg shadow-lg" v-for="album in artist.albums" :key="album.name">
        <p class="genre">{{ album.name }}</p>
        <p class="genre">{{ album.date }}</p>
      </div>
    </div>
    <edit--button v-bind:id="artist.id" type="artist"/>
  </div>
</template>

<script>
import Header from '@/components/ui-elements/Header'
import EditButton from '@/components/ui-elements/EditButton'
import axios from 'axios'
export default {
  components: {
    'header-app': Header,
    'edit--button': EditButton
  },
  data () {
    return {
      artist: [],
      editor: null
    }
  },
  methods: {
    async fetchData () {
      const splitUrl = window.location.href.split('/')
      const id = splitUrl[4]
      const token = localStorage.getItem('vuejs_token')
      const res = await axios.get(`http://localhost:3000/artists/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.artist = res.data
      const genre = await axios.get(`http://localhost:3000/genres/${res.data.id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.artist.genre = genre.data.name
      const concerts = await axios.get(`http://localhost:3000/concerts?artistId=${res.data.id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.artist.concerts = concerts.data

      const albums = await axios.get(`http://localhost:3000/albums?artistId=${res.data.id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      this.artist.albums = albums.data



      console.log(this.artist)
    },
    getAuth () {
      const token = localStorage.getItem('vuejs_token')
      if (token) {
        this.editor = true
      } else {
        this.editor = false
      }
    }

  },
  mounted () {
    this.fetchData()
    this.getAuth()
  }
}
</script>
