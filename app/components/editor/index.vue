<template>
  <div class="editor">
    editor
    <div id="app">
      <div v-for="task in tasks" draggable="true" v-on:dragstart="(e) => drag(task, e)">Drag this...{{task.name}}</div>
      <div v-on:dragover.prevent v-on:drop="drop" class="droppable">

          Drop here...
      </div>
    </div>
    <button class="btn logout" >
      <router-link  to="/cabinet">Log out</router-link>
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tasks: [{
          name: 'test1',
          id: 1
        },{
          name: 'test2',
          id: 2
        }]
      }
    },
    methods: {
      drop: function (task, e) {
        console.log('Looks like you dropped something!', e);
      },
      drag: function (taks, e) {
        console.log('Looks like you dropped dasmdasdklasjldlsa!',taks,  e);
      }
    }
  }
</script>

<style lang="css">
  .droppable{
    width: 400px;
    height: 400px;
    background: rgba(100, 0, 0, 0.3);
  }
</style>