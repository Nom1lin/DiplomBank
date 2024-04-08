import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3002/api',
    // validateStatus: () => true,
})

instance.interceptors.request.use((config) => { // настраиваем запросы на сервер, а именно токен при регистрации
    config.headers.Authorization = window.localStorage.getItem('token')

    return config
})

export default instance
