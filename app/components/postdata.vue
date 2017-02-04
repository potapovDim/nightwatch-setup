<template>
    <div class="clock">
        <h1 class="clock-time-show">{{ time }}</h1>
        <button v-on:click="renderSomeNewData"></button>
    </div>
</template>

<script>
    export default {
        data () {
            return { time: "00:00:00" }
        },
        mounted () {
            this.startTime()
        },
        methods: {
            renderSomeNewData() {
              const div = document.createElement('div')
              div.style = `color: #000000;
                           height: 100px;
                           width: 1000px;`
              div.innerHTML = 'Created Element'
              const insideRender = document.getElementsByClassName('clock')
              insideRender[0].appendChild(div)
            },
            startTime () {
                var today = new Date();
                var h = today.getHours();
                var m = today.getMinutes();
                var s = today.getSeconds();
                m = this.checkTime(m);
                s = this.checkTime(s);

                this.time = h + ":" + m + ":" + s;
                var t = setTimeout(this.startTime, 500);
            },
            checkTime (i) {
                if (i < 10) {i = "0" + i};
                return i;
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
</style>