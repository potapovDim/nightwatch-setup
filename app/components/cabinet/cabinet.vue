<template>
  <div class="cabinet">
    <div v-if="currentView ==='jobs'" class="jobs">
      <joblist></joblist>
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
  export default {
    data() {
      return {
        currentView: null
      }
    },
    components: {
      joblist,
    },
    mounted() {
    },
    methods: {
      clearStorageData(){
        console.log('clear data')
        localStorageService.clearAll()
      },
      changeView(view) {
        this.currentView !== view ? this.currentView = view : this.currentView = null
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