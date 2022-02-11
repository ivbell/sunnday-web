export async function usePostTask(token: string, task_name: string) {
  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Bearer ${token}`)
  myHeaders.append('Content-Type', 'application/json')

  const raw = JSON.stringify({
    name: task_name,
  })

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  }

  fetch('http://localhost:5000/task/folder', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error))
}
