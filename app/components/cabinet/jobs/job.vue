<template>
  <div class="job">
    <div class="job-controlers">
      <button v-on:click="deleteJob(index)">Delete Job</button>
      <button v-on:click="checkAsDone(job, index)">Check as done</button>
    </div>
    <div>
      Job name : {{job.name}}
    </div>
    <div>
      Job executor : {{job.executor}}
    </div>
    <div>
      Job deadline : {{job.deadline}}
    </div>
  </div>
</template>

<script>
  export default {
    mounted(){
    },
    props: {
      index: Number,
      job: Object,
      deleteJob: Function
    }
  }

</script>

<style lang="css">
  .job-controlers {
    display: none;
  }
  
  .job:hover .job-controlers {
    display: block;
  }
</style>