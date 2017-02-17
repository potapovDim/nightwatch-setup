<template>
     <div>
        <div class="job-list">
            <template v-if="relatives && relatives.length" v-for="(job, index) in relatives">
                <relative v-bind:relative="relative" v-bind:index="index" v-bind:deleteRelative=deleteRelative>
                </relative>
            </template>
        </div>
        <relativecreate v-bind:createRelative="createRelative"></relativecreate>
    </div>
</template>

<script>
    import { postData, localStorageService, getData } from '../../../utils/'
    import relative from './relative.vue'
    import relativecreate from './relative-create.vue'

    export default {
        data() {
            return {
                relatives: []
            }
        },
        components: {
            relative,
            relativecreate
        },
        mounted() {
            this.getUserRelatives()
        },
        destroyed() {
            this.sendDataToServer()
        },
        methods: {
            initRelatives(status, {userRelatives}) {
                console.log('jobs', userRelatives)
                status === 200
                    ? this.relatives = userRelatives
                    : null
            },
            getUserRelatives() {
                const url = 'http://localhost:4422/relativelist'
                const headers = {
                    id: localStorageService.get('id'),
                    token: localStorageService.get('token')
                }
                getData({ url, headers, callback: this.initJobs })
            },
            createRelative(item) {
                this.relatives.push(item)
            },
            sendDataToServer() {
                const url = 'http://localhost:4422/relativelist'
                const headers = {
                    id: localStorageService.get('id'),
                    token: localStorageService.get('token')
                }
                const data = {
                    relatives: this.relatives
                }
                postData({ url, data, callback: this.asserResponse, headers })

            },
            asserResponse(status, body) {
                console.log(status, body)
            },
            deleteRelative(index) {
                if (this.jobs[index]) {
                    const url = 'http://localhost:4422/relativedelete'
                    const headers = {
                        id: localStorageService.get('id'),
                        token: localStorageService.get('token')
                    }
                    const data = {
                        job: this.relatives[index]
                    }
                    postData({ url, data, callback: this.asserResponse, headers })
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