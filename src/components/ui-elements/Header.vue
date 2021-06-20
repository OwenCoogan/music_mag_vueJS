<template>
    <header>
        <a href="/"><img v-bind:src="'../src/assets/logo.png'"></a>

        <search-bar/>
        <router-link to="/">Home</router-link>
        <router-link to="/artists">Artists</router-link>
        <router-link to="/articles">News</router-link>

    </header>
</template>
<script>
import SearchBar from '@/components/ui-elements/SearchBar'

export default {
  components: {
    'search-bar': SearchBar,
  },
  methods: {

  }
}
</script>



