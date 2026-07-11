const express = require("express");
const path = require("path");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const router = express.Router();

const PORT = process.env.PORT || 3000;

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Livestock",
            version: "1.0.0",
            description: "Documentación de la API",
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },

    apis: [
        path.join(__dirname, "../routes/*.js"),
    ],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

console.log("Swagger encontró estas rutas:");
console.log(swaggerSpec.paths);

router.use("/", swaggerUi.serve);
router.use("/", swaggerUi.setup(swaggerSpec));

module.exports = router;