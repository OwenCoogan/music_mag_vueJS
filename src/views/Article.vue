<template>
  <div>
    <header-app />
    <h1>{{ article.title }}</h1>
    <div>
        <img style="width:50px;">
        <p>
            {{ article.content }}
        </p>
    </div>
  </div>
</template>

<script>
import Header from '@/components/ui-elements/Header'
import axios from 'axios'
export default {
  components: {
    'header-app': Header
  },
  data () {
    return {
      article: [],
    }
  },
  methods: {
    async fetchData () {
      const splitUrl = window.location.href.split('/')
      const id = splitUrl[4]
      const token = localStorage.getItem('vuejs_token')
      const res = await axios.get(`http://localhost:3000/news/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })


      this.article = res.data
    }


  },
  mounted () {
    this.fetchData()
  }
}
</script>
