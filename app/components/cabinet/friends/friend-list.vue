<template>
    <div>
        <div class="friend-list">
            <template v-if="friends && friends.length" v-for="(friend, index) in friends">
                <friend v-bind:friend="friend" v-bind:index="index" v-bind:deleteFriend="deleteFriend">
                </friend>
            </template>
        </div>
        <friendcreate v-bind:createFriend="createFriend"></friendcreate>
    </div>
</template>

<script>
    import { postData, localStorageService, getData } from '../../../utils/'
    import friend from './friend.vue'
    import friendcreate from './friend-create.vue'

    export default {
        data() {
            return {
                friends: []
            }
        },
        components: {
            friend,
            friendcreate
        },
        destroyed() {
            this.sendDataToServer()
        },
        mounted() {
            this.getUserFriends()
        },
        methods: {
            initFriends(status, {userFriends}) {
                status === 200
                    ? this.friends = userFriends
                    : null
            },
            getUserFriends() {
                const url = 'http://localhost:4422/friendslist'
                const headers = {
                    id: localStorageService.get('id'),
                    token: localStorageService.get('token')
                }
                getData({ url, headers, callback: this.initFriends })
            },
            createFriend(item) {
                this.friends.push(item)
            },
            sendDataToServer() {
                const url = 'http://localhost:4422/friendslist'
                const headers = {
                    id: localStorageService.get('id'),
                    token: localStorageService.get('token')
                }
                const data = {
                    friends: this.friends
                }
                postData({ url, data, callback: this.asserResponse, headers })

            },
            asserResponse(status, body) {
                console.log(status, body)
            },
            deleteFriend(index) {
                if (this.friends[index]) {
                    const url = 'http://localhost:4422/frienddelete'
                    const headers = {
                        id: localStorageService.get('id'),
                        token: localStorageService.get('token')
                    }
                    const data = {
                        friend: this.friends[index]
                    }
                    postData({ url, data, callback: this.asserResponse, headers })
                    this.friends.splice(index, 1)
                } else {
                    return
                }
            }
        }
    }

</script>

<style lang="css">
    
</style>