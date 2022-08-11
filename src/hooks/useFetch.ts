import axios from 'axios'
import { useEffect, useState } from 'react'

export function useFetch<T = unknown>(url: string){

  const [data, setData] = useState<T | null>(null)

  const [isFetching, setIsFetching] = useState(true)

  const [ owner, setOwner ] = useState<string | null>(null)

  useEffect(() => {
    axios.get(url)
    .then(response => {
      setData(response.data)
      setOwner(response.data[0].owner.login)
    })
    .finally(() => {
      setIsFetching(false)
    })
  })

  return {data, isFetching, owner}
}