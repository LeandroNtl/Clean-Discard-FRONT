import api from "../services/api";

api.interceptors.request.use(async config => {

    const data_local = JSON.parse(localStorage.getItem('token') || '{}')

    if (data_local) {

      config.headers.Authorization = `Bearer ${data_local.access}`

    }

    return config

});