import axios from 'axios';

// URL base de tu API
const API_URL = 'http://localhost:3000/api/cuentas'; // Cambia esto si es necesario

// Función para obtener todos los asientos contables
export const fetchAsientos = async () => {
    try {
        const response = await axios.get(`${API_URL}/asientos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching asientos:', error);
        throw error; // Lanza el error para que pueda ser manejado en el componente
    }
};

// Función para obtener el libro diario
export const fetchLibroDiario = async () => {
    try {
        const response = await axios.get(`${API_URL}/libro-diario`);
        return response.data;
    } catch (error) {
        console.error('Error fetching libro diario:', error);
        throw error;
    }
};

// Función para obtener el libro mayor
export const fetchLibroMayor = async () => {
    try {
        const response = await axios.get(`${API_URL}/libro-mayor`);
        return response.data;
    } catch (error) {
        console.error('Error fetching libro mayor:', error);
        throw error;
    }
};

// Puedes añadir más funciones para otros endpoints si es necesario

