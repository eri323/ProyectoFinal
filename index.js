import express from "express";
import mongoose from "mongoose";
import "dotenv/config"
import Area from "./routes/Area.js"
import DetallePedido from "./models/DetallePedido.js";

const index = express()
index.use(express.json())

index.use("/api/area", Area)
index.use("/api/detallepedido",DetallePedido)


index.listen(process.env.PORT, () => {
    console.log(
        `Servidor escuchando en el puerto ${process.env.PORT}`
    );
    mongoose.connect(process.env.DB)
        .then(() => console.log(`Conexion Activa`));
})