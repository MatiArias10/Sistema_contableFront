import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const LibroDiarioPage = () => {
    const [asientos, setAsientos] = useState([]);

    useEffect(() => {
        const fetchAsientos = async () => {
            const response = await axios.get('http://localhost:3000/api/asientos');
            setAsientos(response.data);
        };
        fetchAsientos();
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Libro Diario
            </Typography>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Fecha</TableCell>
                            <TableCell>Descripción</TableCell>
                            <TableCell>Debe</TableCell>
                            <TableCell>Haber</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {asientos.map(asiento => (
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
        </Container>
    );
};

export default LibroDiarioPage;
