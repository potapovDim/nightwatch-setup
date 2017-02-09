<template>
    <div>
        <h2>{{ msg }}</h2>
        <div class="clock-time-show">{{ time }}</div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'Simple app vue.js',
                time: "00:00:00",
            }
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
        }
    }

</script>

<style>
    body {
        font: 100% Helvetica, sans-serif;
        color: #ecf0f1;
        text-align: left;
        background-color: cadetblue;
    }
    
    .container {
        margin: 10 auto;
        padding-top: 70px;
    }
</style>