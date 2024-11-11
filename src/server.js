const express = require('express');
const app = express();
const joyasRoutes = require('./routes/joyas'); 

app.use(express.json());
app.use(joyasRoutes);  

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
