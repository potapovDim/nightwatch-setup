<template>
  <div class="friend">
    <div class="friend-controlers">
      <button v-on:click="deleteFriend(index)">Delete friend</button>
    </div>
    <div>
      Name : {{friend.name}}
    </div>
    <div>
      Lastname : {{friend.lastname}}
    </div>
    <div>
      Phone : {{friend.phone}}
    </div>
    <div>
      Social : {{friend.social}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      index: Number,
      friend: Object,
      deleteFriend: Function
    }
  }

</script>

<style lang="css">
  .friend-controlers {
    display: none;
  }
  
  .friend:hover .friend-controlers {
    display: block;
  }
</style>