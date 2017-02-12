<template>
  <div class="job-list"> 
    <template v-if="jobs && jobs.length" v-for="job in jobs">
      <job v-bind:job="job"></job>
    </template>
</div>
</template>

<script>
    import {
        postData
    } from '../../../utils/'
    import job from './job.vue'
    export default {
        components: {
            job
        },
        props: {
            jobs: Array
        },
        mounted() {
            console.log('jobs', this.jobs)
        },
        methods: {
            deleteJob(index) {
                if (this.jobs[index]) {
                  this.jobs.splice(index, 1)
                }
                else {
                  return
                }
            }
        }
    }
</script>

<style lang="css">

</style>