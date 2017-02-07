<template>
    <div class="clock">
        <h1 class="clock-time-show">{{ time }}</h1>
        <button v-on:click="regiterNewUser" class="create-user-button">Register new user</button>
        <dsadasdas v-if="registerUser"></dsadasdas>
    </div>
</template>

<script>
    import { postData } from '../utils/'
    import dsadasdas from './create-user/index.vue'
    export default {
        data() {
            return {
                time: "00:00:00",
                registerUser: false
            }
        },
        components: {
            dsadasdas
        },
        mounted() {
            this.startTime()
        },
        methods: {
            startTime() {
                var today = new Date();
                var h = today.getHours();
                var m = today.getMinutes();
                var s = today.getSeconds();
                m = this.checkTime(m);
                s = this.checkTime(s);

                this.time = h + ":" + m + ":" + s;
                const t = setTimeout(this.startTime, 500);
            },
            checkTime(i) {
                if (i < 10) { i = "0" + i };
                return i;
            },
            regiterNewUser() {
                this.registerUser = !this.registerUser
            }
        }
    }

</script>

<style>
    .clock-time-show {
        color: darkturquoise;
        font-size: 100px;
        line-height: 1.1em;
        margin: 10px 100 100px;
    }
    
    .success {
        color: green;
        height: 30px;
    }
    
    .warning {
        color: red;
        height: 30px;
    }
    
    .create-user-button {
        background: rgba(100, 150, 15, 0.8);
        border-radius: 4px;
        width: 200px;
        height: 30px;
    }
</style>