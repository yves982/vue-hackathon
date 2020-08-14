<template>
  <div id="app">
    <div class="intro">
      Liste des missions de l'élève {{ transports | arrFirst | nomPrenomClient}}
    </div>
    <div class="btn">
      <button @click="loadLst">{{btnTxt}}</button>
    </div>
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
}

.col-xs-1 { width: 8.33%; }
.col-xs-2 { width: 16.66%; }
.col-xs-3 { width: 25%; }
.col-xs-4 { width: 33.33%; }
.col-xs-5 { width: 41.66%; }
.col-xs-6 { width: 50%; }
.col-xs-7 { width: 58.33%; }
.col-xs-8 { width: 66.66%; }
.col-xs-9 { width: 75%; }
.col-xs-10 { width: 83.33%; }
.col-xs-11 { width: 91.66%; }
.col-xs-12 { width: 100%; }

.col-xs-1, .col-xs-2,.col-xs-2,.col-xs-3,
.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,
.col-xs-8,.col-xs-9,.col-xs-10,.col-xs-11,
.col-xs-12
{
    padding: 0 6px;
}

.pull-right {
  text-align: right;
}
.pull-left {
  text-align: left;
}

.bold {
  font-weight: bold;
}

.transport-container {
    margin: 0px auto 12px auto;
    width: 600px;
}

.transport-container:first-child {
    margin-top: 12px;
}

.row:nth-child(2) .heure-item::after {
  content: "";
  display: block;
  height: 28px;
  margin-left: 72px;
  margin-top: 6px;
  border-left: 1px solid black;
}

.transport-container {
    border: 2.4px solid black;
}

.transport-container > .row:first-child {
    margin-top: 6px;
}
.transport-container > .row:last-child {
    margin-bottom: 6px;
}
</style>
<script lang="ts">
import moment from 'moment'
import StrongVue from './store/strongvue'
import { FETCH_TRANSPORT, FetchTransportParams, EMPTY_TRANSPORT } from './store/actions'
import AppAlert from './components/app-alert.vue'
import AppTransport from './components/app-transport.vue'
import Transport from './store/transport'
import { mapState } from 'vuex'
export default StrongVue.extend({
  created () {
    moment.locale('fr')
  },
  components: {
    AppAlert,
    AppTransport
  },
  computed: {
    // maps this.$store.transports to a transports computed property
    // equivalent of transports: function() { return this.$store.transports }
    ...mapState({
      transports: 'transports',
      error: 'fetchTransportsError'
    }),
    btnTxt (): string {
      if (this.transports && this.transports.length > 0) {
        return 'Masquer les missions'
      } else {
        return 'Charger les missions'
      }
    }
  },
  methods: {
    loadLst (): void {
      if (this.transports && this.transports.length > 0) {
        this.$store.dispatch({
          type: EMPTY_TRANSPORT
        })
      } else {
        const prms = new FetchTransportParams(39, new Date(2020, 7, 5))
        this.$store.dispatch({
          type: FETCH_TRANSPORT,
          idClient: prms.idClient,
          journee: prms.journee
        })
      }
    }
  }
})
</script>
