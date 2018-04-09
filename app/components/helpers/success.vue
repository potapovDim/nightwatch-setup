<template>
  <div class="success-message"> 
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
  .login-success {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 30px;
    background: lawngreen;
  }
</style>