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
    <edit--button :id="artist.id" type="artist"/>
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
      console.log(this.artist.genre)
    },
    getAuth () {
      const token = localStorage.getItem('vuejs_token')
      if (token) {
        this.editor = true
      } else {
        this.editor = false
      }
      console.log(this.editor)
    }

  },
  mounted () {
    this.fetchData()
    this.getAuth()
  }
}
</script>
