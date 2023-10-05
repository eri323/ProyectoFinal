import Pedidos from "../models/Pedido.js";

const httpPedidos = {
    getPedidos: async (req, res) => {
        try {
            const pedidos = await Pedidos.find();
            res.json({ pedidos });
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    getPedidosId: async (req, res) => {
        const { id } = req.params;
        try {
            const pedidos = await Pedidos.findById(id);
            res.json({ pedidos });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    postPedidos: async (req, res) => {
        try {
            const { FechaCreacion, FechaEntrega, DistribucionLoteFicha_id, Subtotal, Total} = req.body;
            const pedidos = new Pedidos({ FechaCreacion, FechaEntrega, DistribucionLoteFicha_id, Subtotal, Total});
            pedidos.save();
            res.json({ pedidos });
        } catch (error) {
            res.status(400).json({ error });
        }

    },

    putPedidos: async (req, res) => {
        try {
            const { id } = req.params;
            const { FechaCreacion, FechaEntrega, DistribucionLoteFicha_id, Subtotal, Total} = req.body;
            const pedidos = await Pedidos.findByIdAndUpdate(id, { FechaCreacion, FechaEntrega, DistribucionLoteFicha_id, Subtotal, Total}, { new: true });
            res.json({ pedidos });
        } catch (error) {
            res.status(400).json({ error: "Error en el servidor" });
        }
    },


    putPedidosInactivar: async (req, res) => {
        try {
            const { id } = req.params;
            const pedidos = await Pedidos.findByIdAndUpdate(id, { estado: 0 }, { new: true });
            res.json({ pedidos });
        } catch (error) {
            res.status(400).json({ error });
        }
    },


    putPedidosActivar: async (req, res) => {
        try {
            const { id } = req.params;
            const pedidos = await Pedidos.findByIdAndUpdate(id, { estado: 1 }, { new: true });
            res.json({ pedidos });
        } catch (error) {
            res.status(400).json({ error });
        }
    }

};

export default httpPedidos;
