<template>
    <div class="cabinet">
      <input  placeholder="login name"/>
      <input  placeholder="password"/>
      <button>Login</button>
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
            
        }
    }
</script>

<style>
    
</style>