import React, { useEffect, useState } from 'react';
import { getCuentas } from '../services/apiService';
import { Container, Grid, Card, CardContent, Typography } from '@mui/material';

const CuentasList = () => {
  const [cuentas, setCuentas] = useState([]);

  useEffect(() => {
    getCuentas().then(response => setCuentas(response.data));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Lista de Cuentas
      </Typography>
      <Grid container spacing={3}>
        {cuentas.map(cuenta => (
          <Grid item xs={12} sm={6} md={4} key={cuenta.ID_cuenta}>
            <Card>
              <CardContent>
                <Typography variant="h6">{cuenta.Nombre}</Typography>
                <Typography color="textSecondary">
                  Tipo: {cuenta.Tipo}
                </Typography>
                <Typography color="textSecondary">
                  Rubro: {cuenta.Rubro}
                </Typography>
                <Typography variant="body2">
                  Saldo: ${cuenta.Saldo.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CuentasList;
