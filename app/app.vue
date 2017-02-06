<template>
    <div>
        <h1>{{ msg }}</h1>
        <div v-if="!login && !password">
            <postdata v-bind:initializeLogin="initializeLogin"></postdata>
        </div>
        <div v-if="login && password">
            <cabinet v-bind:username="login" v-bind:password="password"></cabinet>
        </div>
    </div>
</template>

<script>
    import Postdata from './components/postdata.vue'
    import Cabinet from './components/cabinet.vue'
    export default {
        data () {
            return {
                msg: 'Simple app vue.js',
                login: null,
                password: null
            }
        },
        components: {
            Cabinet,
            Postdata
        },
        methods: {
          initializeLogin(login, password) {
            this.login = login
            this.password = password 
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