<template>
  <div class="new-job-create">
    <label for="job-name">Job name</label>
    <input type="text" id="job-name" placeholder="job name" v-model="job.name">
    <label for="job-executor">Job executor</label>
    <input type="text" id="job-executor" placeholder="job executor" v-model="job.executor">
    <label for="job-deadline">Job deadline</label>
    <input type="text" id="job-deadline" placeholder="job deadline" v-model="job.deadline">
    <button class="btn btn-large create" v-on:click="cleateNewJob">
      Create new job
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      createJob: Function
    },
    data() {
      return {
        job: {
          name: null,
          executor: null,
          deadline: null
        }
      }
    },
    methods: {
      cleateNewJob(){
        const {name, executor, deadline} = this.job
        this.createJob({name, executor, deadline})
      }
    }
  }
</script>

<style lang="css">
  .create {
    color: green;
    background: grey
  }
</style>