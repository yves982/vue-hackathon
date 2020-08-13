import Transport from '../store/transport'

export default class TransportUtils {
  static nomPrenomClient (obj: Transport) {
    return (obj?.PrenomClient ?? '') + ' ' + (obj?.NomClient ?? '')
  }
}
