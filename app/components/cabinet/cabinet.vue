<template>
    <div class="cabinet">
      <div class="center-data">
        cabinet
      </div>
    </div>
</template>

<script>
    export default {
        data () {
          return {
            friends :[],
            relatives: [],
            jobs: []
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
  
</style>