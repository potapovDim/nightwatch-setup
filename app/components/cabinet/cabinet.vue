<template>
  <div class="cabinet">
    <div class="cabinet-controls">
      <button type="button" v-on:click="changeView('jobs')">Jobs</button>
      <button type="button" v-on:click="changeView('friends')">Friends</button>
      <button type="button" v-on:click="changeView('relatives')">Relatives</button>
    </div>
    <div v-if="currentView ==='jobs'" class="jobs">
      <joblist></joblist>
    </div>
    <div v-else-if="currentView ==='friends'">
      <friendslist></friendslist>
    </div>
    <div v-else-if="currentView ==='relatives'">
      <relativeslist></relativeslist>
    </div>

    <button class="btn logout" v-on:click="clearStorageData">
      <router-link v-on:click="clearStorageData" to="/">Log out</router-link>
    </button>
  </div>
</template>

<script>
  import { getData, postData, localStorageService } from '../../utils/index'
  import joblist from './jobs/job-list.vue'
  import friendslist from './friends/friend-list.vue'
  import relativeslist from './relatives/relative-list.vue'

  export default {
    data() {
      return {
        currentView: null
      }
    },
    components: {
      joblist,
      friendslist,
      relativeslist
    },
    mounted() {
    },
    methods: {
      clearStorageData() {
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
    top: 50px;
    position: absolute;
    width: 100px;
    height: 30px;
    margin-left: 90%;
    background: rgba(250, 255, 255, 0.5);
  }
  .cabinet-controls {
    margin-bottom: -80%;
    position: absolute;
  }
</style>