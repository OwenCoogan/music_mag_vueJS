<template>
    <header>
        <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
          <a href="/"><img v-bind:src="'../src/assets/logo.png'"></a>
          <router-link to="/">Home</router-link>
          <router-link to="/artists">Artists</router-link>
          <router-link to="/articles">News</router-link>
        </nav>
    </header>
</template>
<script>

export default {

  methods: {

  }
}
</script>



