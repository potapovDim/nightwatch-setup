<template>
  <div class="cabinet">
    <div class="jobs-part-cabinet">
      <input type="checkbox" id="toggle-jobs" />
      <label for="toggle-jobs"></label>
      <div class="container"></div>
      <div class="message">
        <h1> JOBS</h1>
        <div class="jobs">
          <joblist v-bind:jobs="jobs" v-bind:deleteJob="deleteJob"></joblist>
          <createjob v-bind:createNewJob="createNewJob"></createjob>
        </div>
      </div>
    </div>
    <button class="logout">  
      <router-link to="/">Log out</router-link>
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
  .message {
    background: #181818;
    color: #FFF;
    position: absolute;
    top: -250px;
    left: 0;
    width: 100%;
    height: 250px;
    padding: 20px;
    transition: top 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
    overflow: hidden;
    box-sizing: border-box;
  }
  
  .message h1 {
    color: #FFF;
  }
  
  #toggle-jobs {
    position: absolute;
    appearance: none;
    cursor: pointer;
    left: -100%;
    top: -100%;
  }
  
  #toggle-jobs + label {
    position: absolute;
    cursor: pointer;
    padding: 10px;
    background: #26ae90;
    width: 100px;
    border-radius: 3px;
    padding: 8px 10px;
    color: #FFF;
    line-height: 20px;
    font-size: 12px;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    cursor: pointer;
    margin: 20px 50px;
    transition: all 500ms ease;
  }
  
  #toggle-jobs + label:after {
    content: "Open-jobs"
  }
  
  .container {
    transition: margin 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
  }
  
  #toggle-jobs:checked ~ .message {
    top: 0;
  }
  
  #toggle-jobs:checked ~ .container {
    margin-top: 250px;
  }
  
  #toggle-jobs:checked + label {
    background: #dd6149;
  }
  
  #toggle-jobs:checked + label:after {
    content: "Close-jobs"
  }

  .logout {
    width: 100px;
    height: 30px;
    background: rgba(250, 100, 100, 0.5);
  }
</style>