/**
 * 날짜 스트링 반환.
 */
export function getDateString() {
  var date = new Date()
  return (
    `${date.toISOString().slice(0, 10)} ` +
    `${date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1')} `
  )
}
