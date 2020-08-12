<template>
  <div id="app">
    <div id="transports-list">
      <app-transport v-for="tr of transports" :transport="tr" :key="tr.id"></app-transport>
    </div>
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
</style>
<script lang="ts">
import Vue from 'vue'
import Transport from './store/transport'
import StrongVue from './store/strongvue'
import { FETCH_TRANSPORT, FetchTransportParams } from './store/actions'
import { State } from './store'
import AppAlert from './components/app-alert.vue'
import AppTransport from './components/app-transport.vue'
import AppAdresse from './components/app-adresse.vue'

export default StrongVue.extend({
  data () {
    return {
      transports: this.$store.state.transports,
      error: this.$store.state.fetchTransportsError
    }
  },
  created () {
    const prms = new FetchTransportParams(97, new Date(2020, 3, 12))
    this.$store.dispatch({
      type: FETCH_TRANSPORT,
      idClient: prms.idClient,
      journee: prms.journee
    })
  },
  components: {
    AppAlert, AppTransport, AppAdresse
  }
})
</script>
