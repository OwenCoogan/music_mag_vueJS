<template>
  <div>
    <header-app />
    <h1>Edit this</h1>
    <edit-artist v-if="this.type === 'artist'" />
    <edit-article v-if="this.type === 'news'"/>
  </div>
</template>

<script>

import EditArtist from '@/components/ui-elements/forms/EditArtist'
import EditArticle from '@/components/ui-elements/forms/EditArticle'

export default {
  components: {
    'edit-artist': EditArtist,
    'edit-article': EditArticle,
  },
  data () {
    return {
      type: null
    }
  },
  mounted () {
    const splitUrl = window.location.href.split('/')
    this.type = splitUrl[4]
  }

}


</script>
