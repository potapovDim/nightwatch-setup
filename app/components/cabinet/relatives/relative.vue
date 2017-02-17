<template>
  <div class="relative">
    <div class="relative-controlers">
      <button v-on:click="deleteRelative(index)">Delete relative</button>
    </div>
    <div>
      Name : {{relative.name}}
    </div>
    <div>
      Lastname : {{relative.lastname}}
    </div>
    <div>
      Phone : {{relative.phone}}
    </div>
    <div>
      Address : {{relative.address}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      index: Number,
      relative: Object,
      deleteRelative: Function
    }
  }  
</script>

<style >
   .relative-controlers {
    display: none;
  }
  .relative {
    border: solid;
    border-color: yellow;
  }
  .relative:hover .relative-controlers {
    display: block;
  }
</style>