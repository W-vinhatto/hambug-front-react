import axios from 'axios'

const apiCodeBurguer = axios.create({
  baseURL: 'http://localhost:3001'
})
// injetando token nos params da url
apiCodeBurguer.interceptors.request.use(async config => {
  const userData = await localStorage.getItem('codeburguer:userData')
  // fazendo varificacão com if se userData não existir
  const token = userData && JSON.parse(userData).tokem
  config.headers.authorization = `Bearer ${token}`
  return config
})
export default apiCodeBurguer
