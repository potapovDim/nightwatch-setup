<template>
    <div class="cabinet">
      <div class="center-data">
        cabinet
      </div>
    </div>
</template>

<script>
    import {getData, postData, localStorageService} from '../../utils/index'

    export default {
        data () {
          return {
            friends :[],
            relatives: [],
            jobs: []
          }
        },
        mounted () {
          this.getUserJobs()
        },
        methods: {
          getUserJobs(){
            const url = 'http://localhost:4422/jobslist'
            const headers = {
              id: localStorageService.get('id'),
              token: localStorageService.get('token')
            }
            getData({url, headers, callback: (status, body) => {
              status === 200 ? this.jobs = body.userJobs : null
            }})
          },
          createNewJob(job){
            this.jobs.push(job)
          }
        }
    }
</script>

<style>
  
</style>