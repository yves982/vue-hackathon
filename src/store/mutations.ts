import Vuex from 'vuex'
import Transport from './transport'
import store, { State } from '.'

export function mFetchTransports (store: State,
  data: Transport[]): void {
  store.transports.push(...data)
}

export function mFetchTransportsErr (store: State,
  err: string): void {
  store.fetchTransportsError = err
}

export function mEmptyTransports (store: State): void {
  store.transports = []
}
