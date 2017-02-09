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
  </div>
</template>

<script>
  import { postData, imitateAsync } from '../../utils/'
  import warning from './warning.vue'
  import success from './success.vue'
  export default {
    components: {
      warning,
      success
    },
    data() {
      return {
        warning: false,
        success: false
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
        this.$router.push('/cabinet')
      },
      initResponseData(status, data) {
        status === 404
          ? this.warning = true
          : this.success = true
        imitateAsync(5000, null, this.redirectToCabinet)
      }
    }
  }

</script>

<style>

</style>