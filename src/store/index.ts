import Vue from 'vue'
import Vuex from 'vuex'
import Transport from './transport'
import { mFetchTransports } from './mutations'
import {
  FETCH_TRANSPORT,
  aFetchTransports
} from './actions'

Vue.use(Vuex)

export interface State {
  transports: Array<Transport>;
  fetchTransportsError: string;
}

export default new Vuex.Store<State>({
  state: {
    transports: Array<Transport>(),
    fetchTransportsError: ''
  },
  mutations: {
    fetchTransports: mFetchTransports.bind(this)
  },
  actions: {
    fetchTransports: aFetchTransports.bind(this)
  },
  modules: {
  }
})
