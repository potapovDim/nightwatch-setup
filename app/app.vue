<template>
    <div>
        <h2>{{ msg }}</h2>
        <initial-page></initial-page>        
    </div>
</template>

<script>
    import InitialPage from './components/initial-page.vue'
    export default {
        data () {
            return {
                msg: 'Simple app vue.js'
            }
        },
        components: {
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