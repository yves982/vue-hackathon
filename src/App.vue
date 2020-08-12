<template>
  <div id="app">
    <div id="transports-list" v-if="transports.length > 0">
        <app-transport v-for="tr in transports" :transport="tr" :key="tr.id"></app-transport>
    </div>
    <div id="transports-list" v-else></div>
    <app-alert :msg="error"></app-alert>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.row {
    display: flex;
    justify-content: center;
  }

.container {
  display: flex;
}

.col-xs-1 { widows: 8.33%; }
.col-xs-2 { widows: 16.66%; }
.col-xs-3 { widows: 25%; }
.col-xs-4 { widows: 33.33%; }
.col-xs-5 { widows: 41.66%; }
.col-xs-6 { widows: 50%; }
.col-xs-7 { widows: 58.33%; }
.col-xs-8 { widows: 66.66%; }
.col-xs-9 { widows: 75%; }
.col-xs-10 { widows: 83.33%; }
.col-xs-11 { widows: 91.66%; }
.col-xs-12 { widows: 100%; }
</style>
<script lang="ts">
import StrongVue from './store/strongvue'
import { FETCH_TRANSPORT, FetchTransportParams } from './store/actions'
import AppAlert from './components/app-alert.vue'
import AppTransport from './components/app-transport.vue'

export default StrongVue.extend({
  data () {
    return {
      transports: this.$store.state.transports,
      error: this.$store.state.fetchTransportsError
    }
  },
  created () {
    const prms = new FetchTransportParams(39, new Date(2020, 7, 5))
    this.$store.dispatch({
      type: FETCH_TRANSPORT,
      idClient: prms.idClient,
      journee: prms.journee
    })
  },
  components: {
    AppAlert,
    AppTransport
  }
})
</script>
