const handleDeleteLocalStorageItem = (name: string) => {
  window.localStorage.removeItem(name)
}

export default handleDeleteLocalStorageItem
