<template>
  <div class="editor">
    editor
    <div id="app">
      <div v-for="task in tasks" draggable="true" v-on:drag="(e) => dragging(task, e)" v-on:dragstart="(e) => drag(task, e)">Drag this...{{task.name}}</div>
      <div v-on:dragover.prevent v-on:drop="drop" class="droppable">

        Drop here...
      </div>
      <placeholder></placeholder>
    </div>
    <button class="btn logout">
      <router-link  to="/cabinet">Log out</router-link>
    </button>
  </div>
</template>

<script>
  import { EventEmitter } from '../../service/rx/index.js'
  import { DRAG_START, DRAG_END } from '../../service/rx/events.js'
  import placeholder from './placeholder.vue'
  export default {
    components: {
      placeholder
    },
    mounted() {
      // EventEmitter.subscribeOnEvent(DRAG_START,(arg) => {
      //   console.log('arg', arg)
      // })
    },
    data() {
      return {
        tasks: [{
          name: 'test1',
          id: 1
        }, {
          name: 'test2',
          id: 2
        }]
      }
    },
    methods: {
      dragging(taks, e) {
        EventEmitter.emitEvent(DRAG_START, e)
        //console.log('dragging')
      },
      drop(task, e) {
        EventEmitter.emitEvent(DRAG_END, task)
        console.log('Looks like you dropped something!', e);
      },
      drag: function (taks, e) {
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