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
  @import url(http://fonts.googleapis.com/css?family=Open+Sans);
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
  }
  
  html {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .login {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -150px;
    width: 300px;
    height: 300px;
  }
  
  .login h1 {
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    letter-spacing: 1px;
    text-align: center;
  }
  .loading-absolute {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input {
    width: 100%;
    margin-bottom: 10px;
    background: rgba(0, 0, 0, 0.3);
    border: none;
    outline: none;
    padding: 10px;
    font-size: 13px;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2), 0 1px 1px rgba(255, 255, 255, 0.2);
    -webkit-transition: box-shadow .5s ease;
    -moz-transition: box-shadow .5s ease;
    -o-transition: box-shadow .5s ease;
    -ms-transition: box-shadow .5s ease;
    transition: box-shadow .5s ease;
  }
  
  input:focus {
    box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4), 0 1px 1px rgba(255, 255, 255, 0.2);
  }
</style>