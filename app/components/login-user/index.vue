<template>
  <div class="login">
    <h1>Login</h1>
    <div>
      <input type="text" name="u" placeholder="Username" class="user-name"/>
      <input type="password" name="p" placeholder="Password" class="user-password"/>
      <button v-on:click="login" type="button" class="btn btn-primary btn-block btn-large">Login</button>
    </div>
    <div v-if="loading" class="loading-absolute">
      <loading ></loading>
    </div>
  </div>
</template>

<script>
  import { postData, imitateAsync, localStorageService } from '../../utils/'
  import warning from '../helpers/warning.vue'
  import success from '../helpers/success.vue'
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
      setUserData(token, id) {
        localStorageService.set('token', token)
        localStorageService.set('id', id)
        imitateAsync(500, null, this.redirectToCabinet)
      },
      initResponseData(status, data) {
        status === 404
          ? this.warning = true
          : this.setUserData(data.token, data.id)
        this.loading = true
      }
    }
  }

</script>

<style>
 
</style>