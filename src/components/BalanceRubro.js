// src/components/BalanceRubro.js
import React, { useState, useEffect } from 'react';
import { getBalance } from '../services/apiService';

const BalanceRubro = () => {
  const [balance, setBalance] = useState([]);

  useEffect(() => {
    getBalance()
      .then((response) => setBalance(response.data))
      .catch((error) => console.error('Error fetching balance:', error));
  }, []);

  return (
    <div>
      <h2>Balance por Rubro</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Nombre</th>
            <th>Saldo</th>
          </tr>
        </thead>
        <tbody>
          {balance.map((cuenta) => (
            <tr key={cuenta.Nombre}>
              <td>{cuenta.Tipo}</td>
              <td>{cuenta.Nombre}</td>
              <td>{cuenta.Saldo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BalanceRubro;
