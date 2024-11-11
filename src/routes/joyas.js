const express = require('express');
const pool = require('../models/database');
const router = express.Router();

// Ruta GET para obtener el inventario
router.get('/joyas', async (req, res) => {
  const { limits = 10, page = 1, order_by = 'id_ASC' } = req.query;

  const orderMap = {
    'id_ASC': 'id ASC',
    'id_DESC': 'id DESC',
    'precio_ASC': 'precio ASC',
    'precio_DESC': 'precio DESC',
  };

  const order = orderMap[order_by] || 'id_ASC';
  const offset = (page - 1) * limits;

  try {
    const result = await pool.query(
      `SELECT * FROM inventario ORDER BY ${order} LIMIT $1 OFFSET $2`,
      [limits, offset]
    );

    const links = {
      self: `/joyas?page=${page}&limits=${limits}&order_by=${order_by}`,
      next: `/joyas?page=${parseInt(page) + 1}&limits=${limits}&order_by=${order_by}`,
    };

    res.status(200).json({
      data: result.rows,
      links,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en la consulta');
  }
});

// Ruta GET para obtener el inventario con filtros
router.get('/joyas/filtros', async (req, res) => {
    const { precio_min, precio_max, categoria, metal } = req.query;
  
    let query = 'SELECT * FROM inventario WHERE 1=1'; 
    const queryParams = [];
    
    if (precio_min) {
      query += ' AND precio >= $' + (queryParams.length + 1);
      queryParams.push(precio_min);
    }
    if (precio_max) {
      query += ' AND precio <= $' + (queryParams.length + 1);
      queryParams.push(precio_max);
    }
    if (categoria) {
      query += ' AND categoria = $' + (queryParams.length + 1);
      queryParams.push(categoria);
    }
    if (metal) {
      query += ' AND metal = $' + (queryParams.length + 1);
      queryParams.push(metal);
    }
  
    try {
      const result = await pool.query(query, queryParams);
  
      res.status(200).json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Error al obtener los productos filtrados');
    }
  });

module.exports = router;
