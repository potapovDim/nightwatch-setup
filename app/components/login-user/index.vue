<template>
  <div class="login-form">
    <input class="user-name" placeholder="username">
    <input class="user-password" placeholder="password">
    <button v-on:click="login" class="login-button">Login</button>
    <div v-if="success">
      <success></success>
    </div>
    <div v-if="warning">
      <warning></warning>
    </div>
    <div> 
      <loading v-if="loading"></loading>
    </div>
  </div>
</template>

<script>
  import { postData, imitateAsync, localStorageService } from '../../utils/'
  import warning from './warning.vue'
  import success from './success.vue'
  import loading from '../helpers/loading.vue'
  export default {
    components: {
      warning,
      success,
      loading
    },
    data() {
      return {
        warning: false,
        success: false,
        loading: false
      }
    },
    methods: {
      login() {
        const name = document.getElementsByClassName('user-name')[0].value
        const password = document.getElementsByClassName('user-password')[0].value
        if (name && password) {
          const url = 'http://localhost:4422/login'
          const data = { name, password }
          postData({ url, data, callback: this.initResponseData })
        }
      },
      redirectToCabinet() {
        this.loading = false
        this.$router.push('/cabinet')
      },
      setToken(token){
        localStorageService.set('token', token)
        imitateAsync(500, null, this.redirectToCabinet)
      },
      initResponseData(status, data) {
        status === 404
          ? this.warning = true
          : this.setToken(data.token)
        this.loading = true
      }
    }
  }
</script>

<style>

</style>