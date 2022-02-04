import axios from 'axios'
import useSWR from 'swr'

interface useUser {
  readonly user_id: string
  readonly auth: boolean
}

const fetcher = (url: string, token: string) =>
  axios
    .get(url, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjJjMDVlNjkzMDBkYTIwNjA0MTk1ZSIsImlhdCI6MTY0Mzk4NTE0MSwiZXhwIjoxNjQzOTg4NzQxfQ.MJsI_dMn1rA05i678s0-0xpYXZYjL7XrMLQj_aHca0A',
      },
    })
    .then((res) => res.data)

export function useUser(token: string) {
  const { data, error } = useSWR(
    [`${import.meta.env.VITE_SERVER}/auth`, token],
    fetcher,
  )

  return {
    dataUser: data,
    isLoading: !error && !data,
    isError: error,
  }
}
