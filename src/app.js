import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import limiter from "./config/rate-limit-config.js";

import ProductRoutes from "./app/routes/product-routes.js";
import CategoryRoutes from "./app/routes/category-routes.js";

const app = express();

app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/product", ProductRoutes);
app.use("/category", CategoryRoutes);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

export default app;
