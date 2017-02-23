<template>
  <div class="warning"> 
    {{message}}
  </div>
</template>

<script>
  export default {
    props: {
      message: String
    }
  }
</script>

<style >
  .warning {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 30px;
    height: 300px;
    width: 300px;
    background: red;
  }
</style>