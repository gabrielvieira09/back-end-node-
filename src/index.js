import express from "express";
import productsRoutes from "./routes/productRoutes.js"

const app = express();
app.use(express.json());

app.use(productsRoutes);

app.listen(3000, () => {
  console.log(`Servidor rodando na porta 3000`);
});
