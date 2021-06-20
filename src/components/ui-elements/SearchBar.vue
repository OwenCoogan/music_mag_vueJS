<template>
    <div class="search--bar">
        <form>
          <input type="text" name="search" v-model="search">
          <input type="submit" v-on:click="fetchData">
        </form>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      search: null,
      results: [],
    }
  },
  methods: {
    async fetchData () {
      const value = this.search
      const res = axios.get('http://localhost:3000/articles?q=' + value, {
      })
      this.results = res.data
    }
  }
}
</script>
