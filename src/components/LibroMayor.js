// src/components/LibroMayor.js
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { getLibroMayor } from '../services/apiService';

const LibroMayor = () => {
  const [cuentas, setCuentas] = useState([]);

  useEffect(() => {
    const fetchCuentas = async () => {
      try {
        const response = await getLibroMayor();
        setCuentas(response.data);
      } catch (error) {
        console.error("Error fetching cuentas:", error);
      }
    };
    fetchCuentas();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><Typography variant="h6">Cuenta</Typography></TableCell>
            <TableCell><Typography variant="h6">Saldo</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cuentas.map((cuenta) => (
            <TableRow key={cuenta.ID_cuenta}>
              <TableCell>{cuenta.Nombre}</TableCell>
              <TableCell>{cuenta.Saldo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LibroMayor;
