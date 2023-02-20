const setLocalStorageItem = <T>(name: string, value: T) => {
  const stringifedValue = JSON.stringify(value)
  window.localStorage.setItem(name, stringifedValue)
}

export default setLocalStorageItem
