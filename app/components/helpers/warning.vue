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
    /* border: dashed; */
    /* border-width: 10px; */
    /* border-color: rgba(110, 10, 100, 0.3); */
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 20px;
    text-align: center;
  }
</style>