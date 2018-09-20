<template>
<b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-brand tag="h1" class="mb-0">
     {{ AppName }}
    </b-navbar-brand>
        <b-navbar-nav class="ml-auto">
          <button type="button" :disabled="isLoading" v-on:click="refresh" class="btn btn-block btn-info"><icon name="sync-alt"></icon></button>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
// Import bootstrap CSS files
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// added mapGetters 
// isLoading to check loading state - disabled refresh when loading
import { mapGetters} from 'vuex'

export default {
  name: 'WeatherNav',
  data() {
    return {
      AppName: 'Weather App',
    }
  },
  computed:{
    ...mapGetters([
      'isLoading'
    ])
  },
  methods: {
    refresh () {
       // refresh calls async action
        this.$store.dispatch('GET_DATA')
    }
  }
}

</script>

