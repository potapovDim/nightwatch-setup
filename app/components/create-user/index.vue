<template>
  <div class="create-user-form">
    <div class="register-fields">
      <input v-on:change="createCaptcha" v-on:focus="dropState" class="create-user-input" placeholder="user name">
      <div v-if="captcha"><span class="captcha-value">{{ captcha }} </span> enter captacha in captcha input</div>
      <input v-if="captcha" v-on:focus="removeCaptchaWarning" class="captcha-input" placeholder="captcha">
      <div>
        <button v-on:click="registerNewUser">Create User</button>
      </div>
      <div v-if="captcha_warning" class="captcha-warning">
        Entered captcha value not equal present captcha
      </div>
      <div v-if="success" class="success">
        User success created
      </div>
      <div v-if="warning" class="warning">
        User with this user name already exist
      </div>
      <div class="sucess-registration-message">

      </div>
    </div>
  </div>
</template>

<script>
  import { captchaGenerat, postData } from '../../utils/'
  export default {
    data() {
      return {
        username: null,
        captcha: null,
        success: null,
        warning: null,
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
      initResponseData (status, body) {
        status === 404 
          ? this.warning = true
          : this.success = true  
      },
      submitData() {
        const url = 'http://localhost:4422/'
        this.username = document.getElementsByClassName('create-user-input')[0].value
        const data = { name: this.username }
        const callback = this.resultRequest
        postData({ url, data , callback: this.initResponseData})
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
  .captcha-value {
    color: yellowgreen;
    letter-spacing: 5px;
  }
  
  .captcha-warning {
    color: red;
    border: solid;
    width: 200px;
    border-color: rgba(200, 10, 10, 0.4);
    text-align: center;
    border-radius: 20px;
  }
  
  .sucess-registration-message {}
</style>