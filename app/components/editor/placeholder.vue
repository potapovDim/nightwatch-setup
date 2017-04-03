<template>
  <div class="drag-plaseholder">
  </div>
</template>

<script>
  import { EventEmitter } from '../../service/rx/index.js'
  import { DRAG_START,DRAG_END } from '../../service/rx/events.js'
  export default {
    mounted() {
      EventEmitter.subscribeOnEvent(DRAG_START, this.logger)
      EventEmitter.subscribeOnEvent(DRAG_END, this.endDrag)
    },
    methods: {
      endDrag() {
        console.log('end DRAG')
      },
      logger (e) {
        console.log(e)
      }
    }
  }
</script>

<style lang="css">
  .drag-plaseholder{
    width: 100px;
    height: 100px;
    background: rgba(100, 100, 100, 0.3);
  }
</style>