<template>
    <div id="taskBar" class="row">
        <div class="col-sm-6">
            <b-input-group>
                <b-input-group-prepend  is-text>
                    <icon name="search"></icon>
                </b-input-group-prepend>
                <b-form-input v-model="countrySearch" :disabled="hasErrors || isLoading" type="text" placeholder="Search Country..."></b-form-input>
            </b-input-group>
        </div>
        <div class="col-sm-6">
            <b-input-group>
                <b-input-group-prepend  is-text>
                    <icon name="search"></icon>
                </b-input-group-prepend>
                <b-form-input v-model="conditionSearch" :disabled="hasErrors || isLoading" type="text" placeholder="Search Weather Condition..."></b-form-input>
            </b-input-group>
        </div>
    </div>
</template>

<script>

// added mapGetters 
// hasErrors to check errors state - disabled search if errors exist
import { mapGetters} from 'vuex'

export default {
  name: 'WeatherSearch',
  data() {
    return {
      countrySearch: '',
      conditionSearch: ''
    }
  },
    computed:{
    ...mapGetters([
      'hasErrors',
      'isLoading'
    ])
  },
  watch: {
      countrySearch(){
          this.updateSearch()
      },
      conditionSearch(){
          this.updateSearch()
      }
  },
  methods: {
    updateSearch (event) {
        this.$store.commit('UPDATE_SEARCH', { country: this.countrySearch, condition: this.conditionSearch })
    }
  }
}
</script>
