<template>
  <div class="friend-list"> 
    <template v-if="friends && friends.length" v-for="(friend, index) in friends">
      <friend 
            v-bind:friend="friend"
            v-bind:index="index"
            v-bind:deleteFriend="deleteFriend">
      </friend>
    </template>
</div>
</template>

<script>
    import friend from './friend.vue'
    export default {
        components: {
            friend
        },
        props: {
            deleteFriend: Function,
            friends: Array
        },
        mounted() {
            console.log(this.friends, this.deleteFriend)
        },
        methods: {
           
        }
    }
</script>

<style lang="css">

</style>