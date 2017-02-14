<template>
  <div class="new-friend-create">
    <label for="friend-name">Name</label>
    <input type="text" id="friend-name" placeholder="friend name" v-model="friend.name">
    <label for="friend-executor">friend executor</label>
    <input type="text" id="friend-executor" placeholder="friend executor" v-model="friend.executor">
    <label for="friend-deadline">friend deadline</label>
    <input type="text" id="friend-deadline" placeholder="friend deadline" v-model="friend.deadline">
    <button v-on:click="click">
      Create new friend
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      createNewFriend: Function
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
        this.createNewFriend({name, lastname, phone, social})
      }
    }
  }
</script>

<style lang="css">

</style>