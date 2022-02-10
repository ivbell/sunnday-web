import Cookie from 'universal-cookie'

export default function useTokenCookie() {
  const cookie = new Cookie()
  const token = cookie.get('token')
  return {
    token,
  }
}
