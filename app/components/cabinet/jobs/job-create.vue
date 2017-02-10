<template>
  <div class="new-job-create">
    <label for="job-name">Job name</label>
    <input type="text" id="job-name" placeholder="job name" v-model="job.name">
    <label for="job-executor">Job executor</label>
    <input type="text" id="job-executor" placeholder="job executor" v-model="job.executor">
    <label for="job-deadline">Job deadline</label>
    <input type="text" id="job-deadline" placeholder="job deadline" v-model="job.deadline">
    <button v-on:click="createNewJob(job)">
      Create new job
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      createNewJob: Function
    },
    data: {
      job: {
        name: null,
        executor: null,
        deadline: null
      }
    }
  }
</script>

<style lang="css">

</style>