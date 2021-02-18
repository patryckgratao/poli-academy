import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

const getAllProducts = () => {
  return axios.get(`http://localhost:3333/products`);
}

const getAllStock = () => {
  return axios.get(`http://localhost:3333/stock`);
}

export default { getAllProducts, getAllStock };
