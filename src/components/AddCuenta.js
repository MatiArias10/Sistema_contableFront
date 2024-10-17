import React, { useState } from 'react';
import { modificarCuenta } from '../services/apiService';
import { Container, TextField, Button, Typography } from '@mui/material';

const ModificarCuenta = () => {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    modificarCuenta(id, { Nombre: nombre, Tipo: tipo })
      .then(() => alert('Cuenta modificada exitosamente'))
      .catch((error) => console.error('Error al modificar la cuenta', error));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Modificar Cuenta
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="ID de Cuenta"
          value={id}
          onChange={(e) => setId(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Nuevo Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Nuevo Tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Modificar Cuenta
        </Button>
      </form>
    </Container>
  );
};

export default ModificarCuenta;
