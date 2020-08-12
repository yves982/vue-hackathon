import moment from 'moment'

export default class DateUtils {
  public static format (date: Date): string {
    return moment(date).format('yyyy-MM-DDT00:00')
  }
}
