<template>
  <div>
    <div draggable="true"
        v-on:drag="(e) => dragging( e)"
        v-on:dragstart="(e) => drag( e)"
        v-on:dragend="logger">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    childComponent: Node
  },
  components: {

  },
  mounted() {
    // EventEmitter.subscribeOnEvent(DRAG_START, this.logger)
    // EventEmitter.subscribeOnEvent(DRAG_END, this.endDrag)
  },
  methods: {
    logger(arg) {
      console.log(arg)
    },
    dragging( e) {
      console.log( e)
      //EventEmitter.emitEvent(DRAG_START, taks)
      e.target.style = "box-shadow: 0 0 10px rgba(0,0,0,0.5);"
      //console.log('dragging')
    },
    drop(task, e) {
      //EventEmitter.emitEvent(DRAG_END, task)
      //console.log('Looks like you dropped something!', task, '!!');
    },
    drag: function ( e) {
    }
  }
}
</script>

<style lang="css">

</style>