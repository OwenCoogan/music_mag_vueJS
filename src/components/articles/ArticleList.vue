<template>
    

</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      users: [],
    }
  },
  methods: {
    async fetchData () {
      const token = localStorage.getItem('vuejs_token')

      const res = axios.get('http://localhost:8080/news', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      console.log(res)
      this.users = res.data
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>