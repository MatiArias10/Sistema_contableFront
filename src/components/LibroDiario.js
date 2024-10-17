// src/components/LibroDiario.js
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { getLibroDiario } from '../services/apiService';

const LibroDiario = () => {
  const [asientos, setAsientos] = useState([]);

  useEffect(() => {
    const fetchAsientos = async () => {
      try {
        const response = await getLibroDiario();
        setAsientos(response.data);
      } catch (error) {
        console.error("Error fetching asientos:", error);
      }
    };
    fetchAsientos();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><Typography variant="h6">Fecha</Typography></TableCell>
            <TableCell><Typography variant="h6">Descripción</Typography></TableCell>
            <TableCell><Typography variant="h6">Debe</Typography></TableCell>
            <TableCell><Typography variant="h6">Haber</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {asientos.map((asiento) => (
            <TableRow key={asiento.ID_asiento}>
              <TableCell>{asiento.Fecha}</TableCell>
              <TableCell>{asiento.Descripción}</TableCell>
              <TableCell>{asiento.Debe}</TableCell>
              <TableCell>{asiento.Haber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LibroDiario;
