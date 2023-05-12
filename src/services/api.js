import axios from 'axios';

const api = axios.create({
  baseURL: 'https://04e8-191-240-190-213.sa.ngrok.io/receita',
      headers: {
      'Access-Control-Allow-Origin': '*', // permitir acesso de qualquer endereço
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE', // permitir métodos HTTP específicos
      'Access-Control-Allow-Headers': 'Content-Type, Authorization' // permitir headers específicos
    }
});

export default api;