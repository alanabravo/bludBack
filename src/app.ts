import { json } from 'express';
import express from 'express';

const app = express();

app.use(json());
// app.use('/v1/blud', mainRouter);

// Agregar manejo de errores

export default app;
