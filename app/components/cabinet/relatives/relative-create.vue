<template>
   <div class="new-relative-create">
    <label for="relative-name">Name</label>
    <input type="text" id="relative-name" placeholder="relative name" v-model="relative.name">
    <label for="relative-lastname">relative lastname</label>
    <input type="text" id="relative-lastname" placeholder="relative lastname" v-model="relative.lastname">
    <label for="relative-phone">relative phone</label>
    <input type="text" id="relative-phone" placeholder="relative phone" v-model="relative.phone">
    <label for="relative-address">relative social</label>
    <input type="text" id="relative-address" placeholder="relative address" v-model="relative.address">
    <button v-on:click="click()">
      Create new relative
    </button>
  </div>
</template>

<script>
export default {
    props: {
      createRelative: Function
    },
    data() {
      return {
        relative: {
          name: null,
          lastname: null,
          phone: null,
          address: null
        }
      }
    },
    methods: {
      click(){
        console.log("!!!!!!!!!!!!!!!click")
        const {name, lastname, phone, address} = this.relative
        this.createRelative({name, lastname, phone, address})
      }
    }
  }
</script>

<style>

</style>