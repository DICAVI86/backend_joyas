const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'diegocastillovial',  // Cambia este valor por tu usuario de PostgreSQL
  password: '',              // Si tienes contraseña, colócala aquí
  database: 'tienda_de_joyas', // Nombre de la base de datos
  port: 5432,                // Puerto por defecto de PostgreSQL
});

module.exports = pool;
