import { Store } from 'vuex'
import { Observable } from 'rxjs'
import Transport from './transport'
import { State } from '.'

export function mFetchTransports (store: State,
  data: Transport[]): void {
  store.transports.push(...data)
}

export function mFetchTransportsErr (store: State,
  err: string): void {
  store.fetchTransportsError = err
}

export function mEmptyTransports (store: State): void {
  for (let i = store.transports.length - 1; i >= 0; i--) {
    store.transports.pop()
  }
}
