function VueDnd() {

  const DragAndDrop = {}

  DragAndDrop.install = function (Vue) {
    Vue.directive('drag-and-drop', {
      params: [
      'drag-and-drop',
      'drag-start',
      'drag',
      'drag-over',
      'drag-enter',
      'drag-leave',
      'drag-end',
      'drop',
      'draggable',
      'droppable'
      ],
      bind: function () {
        this.vm._dragSrcEl = null;

        if(this.params.draggable === undefined){
          this.params.draggable = true;
        }
        if(this.params.droppable === undefined){
          this.params.droppable = true;
        }
        const booleanMaps = {
          true: true,
          false: false
        }

        const droppable = booleanMaps[this.params.droppable];
        const draggable = booleanMaps[this.params.draggable];
        const emptyFn = function(){};

        this.handleDragStart = function (e) {
          e.target.classList.add('dragging');
          this.vm._dragSrcEl = e.target;
          e.dataTransfer.effectAllowed = 'move';
          e.dataTransfer.setData('text', '*');
          if (typeof(this.vm[this.params.dragStart]) === 'function') {
            this.vm[this.params.dragStart].call(this, e.target, e);
          }
        }.bind(this);
        this.handleDragOver = function(e) {
          if (e.preventDefault) {
            e.preventDefault();
          }
          e.dataTransfer.dropEffect = 'move';
          e.target.classList.add('drag-over');
          if (typeof(this.vm[this.params.dragOver]) === 'function') {
            this.vm[this.params.dragOver].call(this, e.target, e);
          }
          return false;
        }.bind(this);
        this.handleDragEnter = function(e) {
          if (typeof(this.vm[this.params.dragEnter]) === 'function') {
            this.vm[this.params.dragEnter].call(this, e.target, e);
          }
          e.target.classList.add('drag-enter');
        }.bind(this);
        this.handleDragLeave = function(e) {
          if (typeof(this.vm[this.params.dragLeave]) === 'function') {
            this.vm[this.params.dragLeave].call(this, e.target, e);
          }
          e.target.classList.remove('drag-enter');
        }.bind(this);
        this.handleDrag = function(e) {
            if (typeof(this.vm[this.params.drag]) === 'function') {
                this.vm[this.params.drag].call(this, e.target, e);
            }
        }.bind(this);
        this.handleDragEnd = function(e) {
          e.target.classList.remove('dragging', 'drag-over', 'drag-enter');
          if (typeof(this.vm[this.params.dragEnd]) === 'function') {
            this.vm[this.params.dragEnd].call(this, e.target, e);
          }
        }.bind(this);
        this.handleDrop = function(e) {
          e.preventDefault();
          if (e.stopPropagation) {
            e.stopPropagation();
          }
          if (this.vm._dragSrcEl != e.target) {
            if (typeof(this.vm[this.params.drop]) === 'function') {
              var el = (e.target.draggable || draggable) ? e.target : e.target.parentElement;
              this.vm[this.params.drop].call(this, this.vm._dragSrcEl, el, e);
            }
          }
          return false;
        }.bind(this);

        if(!draggable){
          this.handleDragStart = emptyFn;
          this.handleDragEnter = emptyFn;
          this.handleDrag = emptyFn;
          this.handleDragLeave = emptyFn;
          this.handleDragEnd = emptyFn;
        }
        if(!droppable){
          this.handleDrop = emptyFn;
        }
        draggable && this.el.setAttribute('draggable', 'true');
        this.el.addEventListener('dragstart', this.handleDragStart, false);
        this.el.addEventListener('dragenter', this.handleDragEnter, false);
        this.el.addEventListener('dragover', this.handleDragOver, false);
        this.el.addEventListener('drag', this.handleDrag, false);
        this.el.addEventListener('dragleave', this.handleDragLeave, false);
        this.el.addEventListener('dragend', this.handleDragEnd, false);
        this.el.addEventListener('drop', this.handleDrop, false);
      },
      update: function (newValue, oldValue) {
      },
      unbind: function () {
        this.el.classList.remove('dragging', 'drag-over', 'drag-enter');
        this.el.removeAttribute('draggable');
        this.el.removeEventListener('dragstart', this.handleDragStart);
        this.el.removeEventListener('dragenter', this.handleDragEnter);
        this.el.removeEventListener('dragover', this.handleDragOver);
        this.el.removeEventListener('dragleave', this.handleDragLeave);
        this.el.removeEventListener('drag', this.handleDrag);
      }
    });
  }
}