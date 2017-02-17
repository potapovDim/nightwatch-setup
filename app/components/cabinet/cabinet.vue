<template>
  <div class="cabinet">
    <div v-if="currentView ==='jobs'" class="jobs">
      <joblist v-bind:jobs="jobs" v-bind:deleteJob="deleteJob"></joblist>
      <createjob v-bind:createNewJob="createNewJob"></createjob>
    </div>
    <div v-else-if="currentView ==='friends'">
      <div>
        Users
      </div>
    </div>



    <button type="button" v-on:click="changeView('jobs')">Jobs</button>
    <button type="button" v-on:click="changeView('friends')">Friends</button>
    <button class="logout" v-on:click="clearStorageData">  
      <router-link v-on:click="clearStorageData" to="/">Log out</router-link>
    </button>
  </div>
</template>

<script>
  import { getData, postData, localStorageService } from '../../utils/index'
  import joblist from './jobs/job-list.vue'
  import createjob from './jobs/job-create.vue'
  export default {
    data() {
      return {
        currentView: null,
        friends: [],
        relatives: [],
        jobs: []
      }
    },
    components: {
      joblist,
      createjob
    },
    destroyed() {
      this.sendDataToServer()
    },
    mounted() {
      this.getUserJobs()
    },
    methods: {
      clearStorageData(){
        console.log('clear data')
        localStorageService.clearAll()
      },
      changeView(view) {
        this.currentView !== view ? this.currentView = view : this.currentView = null
      },
      initJobs(status, {userJobs}) {
        console.log('jobs', userJobs)
        status === 200
          ? this.jobs = userJobs
          : null
      },
      getUserJobs() {
        const url = 'http://localhost:4422/jobslist'
        console.log(localStorageService.get('id'),localStorageService.get('token'))
        console.log(localStorageService.get('id'),localStorageService.get('token'))
        const headers = {
          id: localStorageService.get('id'),
          token: localStorageService.get('token')
        }
        getData({ url, headers, callback: this.initJobs })
      },
      createNewJob(job) {
        this.jobs.push(job)
      },
      sendDataToServer() {
        const url = 'http://localhost:4422/jobslist'
        const headers = {
          id: localStorageService.get('id'),
          token: localStorageService.get('token')
        }
        const data = {
          jobs: this.jobs
        }
        console.log('send data', this.jobs)
        postData({ url, data, callback: this.asserResponse, headers })

      },
      asserResponse(status, body) {
        console.log(status, body)
      },
      deleteJob(index) {
        console.log(this.jobs)
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
  
  .logout {
    top: -98%;
    width: 100px;
    height: 30px;
    background: rgba(250, 100, 100, 0.5);
  }
</style>