import mongoose from "mongoose";

const ProductoSchema = new mongoose.Schema({
    Codigo: { type: Number, required: true },
    Nombre: { type: String, required: true },
    Descripcion: { type: String, required: true },
    UnidadMedida: { type: String, required: true},
    PrecioUnitario: { type: Number, required: true},
    Iva: {type: Number, required: true},
    Consumible: { type: Boolean, required: true},
    createAT: { type: Date, default: Date.now },
    Estado: { type: Number, default: 1 },
})

export default mongoose.model("Producto", ProductoSchema)