<template>
    <div>
        <div class="initial-buttons">
            <button v-on:click="regiterNewUser" class="create-user-button btn-primary">Register new user</button>
            <button v-on:click="loginExistUser" class="create-user-button btn-primary">Login </button>
        </div>
        <div class="singup-singin">
            <createuser v-if="registerUser" v-bind:initSuccessRegistration="initSuccessRegistration"></createuser>
            <loginuser v-if="loginUser"></loginuser>
            <information v-if="!registerUser && !loginUser"></information>
        </div>
    </div>
</template>

<script>

import { postData, imitateAsync, localStorageService } from '../utils/'
import createuser from './registration/index.vue'
import loginuser from './login-user/index.vue'
import information from './helpers/information.vue'

export default {
    data() {
        return {
            registerUser: false,
            loginUser: false
        }
    },
    mounted() {
        const token = localStorageService.get('token')
        const url = 'http://localhost:4422/whoami'
    },
    created() {
        console.log('chreated')
    },
    components: {
        information,
        loginuser,
        createuser
    },
    methods: {
        initSuccessRegistration() {
            this.loginUser = true
            this.registerUser = false
        },
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
.success {
    color: green;
    height: 30px;
}

.warning {
    color: red;
    height: 30px;
}

.initial-buttons {
    margin: -50px 65% 0px;
    display: flex;
    position: absolute;
}

.create-user-button {
    background: orange;
    border-radius: 10px;
    width: 200px;
    height: 30px;
    font-size: small;
    font-family: fantasy;
}

.singup-singin {
    margin: auto;
    width: 50%;
    padding-top: 35%;
    padding-left: 35%
}
</style>