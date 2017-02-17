<template>
  <div class="new-friend-create">
    <label for="friend-name">Name</label>
    <input type="text" id="friend-name" placeholder="friend name" v-model="friend.name">
    <label for="friend-lastname">friend lastname</label>
    <input type="text" id="friend-lastname" placeholder="friend lastname" v-model="friend.lastname">
    <label for="friend-phone">friend phone</label>
    <input type="text" id="friend-phone" placeholder="friend phone" v-model="friend.phone">
    <label for="friend-social">friend social</label>
    <input type="text" id="friend-social" placeholder="friend social" v-model="friend.social">
    <button v-on:click="click">
      Create new friend
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      createFriend: Function
    },
    data() {
      return {
        friend: {
          name: null,
          lastname: null,
          phone: null,
          social: null
        }
      }
    },
    methods: {
      click(){
        const {name, lastname, phone, social} = this.friend
        this.createFriend({name, lastname, phone, social})
      }
    }
  }
</script>

<style lang="css">

</style>