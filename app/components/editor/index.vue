<template>
  <div class="editor">
    <button @click="addBlock">Add new block</button>
    editor
    <div id="app">
      <dnddecorator v-bind:childComponent="buttondnd">
        <buttondnd></buttondnd>
      </dnddecorator>
    </div>
    <div>
      <block v-for="block in blocks"></block>
    </div>
    <button class="btn logout">
      <router-link to="/cabinet">Log out</router-link>
    </button>
  </div>
</template>

<script>
import { EventEmitter } from '../../service/rx/index.js'
import { DRAG_START, DRAG_END } from '../../service/rx/events.js'

import block from './block.vue'
import dnddecorator from './elements/dnd-decorator.vue'
import buttondnd from './elements/button/index.vue'

export default {
  components: {
    dnddecorator,
    block,
    buttondnd
  },
  mounted() {
    // EventEmitter.subscribeOnEvent(DRAG_START,(arg) => {
    //   console.log('arg', arg)
    // })
  },
  data() {
    return {
      buttondnd,
      blocks: [
        {
          id: 1,
          content: []
        }
      ],
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
    addBlock() {
      const newBlock = {
        id: this.blocks.length + 1
      }
      this.blocks.push()
    },
    logger(arg) {
      console.log(arg)
    },
    dragging(taks, e) {
      console.log(taks, e)
      EventEmitter.emitEvent(DRAG_START, taks)
      e.target.style = "box-shadow: 0 0 10px rgba(0,0,0,0.5);"
      //console.log('dragging')
    },
    drop(task, e) {
      EventEmitter.emitEvent(DRAG_END, task)
      //console.log('Looks like you dropped something!', task, '!!');
    },
    drag: function (taks, e) {
    }
  }
}
</script>

<style lang="css">
.dropzones {
  display: flex;
}

.droppable {
  width: 400px;
  height: 400px;
  background: rgba(100, 0, 0, 0.3);
}
</style>