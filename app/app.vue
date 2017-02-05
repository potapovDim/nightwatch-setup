<template>
    <div>
        <h1>{{ msg }}</h1>
        <postdata></postdata>
    </div>
</template>

<script>
    import Postdata from './components/postdata.vue'
    import Cabinet from './components/cabinet.vue'
    export default {
        data () {
            return {
                msg: 'First app training',
                login: '',
                password: ''
            }
        },
        components: {
            Cabinet,
            Postdata
        },
        methods:{
          initializeLogin({login, password}) {
            
          }  
        }
    }
</script>

<style>
    body {
        font : 100% Helvetica, sans-serif;
        color: #ecf0f1;
        text-align: left;
        background-color: cadetblue;
    }
    .container {
        margin: 10 auto;
        padding-top: 70px;
    }
</style>