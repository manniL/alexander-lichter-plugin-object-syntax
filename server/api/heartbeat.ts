export default defineEventHandler(() => {
  console.log('Heartbeat received at ' + new Date().toLocaleTimeString())
  return 'Pong'
})