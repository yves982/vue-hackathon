import { ActionContext } from 'vuex'
import { State } from '.'
import TransportService from '@/services/transport.service'
export const FETCH_TRANSPORT = 'fetchTransports'
export const EMPTY_TRANSPORT = 'emptyTransports'
export const FETCH_TRANSPORT_ERR = 'fetchTransportsErr'

export class FetchTransportParams {
    public idClient = 0;
    public journee: Date = new Date(1899, 1, 1);

    constructor (idClient: number, journee: Date) {
      this.idClient = idClient
      this.journee = journee
    }
}

export function aFetchTransports (ctx: ActionContext<State, State>,
  params: FetchTransportParams) {
  const transportSvc = new TransportService()
  const transports = transportSvc.getTransports(params.idClient, params.journee)
    .subscribe(
      transport => {
        ctx.commit(FETCH_TRANSPORT, transport)
      },
      err => {
        ctx.commit(FETCH_TRANSPORT_ERR, err)
      })
}
export function aEmptyTransports (ctx: ActionContext<State, State>,
  params: FetchTransportParams) {
  ctx.commit(EMPTY_TRANSPORT)
}
