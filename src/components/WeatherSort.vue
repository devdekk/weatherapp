<template>
    <div  id="sortButtons" class="row">
        <div style="width: 33%" class="btn-group btn-group-justified" v-for="(button,key) in sortButtons" :key="key">
            <button type="button" v-bind:class="{ active: button.sort == selectedSort  }" v-on:click="updateSortState(button.sort)"
                    class="btn btn-block btn-info">{{ button.name }}</button>
        </div>
    </div>
</template>

<script>

// Import config data
import config from '../config'

export default {
  name: 'WeatherSort',
  data() {
    return {
      sortButtons: [],
      selectedSort: ''
    }
  },
  created() {
    // Import sort buttons from config
    this.sortButtons = config.SortButtons
    // Set initial sort to first item in buttons array (A-Z)
    this.selectedSort = this.sortButtons[0].sort

    // Call the updateSortState function
    this.updateSortState(this.selectedSort)
  },
  methods: {
      // Function that will update selected sort in store
      updateSortState(sort){
          this.selectedSort = sort
          this.$store.commit('updateSort', sort)
      }
  }
}
</script>

<style>

#sortButtons{
    padding: 15px;
}

</style>
