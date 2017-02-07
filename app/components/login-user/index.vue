<template>
  <div class="login-form">
    <input class="user-name" placeholder="username">
    <input class="user-password" placeholder="password">
    <button v-on:click="login" class="login-button">Login</button>
  </div>
</template>

<script>
  import {postData, imitateAsync} from '../../utils/'

  export default {
    data() {
      return {}
    },
    methods: {
      login() {
        const name = document.getElementsByClassName('user-name')[0].value
        const password = document.getElementsByClassName('user-password')[0].value
        if(name && password) {
          const url = 'http://localhost:4422/login'
          const data = {name, password}
          postData({ url, data  })
        }
      },
      initResponseData(status, data) {
        status === 404
          ? this.warning = true
          : this.success = true
      }
    }
  }
</script>

<style>
  
</style>