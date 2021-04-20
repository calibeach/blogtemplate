import posts from './data.json'

export function fetchPost() {
  // Fake fetch with 100ms delay to simulate an api call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(posts)
    }, 100)
  })
}