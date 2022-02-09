import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon' //localização base da nossa API
})

export default Api;