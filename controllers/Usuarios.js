import Usuarios from "../models/Usuarios.js";

const httpUsuarios = {
    getUsuarios: async (req, res) => {
        try {
            const usuarios = await Usuarios.find();
            res.json({ usuarios });
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    getUsuariosId: async (req, res) => {
        const { id } = req.params;
        try {
            const usuarios = await Usuarios.findById(id);
            res.json({ usuarios });
        } catch (error) {
            res.status(400).json({ error });
        }
    },

    postUsuarios: async (req, res) => {
        try {
            const { Nombre, Identificacion, Telefono, Correo, Contraseña, Rol } = req.body;
            const usuarios = new Usuarios({ Nombre, Identificacion, Telefono, Correo, Contraseña, Rol });
            usuarios.save();
            res.json({ usuarios });
        } catch (error) {
            res.status(400).json({ error });
        }

    },

    putUsuarios: async (req, res) => {
        try {
            const { id } = req.params;
            const { Nombre, Identificacion, Telefono, Correo, Contraseña, Rol } = req.body;
            const usuarios = await Usuarios.findByIdAndUpdate(id, { Nombre, Identificacion, Telefono, Correo, Contraseña, Rol }, { new: true });
            res.json({ usuarios });
        } catch (error) {
            res.status(400).json({ error: "Error en el servidor" });
        }
    },


    putUsuariosInactivar: async (req, res) => {
        try {
            const { id } = req.params;
            const usuarios = await Usuarios.findByIdAndUpdate(id, { estado: 0 }, { new: true });
            res.json({ usuarios });
        } catch (error) {
            res.status(400).json({ error });
        }
    },


    putUsuariosActivar: async (req, res) => {
        try {
            const { id } = req.params;
            const usuarios = await Usuarios.findByIdAndUpdate(id, { estado: 1 }, { new: true });
            res.json({ usuarios });
        } catch (error) {
            res.status(400).json({ error });
        }
    }

};

export default httpUsuarios;
