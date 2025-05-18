import axios from 'axios';

const API_BASE = 'http://localhost:3001/api';

export const fetchStocks = async () => {
  try {
    const response = await axios.get(`${API_BASE}/stocks`);
    return response.data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return [];
  }
};
