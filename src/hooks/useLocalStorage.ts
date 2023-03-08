import { useState, useEffect } from "react"


// this hook allows the app to save items that have been added in previous sessions
// implement use state logic
// value T is used to tell typescript that it can only be a value and never a function

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
    const [value, setValue] = useState<T>(() => {

      const jsonValue = localStorage.getItem(key)
      // if there are values in localstorage, then we can parse it out.
      if (jsonValue != null) return JSON.parse(jsonValue)
  
      if (typeof initialValue === "function") {
        return (initialValue as () => T)()
      } else {
        return initialValue
      }
    })
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
  
    // first value will always be of type value, second value will be of type setValue
    return [value, setValue] as [typeof value, typeof setValue]
  }