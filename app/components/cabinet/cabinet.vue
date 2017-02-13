<template>
    <div class="cabinet">
      <div class="job-list">   
        <joblist 
            v-bind:jobs="jobs"
            v-bind:deleteJob="deleteJob">
        </joblist>
      </div>
      <div class="center-data">
        cabinet
      </div>
      <div>
        <createjob v-bind:createNewJob="createNewJob"></createjob>
      </div>
      <div>
         <router-link to="/">Log out</router-link>
      </div>
    </div>
</template>

<script>
    import {getData, postData, localStorageService} from '../../utils/index'
    import joblist from './jobs/job-list.vue'
    import createjob from './jobs/job-create.vue'

    export default {
        data () {
          return {
            friends :[],
            relatives: [],
            jobs: []
          }
        },
        components: {
          joblist,
          createjob
        },
        destroyed () {
          this.sendDataToServer()
        },
        mounted () {
          this.getUserJobs()
        },
        methods: {
          initJobs(status, {userJobs}) {
            console.log('jobs', userJobs)
            status === 200
                ? this.jobs = userJobs
                : null
          },
          getUserJobs() {
            const url = 'http://localhost:4422/jobslist'
            const headers = {
              id: localStorageService.get('id'),
              token: localStorageService.get('token')
            }
            getData({url, headers, callback: this.initJobs})
          },
          createNewJob(job) {
            this.jobs.push(job)
          },
          sendDataToServer() {

          },
          deleteJob(index) {
            if (this.jobs[index]) {
              this.jobs.splice(index, 1)
            } else {
              return
            }
          }
      }
    }
</script>

<style>
  
</style>