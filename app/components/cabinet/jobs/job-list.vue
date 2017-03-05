<template>
    <div>
        <div class="job-list">
            <template v-if="jobs && jobs.length" v-for="(job, index) in jobs">
                <job v-bind:job="job" v-bind:index="index" v-bind:deleteJob=deleteJob>
                </job>
            </template>
        </div>
        <jobcreate v-bind:createJob="createJob"></jobcreate>
    </div>
</template>

<script>
    import { postData, localStorageService, getData } from '../../../utils/'
    import job from './job.vue'
    import jobcreate from './job-create.vue'

    export default {
        data() {
            return {
                jobs: []
            }
        },
        components: {
            job,
            jobcreate
        },
        mounted() {
            this.getUserJobs()
        },
        destroyed() {
            this.sendDataToServer()
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
            createJob(item) {
                this.jobs.push(item)
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
                if (this.jobs[index]) {
                    const url = 'http://localhost:4422/jobdelete'
                    const headers = {
                        id: localStorageService.get('id'),
                        token: localStorageService.get('token')
                    }
                    const data = {
                        job: this.jobs[index]
                    }
                    console.log('send data', this.jobs[index])
                    postData({ url, data, callback: this.asserResponse, headers })
                    this.jobs.splice(index, 1)
                } else {
                    return
                }
            }
        }
    }

</script>

<style lang="css">
</style>