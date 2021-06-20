<template>
  <div>
    <h1> Inscription </h1>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="email"/>
    <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" v-model="password"/>
    <label class="block text-gray-700 text-sm font-bold mb-2">Prénom</label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="firstname"/>
    <label class="block text-gray-700 text-sm font-bold mb-2">Nom</label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="lastname"/>
    </form>
    <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="submitForm">S'inscrire</a>
  </div>
</template>

<script>
import axios from 'axios'
import jwt_decode from "jwt-decode"
export default {
  data () {
    return {
      email: null,
      password: null,
      firstname: null,
      lastname: null,
    }
  },
  methods: {
    async submitForm () {
      const res = await axios.post('http://localhost:3000/register', {
        email: this.email,
        password: this.password,
        firstname: this.firstname,
        lastname: this.lastname,
      })

      const { accessToken } = res.data

      const { sub } = jwt_decode(accessToken)

      localStorage.setItem('vuejs_token', accessToken)
      localStorage.setItem('vuejs_user_id', sub)
    }
  }
}
</script>
