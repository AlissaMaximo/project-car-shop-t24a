import express from 'express';
import AutomobileRouter from './Routes/AutomobileRouter';

const app = express();

app.use(express.json());
app.use(AutomobileRouter);

export default app;
