const getLocalStorageData = (name: string) => {
  return JSON.parse(window.localStorage.getItem(name) as any) || ''
}

export default getLocalStorageData
