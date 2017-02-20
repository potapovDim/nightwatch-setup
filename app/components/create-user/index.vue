<template>
  <div>
    <div>
      <input v-on:change="createCaptcha" v-on:focus="dropState" placeholder="user name">
      <div v-if="captcha"><span class="captcha-value">{{ captcha }} </span> enter captacha in captcha input</div>
      <input v-if="captcha" v-on:focus="removeCaptchaWarning" placeholder="captcha">
      <button v-on:click="registerNewUser">Create User</button>
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

</style>