import axios from 'axios';

// Access to XMLHttpRequest at 'http://localhost:5000/roles/' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.


const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export default api;