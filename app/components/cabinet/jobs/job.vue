<template>
  <div class="job">
    <div class="job-controlers">
      <button v-on:click="deleteJob(jobId)">Delete Job</button>
      <button v-on:click="checkAsDone(jobId)">Check as done</button>
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
      console.log('!!!!!!!!!!!')
    },
    props: {
      job: Object
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