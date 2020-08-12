import { Store } from 'vuex'
import { Observable } from 'rxjs'
import Transport from './transport'
import { State } from '.'

export function mFetchTransports (store: State,
  data: Observable<Transport[]>): void {
  data
    .subscribe(
      transport => { store.transports.push(...transport) },
      err => { store.fetchTransportsError = err })
}
