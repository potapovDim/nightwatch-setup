<template>
  <div class="job">
    <div class="job-controlers">
      <button v-on:click="deleteJob(jobId)">Delete Job</button>
      <button v-on:click="checkAsDone(jobId)">Check as done</button>
    </div>
    <div>
      Job name : {{name}}
    </div>
    <div>
      Job executor : {{executor}}
    </div>
    <div>
      Job deadline : {{deadline}}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      jobId: String,
      name: String,
      executor: String,
      deadline: String,
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