import { useNavigate } from 'react-router-dom'

import api from '../services/api'

api.interceptors.response.use( resp => resp, async error => {

    console.log(error)

    if (error.response.status === 401) {

      const data_local = JSON.parse(localStorage.getItem('token') || '{}')

      if (data_local) {

        const response = await api.post('', {
          refresh: data_local.refresh

        })

        if (response.status === 200) {

          api.defaults.headers.Authorization = `Bearer ${response.data.access}`
          localStorage.setItem('authTokens', JSON.stringify(response.data))

          return api(error.config)

        } else {

          localStorage.removeItem('authTokens')
          return error

        }

      } else {

        const navigate = useNavigate()
        navigate('/auth/login')

        return error

      }
    }
  }

);