import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const LibroMayorPage = () => {
    const [libroMayor, setLibroMayor] = useState([]);

    useEffect(() => {
        const fetchLibroMayor = async () => {
            const response = await axios.get('http://localhost:3000/api/asientos/libro-mayor');
            setLibroMayor(response.data);
        };
        fetchLibroMayor();
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Libro Mayor
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre de Cuenta</TableCell>
                            <TableCell>Total Debe</TableCell>
                            <TableCell>Total Haber</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {libroMayor.map(cuenta => (
                            <TableRow key={cuenta.Nombre}>
                                <TableCell>{cuenta.Nombre}</TableCell>
                                <TableCell>{cuenta.Total_Debe}</TableCell>
                                <TableCell>{cuenta.Total_Haber}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default LibroMayorPage;
