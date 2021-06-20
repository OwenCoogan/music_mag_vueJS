<template>
    <header>
        <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
          <h1> Music Mag </h1>
          <router-link class="text-blue-500 hover:text-blue-800" to="/">Home</router-link>
          <router-link  class="text-blue-500 hover:text-blue-800" to="/artists">Artists</router-link>
          <router-link class="text-blue-500 hover:text-blue-800" to="/articles">News</router-link>
          <router-link  class="text-blue-500 hover:text-blue-800" to="/register">S'inscrire</router-link>
          <router-link class="text-blue-500 hover:text-blue-800" to="/login">Connexion</router-link>
        </nav>
    </header>
</template>
<script>

export default {

  methods: {

  }
}
</script>



