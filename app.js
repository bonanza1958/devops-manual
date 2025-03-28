import express from 'express';

const app = express();
const port = 3000;

// Definición de una ruta simple: GET /
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor solo si el archivo no se está importando en otro módulo (por ejemplo, en las pruebas)
if (import.meta.url === `file://${process.argv[1]}`) {
  app.listen(port, () => {
    console.log(`La aplicación se ejecuta en http://localhost:${port}`);
  });
}

// Exportar la app para que las pruebas puedan usarla
export default app;
