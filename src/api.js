import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getPrendas = async () => {
  try {
    const response = await axios.get(`${API_URL}/prendas`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener prendas:', error);
    return [];
  }
};

export const getCategorias = async () => {
  try {
    const response = await axios.get(`${API_URL}/categorias`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    return [];
  }
};
