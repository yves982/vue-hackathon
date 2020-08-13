export default class ArrayUtils {
  static firstOrNull<T extends any> (arr: T[]) {
    return arr && arr.length > 0 ? arr[0] : null
  }
}
