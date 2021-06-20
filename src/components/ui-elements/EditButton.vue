<template>
  <div class="button">
    <a class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" :href="this.url">Editer</a>
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
      const url = "/edit/" + this.type + '/' + this.id
      console.log(url)
      this.url = url
    }
  },
  mounted () {
    this.buildUrl()
  }


})
</script>
