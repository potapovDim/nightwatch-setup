<template>
    <div class="cabinet">
      <div class="center-data">
        <input  v-on:input="removeWarning()" placeholder="login name" class="login-data"/>
        <input  v-on:input="removeWarning()" placeholder="password" class="login-data"/>
        <button v-on:click="login()" class="login-button">Login</button>
      </div>
    </div>
</template>

<script>
    import {postData} from '../utils/' 
    export default {
        data () {
          return {
            friends :[],
            relatives: [],
            jobs: []
          }
        },
        props: {
          username: {
            type: String,
            required: true
          },
          password: {
            type: String,
            required :true
          }
        },
        mounted () {
        },
        methods: {
            removeWarning () {
              const warningMessage = document.getElementsByClassName('warning-message')
              const parent = document.getElementsByClassName('cabinet')[0]
              if(warningMessage[0]) {
                parent.removeChild(warningMessage[0])
              }
            },
            login () {
              const inputs = document.getElementsByTagName('input')
              if(inputs[0].value === this.username && inputs[1].value === this.password) {
                console.log(this.username , this.password , inputs[0].value ,inputs[1].value)
              }
              else {
                const div = document.createElement('div')
                div.innerHTML = 'Invalid user name or password'
                div.className = 'warning-message'
                document.getElementsByClassName('cabinet')[0].appendChild(div)
              }
            }
        }
    }
</script>

<style>
    .login-data {
      border: solid;
      border-radius: 10%;
      border-color: green;
      background: cornflowerblue;
      text-align: center;
      text-decoration-style: solid;
      height: 30px;
    }
    .center-data {
      text-align: center
    }
    .warning-message {
      color: red;
      text-align: center;
    }
    .login-button {
      height: 36px;
      border-color: green;
      background: cornflowerblue;
      text-align: center;
      border: solid;
      border-radius: 20%;
    }
</style>