<template>
  <div class="button">
    <a :href="this.url">Editer</a>
  </div>
</template>
<script>

export default ({
  props: ['id', 'type'],
  setup () {

  },
  data () {
    return {
      url: null
    }
  },
  methods: {
    buildUrl () {
      const url = this.type + '/' + this.id
      this.url = "/edit/" + url
    }
  },
  mounted () {
    this.buildUrl()
  }


})
</script>
