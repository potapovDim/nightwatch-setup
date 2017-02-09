<template>
    <div class="clock">
        <button v-on:click="regiterNewUser" class="create-user-button">Register new user</button>
        <button v-on:click="loginExistUser" class="create-user-button">Login </button>
        <div class="registration-user">
            <createuser v-if="registerUser"></createuser>
        </div>
        <div class="login-user">
            <loginuser v-if="loginUser"></loginuser>
        </div>
    </div>
</template>

<script>
    import createuser from './create-user/index.vue'
    import loginuser from './login-user/index.vue'

    export default {
        data() {
            return {
                registerUser: false,
                loginUser: false
            }
        },
        components: {
            loginuser,
            createuser
        },
        methods: {
            regiterNewUser() {
                this.registerUser = !this.registerUser
                this.loginUser = false
            },
            loginExistUser() {
                this.loginUser = !this.loginUser
                this.registerUser = false
            }
        }
    }

</script>

<style>
    .clock-time-show {
        color: darkturquoise;
        font-size: 80px;
        line-height: 1.2em;
        margin: 10px 0 100px;
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