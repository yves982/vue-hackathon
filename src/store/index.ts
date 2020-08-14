import Vue from 'vue'
import Vuex from 'vuex'
import Transport from './transport'
import { mFetchTransports, mEmptyTransports } from './mutations'
import {
  FETCH_TRANSPORT,
  aFetchTransports,
  aEmptyTransports
} from './actions'

Vue.use(Vuex)

export interface State {
  transports: Array<Transport>;
  fetchTransportsError: string;
}

export default new Vuex.Store<State>({
  state: {
    transports: new Array<Transport>(),
    fetchTransportsError: ''
  },
  mutations: {
    fetchTransports: mFetchTransports.bind(this),
    emptyTransports: mEmptyTransports.bind(this)
  },
  actions: {
    fetchTransports: aFetchTransports.bind(this),
    emptyTransports: aEmptyTransports.bind(this)
  },
  modules: {
  },
  devtools: true
})
