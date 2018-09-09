<template>
    <div id="taskBar" class="row">
        <div class="col-sm-6">
            <b-input-group>
                <b-input-group-prepend  is-text>
                    <icon name="search"></icon>
                </b-input-group-prepend>
                <b-form-input v-model="countrySearch" type="text" placeholder="Search Country..."></b-form-input>
            </b-input-group>
        </div>
        <div class="col-sm-6">
            <b-input-group>
                <b-input-group-prepend  is-text>
                    <icon name="search"></icon>
                </b-input-group-prepend>
                <b-form-input v-model="conditionSearch" type="text" placeholder="Search Weather Condition..."></b-form-input>
            </b-input-group>
        </div>
    </div>
</template>

<script>
export default {
  name: 'WeatherSearch',
  data() {
    return {
      countrySearch: '',
      conditionSearch: ''
    }
  },
  watch: {
      countrySearch(){
          this.emitSearch()
      },
      conditionSearch(){
          this.emitSearch()
      }
  },
  methods: {
    emitSearch (event) {
        this.$emit('emitSearch', this.countrySearch, this.conditionSearch)
    }
  }
}
</script>
