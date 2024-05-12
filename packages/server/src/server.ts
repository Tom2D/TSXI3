// import express from "express";
// import cors from 'cors';
// import routes from './routes';
//
// const app = express();
// const PORT = 5000;
//
// // Enable CORS and setup preflight options
// app.use(cors({
//     origin: 'http://localhost:5174',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization'],
// }));
//
// // Middleware to parse JSON bodies
// app.use(express.json());
//
// // Use the routes defined in routes.ts
// app.use('/', routes);
//
// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });