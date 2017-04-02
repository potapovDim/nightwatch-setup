<template>
  <div class="editor">
    editor
    <div id="app">
      <div draggable="true">Drag this...</div>
      <div @dragover.prevent @drop="drop">Drop here...</div>
    </div>
    <button class="btn logout" v-on:click="clearStorageData">
      <router-link v-on:click="clearStorageData" to="/cabinet">Log out</router-link>
    </button>
  </div>
</template>

<script>
  export default {
    methods: {
      drop: function (e) {
        console.log('Looks like you dropped something!', e);
      }
    }
  }
</script>