import axios from 'axios'
import useSWR from 'swr'

export interface TaskFolder {
  readonly _id: string
  readonly count: number
  readonly child_folder: string
  readonly deleted: string
  readonly name: string
  readonly user_id: string
  readonly createdAt: string
  readonly updatedAt: string
  readonly parent: string
  readonly __v: number
}

const fetcher = (url: string, token: string) =>
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data)

export function useTaskFolder(token: string) {
  const { data, error } = useSWR<TaskFolder[], any>(
    [`${import.meta.env.VITE_SERVER}/task/folder`, token],
    fetcher
  )
  return {
    data_task_folder: data,
    is_loading: !error && !data,
    is_error: error,
  }
}
