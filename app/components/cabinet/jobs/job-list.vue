<template>
    <div class="job-list">
        <template v-if="jobs && jobs.length" v-for="(job, index) in jobs">
            <job v-bind:job="job" v-bind:index="index" v-bind:deleteJob=deleteJob>
            </job>
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
            deleteJob: Function,
            jobs: Array
        },
        mounted() {
            console.log(this.jobs, this.deleteJob)
        },
        methods: {

        }
    }

</script>

<style lang="css">
    .job-list {
        overflow: scroll;
        width: 300px;
        height: 150px;
        padding: 5px;
        border: solid 1px black;
    }
</style>