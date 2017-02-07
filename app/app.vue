<template>
    <div>
        <h1>{{ msg }}</h1>
        <initial-page></initial-page>        
    </div>
</template>

<script>
    import InitialPage from './components/initial-page.vue'
    //import CreatePage from './components/create-user/create-user.vue'
    export default {
        data () {
            return {
                msg: 'Simple app vue.js'
            }
        },
        components: {
            //CreatePage,
            InitialPage
        },
        methods: {}
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