<template>
  <div>
    <div v-on:dragover="(e) => {
          e.preventDefault()
          logger(e)
          }" v-on:drop="drop" class="droppable">

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
      endDrag() {
        //console.log('end DRAG')
      },
      logger(e) {
        const element = document.querySelector('.drag-plaseholder')
        //console.log(e.clientX, e.clientY)
      }
    }
  }
</script>

<style lang="css">
  .drag-plaseholder{
    width: 100px;
    height: 100px;
    position: absolute;
    margin-left: 0px;
    margin-top: 0px;
    background: rgba(100, 100, 100, 0.3);
  }
</style>