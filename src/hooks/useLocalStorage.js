import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key) //get data from localStorage
    return stored !== null ? stored : initialValue //initial value of state is the localStorage data if it is not null, or else it is initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, value) //only stringify if not already a string
  },[key,value]) //if the key or value changes, local storage will update

  return [value, setValue]
}
