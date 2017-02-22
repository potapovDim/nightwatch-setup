<template>
  <div>
    <div class="registration">
      <h1>Registration</h1>
      <input v-on:change="createCaptcha" v-on:focus="dropState" placeholder="user name">
      <div v-if="captcha"><span class="captcha-value">{{ captcha }} </span> enter captacha in captcha input</div>
      <input v-if="captcha" v-on:focus="removeCaptchaWarning" class="captcha-input" placeholder="captcha">
      <button v-on:click="registerNewUser" class="btn btn-primary btn-block btn-large">Create User</button>
      <div v-if="captcha_warning">
        Entered captcha value not equal present captcha
      </div>
      <div v-if="success">
        User success created {{password}}
      </div>
      <div v-if="warning">
        User with this user name already exist
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import { captchaGenerat, postData, imitateAsync } from '../../utils/'
  export default {
    data() {
      return {
        username: null,
        captcha: null,
        success: null,
        warning: null,
        password: null,
        show_password: false,
        captcha_warning: false
      }
    },
    methods: {
      createCaptcha() {
        this.captcha = captchaGenerat(5)
      },
      removeCaptchaWarning() {
        this.captcha_warning = false
      },
      dropState() {
        this.username = null
        this.captcha = null
        this.success = null
        this.warning = null
        this.captcha_warning = false
      },
      generateCaptchaWarning() {
        this.captcha = captchaGenerat(5)
        this.captcha_warning = true
      },
      initResponseData(status, body) {
        this.warning = false
        this.success = false
        body.yourPassword ? this.password = body.yourPassword : null
        status === 404
          ? this.warning = true
          : this.showPassword()

      },
      showPassword() {
        this.success = true
        const refreshSuccess = () => {
          this.success = false
        }
        imitateAsync(3000, null, refreshSuccess)
      },
      submitData() {
        const url = 'http://localhost:4422/'
        this.username = document.getElementsByClassName('create-user-input')[0].value
        const data = { name: this.username }
        const callback = this.resultRequest
        postData({ url, data, callback: this.initResponseData })
      },
      registerNewUser() {
        const enteredCaptcha = document.getElementsByClassName('captcha-input')[0].value
        enteredCaptcha === this.captcha
          ? this.submitData()
          : this.generateCaptchaWarning()
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
  
  .registration {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -150px 0 0 -150px;
    width: 300px;
    height: 300px;
  }
  
  .registration h1 {
    color: #fff;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    letter-spacing: 1px;
    text-align: center;
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