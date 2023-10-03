import Area from "../models/Area.js";

const httpArea = {
    getArea: async (req, res) => {
        try {
            const areaList = await Area.find();
            res.json({ areas: areaList });

        } catch (error) {
            res.status(400).json({ error });
        }

    },
    getAreaId: async (req, res) => {
        const { id } = req.params;
        try {
            const area = await Area.findById(id);
            res.json({ area });

        } catch (error) {
            res.status(400).json({ error });
        }
    },

    postArea: async (req, res) => {
        try {
            const { nombre } = req.body;
            const area = new Area({ nombre });
            await area.save();

            res.json({ area });
        } catch (error) {
            res.status(400).json({ error });
        }

    },

    putEditarArea: async (req, res) => {
        try {
            const { id } = req.params;
            const { ubicacion, capacidad } = req.body;
            const area = await Area.findByIdAndUpdate(id, { ubicacion, capacidad }, { new: true });
            res.json({ area });
        } catch (error) {
            res.status(400).json({ error: "Error en el servidor" });
        }
    },


    putAreaInactivar: async (req, res) => {
        try {
            const { id } = req.params;
            const area = await Area.findByIdAndUpdate(id, { estado: 0 }, { new: true });
            res.json({ area });
        } catch (error) {
            res.status(400).json({ error });
        }
    },


    putAreaActivar: async (req, res) => {
        try {
            const { id } = req.params;
            const area = await Area.findByIdAndUpdate(id, { estado: 1 }, { new: true });
            res.json({ area });
        } catch (error) {
            res.status(400).json({ error });
        }
    }

};

export default httpArea;
