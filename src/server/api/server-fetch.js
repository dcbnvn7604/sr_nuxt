export default defineEventHandler((event) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{name: 'server-item1'}, {name: 'server-item2'}])
    }, 1000)
  })
})