<template>
  <div>
    <header-app />
    <h1>Artistes</h1>
    <artiste-list />
  </div>
</template>

<script>
import Header from '@/components/ui-elements/Header'
import ArtistList from '@/components/artists/ArtistList'

export default {
  components: {
    'artiste-list': ArtistList,
    "header-app": Header
  }
}
</script>
