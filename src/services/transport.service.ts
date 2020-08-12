import axios from 'axios'
import { Observable, from } from 'rxjs'
import Config from '../config'
import moment from 'moment'

export default class TransportService {
  public getTransports (idClient: number, journee: Date): Observable<Transport[]> {
    return from(axios.get<Transport[]>(Config.baseUrl + 'mission/ObtenirClient', {
      params: {
        idClient,
        journee: moment(journee).format('yyyy-MM-DDT00:00:00')
      },
      auth: {
        username: 'sysadmin',
        password: 'sys@dm1n86'
      }
    })
      .then(r => r.data)
    )
  }
}
