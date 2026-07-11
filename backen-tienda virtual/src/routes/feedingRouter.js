const express = require('express');
const router = express.Router();


//Consultar todos
/**
 * @swagger
 * /api/feeding/alimentacionAll:
 *   get:
 *     summary: Obtener toda la alimentación
 *     description: Lista de todos los registros de alimentación
 *     responses:
 *       200:
 *         description: Lista de alimentación obtenida exitosamente
 */
router.get('/alimentacionAll', (req, res) => {
    res.json({message: "consultando alimentacion"});
})


//consulta individual
/**
 * @swagger
 * /api/feeding/alimentacion/{id}:
 *   get:
 *     summary: Obtener alimentación por ID
 *     description: Obtiene un registro de alimentación específico
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del registro de alimentación
 *     responses:
 *       200:
 *         description: Registro encontrado
 */
router.get('/alimentacion/:id', (req, res) => {
    const { id } = req.params;
    res.json({message: `no encontrado : ${id}`});
});


//Crear
/**
 * @swagger
 * /api/feeding/alimentacion:
 *   post:
 *     summary: Crear registro de alimentación
 *     description: Crea un nuevo registro de alimentación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *               cantidad:
 *                 type: number
 *     responses:
 *       201:
 *         description: Registro creado exitosamente
 */
router.post('/alimentacion', (req, res) => {
    const { id } = req.params;
    res.json({message: `creando alimentacion : ${id}`});
});



//Actualizar
/**
 * @swagger
 * /api/feeding/alimentacion/{id}:
 *   put:
 *     summary: Actualizar registro de alimentación
 *     description: Actualiza un registro de alimentación existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del registro de alimentación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tipo:
 *                 type: string
 *               cantidad:
 *                 type: number
 *     responses:
 *       200:
 *         description: Registro actualizado exitosamente
 */
router.put('/alimentacion/:id', (req, res) => {
    const { id } = req.params;
    res.json({message: `actualizando alimentacion : ${id}`});
});


// Eliminar
/**
 * @swagger
 * /api/feeding/alimentacion/{id}:
 *   delete:
 *     summary: Eliminar registro de alimentación
 *     description: Elimina un registro de alimentación del sistema
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del registro de alimentación
 *     responses:
 *       200:
 *         description: Registro eliminado exitosamente
 */
router.delete('/alimentacion/:id', (req, res) => {
    const { id } = req.params;
    res.json({message: `eliminando alimentacion : ${id}`});
});


module.exports = router;