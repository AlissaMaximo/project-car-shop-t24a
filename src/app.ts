import express from 'express';
import AutomobileRouter from './Routes/AutomobileRoutes';

const app = express();
app.use(AutomobileRouter);

export default app;
