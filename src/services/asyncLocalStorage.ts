// @ts-nocheck

export const asyncLocalStorage = {
  setItem: async function (key: string, value: any) {
    await null
    const stringifiedValue = JSON.stringify(value)
    return localStorage.setItem(key, stringifiedValue)
  },
  getItem: async function (key: string) {
    await null
    return JSON.parse(localStorage.getItem(key))
  },
  deleteItem: async function (key: string) {
    await null
    return localStorage.removeItem(key)
  },
}
