import moment from 'moment'

export default class DateUtils {
  public static format (date: Date): string {
    return moment(date).format('yyyy-MM-DDT00:00')
  }

  public static formatHeure (date: Date): string {
    return moment(date).format('HH:mm')
  }

  public static formatHR (date: Date): string {
    const fmt = moment(date).format('dddd DD MMM yyyy')
    return fmt[0].toUpperCase() + fmt.substr(1)
  }
}
