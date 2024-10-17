// src/pages/Home.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom align="center">
        Bienvenido al Sistema Contable
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Libro Diario</Typography>
              <Button component={Link} to="/libro-diario" variant="contained" color="primary" fullWidth>
                Ir a Libro Diario
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Libro Mayor</Typography>
              <Button component={Link} to="/libro-mayor" variant="contained" color="primary" fullWidth>
                Ir a Libro Mayor
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
