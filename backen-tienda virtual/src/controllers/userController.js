const { getUserById, userCreate, UserUpdate, userDelete } = require("../services/userService");
const Response = require("../functions/response");

// Obtener todos los usuarios
const getAllUsers = (req, res) => {
    const body = req.body;
    console.log("Body recibido:", body);

    res.status(200);
    res.json({
        message: "Obteniendo todos los usuarios"
    });
};

// Obtener un usuario por ID
const getUserByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        let errors = [];

        if (!id) {
            errors.push("El ID del usuario es obligatorio");
        }

        if (errors.length > 0) {
            const response = new Response(false, "Error al obtener el usuario", errors);
            return res.status(400).json(response.json);
        }

        const data = { id };
        const user = await getUserById(data);

        const response = new Response(true, "Usuario obtenido exitosamente", user);
        return res.status(200).json(response.json);

    } catch (error) {
        console.error("Error en getUserById:", error);

        const response = new Response(false, "Error interno del servidor", [
            error.message
        ]);

        return res.status(500).json(response.json);
    }
};

// Crear usuario
const createUser = async (req, res) => {
    try {

        const { name, email, password, documentId, postJob } = req.body;

        let errors = [];

        if (!name || name.trim() === "") {
            errors.push("El nombre del usuario es obligatorio");
        }

        if (!email || email.trim() === "") {
            errors.push("El correo del usuario es obligatorio");
        }

        if (!password || password.trim() === "") {
            errors.push("La contraseña es obligatoria");
        }

        if (!documentId || documentId.trim() === "") {
            errors.push("El documento de identidad es obligatorio");
        }

        if (!postJob || postJob.trim() === "") {
            errors.push("El cargo del usuario es obligatorio");
        }

        if (errors.length > 0) {
            const response = new Response(false, "Error al crear el usuario", errors);
            return res.status(400).json(response.json);
        }

        const data = {
            name,
            email,
            password,
            documentId,
            postJob
        };

        const user = await userCreate(data);

        const response = new Response(true, "Usuario creado exitosamente", user);

        return res.status(201).json(response.json);

    } catch (error) {

        console.error("Error en createUser:", error);

        const response = new Response(false, "Error interno del servidor", [
            error.message
        ]);

        return res.status(500).json(response.json);
    }
};

// Actualizar usuario
const updateUser = async (req, res) => {

    try {

        const { id } = req.params;
        const { name, email, password, documentId, postJob } = req.body;

        let errors = [];

        if (!id) {
            errors.push("El ID del usuario es obligatorio");
        }

        if (!name || name.trim() === "") {
            errors.push("El nombre del usuario es obligatorio");
        }

        if (!email || email.trim() === "") {
            errors.push("El correo del usuario es obligatorio");
        }

        if (!password || password.trim() === "") {
            errors.push("La contraseña es obligatoria");
        }

        if (!documentId || documentId.trim() === "") {
            errors.push("El documento de identidad es obligatorio");
        }

        if (!postJob || postJob.trim() === "") {
            errors.push("El cargo del usuario es obligatorio");
        }

        if (errors.length > 0) {
            const response = new Response(false, "Error al actualizar el usuario", errors);
            return res.status(400).json(response.json);
        }

        const data = {
            id,
            name,
            email,
            password,
            documentId,
            postJob
        };

        const user = await UserUpdate(data);

        const response = new Response(true, "Usuario actualizado exitosamente", user);

        return res.status(200).json(response.json);

    } catch (error) {

        console.error("Error en updateUser:", error);

        const response = new Response(false, "Error interno del servidor", [
            error.message
        ]);

        return res.status(500).json(response.json);
    }
};

// Eliminar usuario
const deleteUser = async (req, res) => {

    try {

        const { id } = req.params;

        let errors = [];

        if (!id) {
            errors.push("El ID del usuario es obligatorio");
        }

        if (errors.length > 0) {
            const response = new Response(false, "Error al eliminar el usuario", errors);
            return res.status(400).json(response.json);
        }

        const data = { id };

        const user = await userDelete(data);

        const response = new Response(true, "Usuario inactivado exitosamente", user);

        return res.status(200).json(response.json);

    } catch (error) {

        console.error("Error en deleteUser:", error);

        const response = new Response(false, "Error interno del servidor", [
            error.message
        ]);

        return res.status(500).json(response.json);
    }
};

module.exports = {
    getAllUsers,
    getUserById: 
    getUserByIdController,
    createUser,
    updateUser,
    deleteUser
};