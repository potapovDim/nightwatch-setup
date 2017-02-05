<template >
    <div class="clock">
        <h1 class="clock-time-show">{{ time }}</h1>
        <button v-on:click="renderSomeNewData" class="create-form">Create new post form</button>







        <button v-on:click="initializeLogin">Clicker</button>
    </div>
</template>

<script>
    export default {
        data () {
            return { time: "00:00:00" }
        },
        mounted () {
            console.log(this.props)
            this.startTime()
        },
        props: {
            initializeLogin: {
                type: Function,
                required: true
            }
        },
        methods: {
            resultRequest (status, data) {
                console.log(status)
                const div = document.createElement('div')
                const classNameDiv = status === 201 ? 'success' : 'warning'
                div.className = classNameDiv
                div.innerHTML = data.message
                document.getElementsByClassName('clock')[0].appendChild(div)
            },
            postData () {
                const xhr = new XMLHttpRequest()
                const url = 'http://localhost:4422/'
                const data = JSON.stringify({
                    name: document.getElementsByClassName('name')[0].value
                })
                xhr.open("POST", url, true)
                xhr.setRequestHeader('Content-type', 'application/json')
                xhr.onreadystatechange = () => {
                    this.resultRequest(xhr.status, JSON.parse(xhr.response))
                }
                xhr.send(data)
            },
            renderSomeNewData () {
              const inputPresent = document.getElementsByClassName('name')
              if(inputPresent.length === 0){
                console.log(inputPresent)
                const input1 = document.createElement('input')
                const button = document.createElement('button')
                button.innerHTML = 'Create user'
                button.onclick = () => this.postData()
                input1.placeholder = 'name'
                input1.className = 'name'
                input1.style = `color: #000000;
                            width: 100px;`
                const insideRender = document.getElementsByClassName('clock')
                insideRender[0].appendChild(input1)
                insideRender[0].appendChild(button)
              }
            },
            startTime () {
                var today = new Date();
                var h = today.getHours();
                var m = today.getMinutes();
                var s = today.getSeconds();
                m = this.checkTime(m);
                s = this.checkTime(s);

                this.time = h + ":" + m + ":" + s;
                const t = setTimeout(this.startTime, 500);
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
    .success {
        color: green;
        height: 30px;
    }
    .warning {
        color: red;
        height: 30px;
    }
    .create-form {
        background: rgba(100, 150, 15, 0.8);
        border-radius: 4px;
        height: 20px;
    }
</style>