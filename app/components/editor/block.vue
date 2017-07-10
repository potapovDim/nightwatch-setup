<template>
  <div>
    <div v-on:dragover="(e) => {e.preventDefault(); logger(e)}" 
          v-on:drop="endDrag" class="droppable">
      Drop here...
    </div>
  </div>
</template>

<script>
  import { EventEmitter } from '../../service/rx/index.js'
  import { DRAG_START, DRAG_END } from '../../service/rx/events.js'
  export default {
    mounted() {
      EventEmitter.subscribeOnEvent(DRAG_START, this.logger)
      EventEmitter.subscribeOnEvent(DRAG_END, this.endDrag)
    },
    methods: {
      endDrag(arg) {
        console.log('end DRAG',arg)
      },
      logger(e) {
      }
    }
  }
</script>

<style lang="css">
  .block.drag{
    background: rgba(100, 100, 100, 0.3);
  }
</style>