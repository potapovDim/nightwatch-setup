<template>
    <div class="clock">
        <h1 class="clock-time-show">{{ time }}</h1>
        <div class="create-user-form">
            <button v-on:click="renderCreateUserForm" class="create-user-button">Create new usert</button>
            <button v-if="password && loginName" v-on:click="initializeLogin(loginName, password)">Clicker</button>
        </div>
        <div class="delete-user-form">
            <button v-on:click="renderDeleteUserForm" class="delete-user-button">Delete user</button>
            <button v-if="password && loginName" v-on:click="initializeLogin(loginName, password)">Clicker</button>
        </div>
    </div>
</template>

<script>
    import { postData } from '../utils/'
    export default {
        data() {
            return {
                password: null,
                loginName: null,
                time: "00:00:00"
            }
        },
        mounted() {
            this.startTime()
        },
        props: {
            initializeLogin: {
                type: Function,
                required: true
            }
        },
        methods: {
            initializeSuccessData(data) {
                this.password = data.yourPassword
                const div = document.createElement('div')
                div.className = 'success'
                div.innerHTML = `password for login: ${data.yourPassword} \n
                                 name for login ${this.loginName}`
                document.getElementsByClassName('clock')[0].appendChild(div)
            },
            initializeErrorData(data) {
                const div = document.createElement('div')
                div.className = 'warning'
                div.innerHTML = `error message: ${data.message}`
                document.getElementsByClassName('clock')[0].appendChild(div)
            },
            resultRequest(status, data) {
                const classNameDiv = status === 201
                    ? this.initializeSuccessData(data)
                    : this.initializeErrorData(data)
            },
            registerUser() {
                const url = 'http://localhost:4422/'
                this.loginName = document.getElementsByClassName('name')[0].value
                const data = { name: this.loginName }
                const callback = this.resultRequest
                postData({ url, data, callback })
            },
            renderDeleteUserForm() {
                const deleteUserName = document.getElementsByClassName('delete-name')
                const deleteUserPassword = document.getElementsByClassName('delete-password')
                if (deleteUserPassword.length === 0 && deleteUserName === 0) {
                    const input1 = document.createElement('input')
                    const button = document.createElement('button')
                    button.innerHTML = 'Create user'
                    button.onclick = () => this.registerUser()
                    input1.placeholder = 'name'
                    input1.className = 'name'
                    input1.style = `color: #000000;
                            width: 100px;`
                    const insideRender = document.getElementsByClassName('create-user-form')
                    insideRender[0].appendChild(input1)
                    insideRender[0].appendChild(button)
                }
            },
            renderCreateUserForm() {
                const inputPresent = document.getElementsByClassName('name')
                if (inputPresent.length === 0) {
                    const input1 = document.createElement('input')
                    const button = document.createElement('button')
                    button.innerHTML = 'Create user'
                    button.onclick = () => this.registerUser()
                    input1.placeholder = 'name'
                    input1.className = 'name'
                    input1.style = `color: #000000;
                            width: 100px;`
                    const insideRender = document.getElementsByClassName('create-user-form')
                    insideRender[0].appendChild(input1)
                    insideRender[0].appendChild(button)
                }
            },
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
    
    .delete-user-button {
        background: red;
        border-radius: 4px;
        width: 200px;
        height: 30px;
    }
</style>