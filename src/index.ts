import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./routes/user.routes";
import productRoutes from "./routes/product.routes";
import { createConnection } from "typeorm";

const app = express();
export const connectionDbOne = createConnection("first-connection");
export const connectionDbTWo = createConnection("second-connection");


// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use(userRoutes);
app.use(productRoutes);

app.listen(3000);
console.log('Server on port: ', 3000);
