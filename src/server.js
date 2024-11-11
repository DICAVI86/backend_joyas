const express = require('express');
const app = express();
const joyasRoutes = require('./routes/joyas');  // Asegúrate de tener las rutas bien configuradas

app.use(express.json());
app.use(joyasRoutes);  // Usamos las rutas para joyas

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
