import axios from 'axios'
import useSWR from 'swr'

const fetcher = (url: string, token: string) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)

export function useUser(token: string) {
  const { data, error } = useSWR(
    [`${import.meta.env.VITE_SERVER}/auth`, token],
    fetcher
  )

  return {
    dataUser: data,
    isLoading: !error && !data,
    isError: error,
  }
}
