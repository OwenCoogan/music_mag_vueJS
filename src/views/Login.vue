<template>
  <div>
    <h1> Login </h1>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" >Login</label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" v-model="email"/>
    <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline margin-bottom" type="password" v-model="password"/>
    <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="submitLogin">Connexion</a>
    </form>
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
    }
  },
  methods: {
    async submitLogin () {
      const res = await axios.post('http://localhost:3000/login', {
        email: this.email,
        password: this.password,
      })
      const { accessToken } = res.data

      const { sub } = jwt_decode(accessToken)

      localStorage.setItem('vuejs_token', accessToken)
      localStorage.setItem('vuejs_user_id', sub)
    }
  }
}
</script>
