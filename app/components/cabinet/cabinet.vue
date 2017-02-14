<template>
  <div class="cabinet">
    <div class="menu">
      <div class="jobs-view">
        <div>Show jobs</div>
        <div class="jobs">
          <joblist v-bind:jobs="jobs" v-bind:deleteJob="deleteJob"></joblist>
          <createjob v-bind:createNewJob="createNewJob"></createjob>
        </div>
      </div>
      <div class="friends-view">Show friends</div>
    </div>
    <div>
      <router-link to="/">Log out</router-link>
    </div>
  </div>
</template>

<script>
  import { getData, postData, localStorageService } from '../../utils/index'
  import joblist from './jobs/job-list.vue'
  import createjob from './jobs/job-create.vue'
  export default {
    data() {
      return {
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
        postData({ url, data, callback: this.asserResponse, headers })

      },
      asserResponse(status, body) {
        console.log(status, body)
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
  .menu {
    display: flex;
    flex-wrap: wrap;
  }
  
  .jobs {
    display: none;
  }
  
  .jobs-view {
    width: 100px;
    height: 100px;
  }
  
  .jobs-view:hover .jobs {
    position: absolute;
    display: block;
  }
</style>