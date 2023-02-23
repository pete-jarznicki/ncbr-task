export const asyncLocalStorage = {
  setItem: async function <T>(key: string, value: T) {
    await null
    const stringifiedValue = JSON.stringify(value)
    return localStorage.setItem(key, stringifiedValue)
  },
  getItem: async function (key: string) {
    await null
    return JSON.parse(localStorage.getItem(key) as string)
  },
  deleteItem: async function (key: string) {
    await null
    return localStorage.removeItem(key)
  },
}
