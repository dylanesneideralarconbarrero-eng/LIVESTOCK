const express = require("express");


const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API levistock",
            version: "1.0.0",
            description: "Documentacion de la API",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ]
    },
    apis: [path.join(__dirname, "routes/*.js")],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

const userRoutes = require('./routes/userRoute');
const feedingRouter = require('./routes/feedingRouter');
const healthRouter = require('./routes/healthRouter');
 const authRoutes = require('./routes/authRoute');

const db = require("./config/conectionDB");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.use(
    "/api/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);
//app.user("/api/swagger",);
app.use("/api/auth", authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/feeding', feedingRouter);
app.use('/api/health', healthRouter);


app.get("/", (req, res) => {
    res.send("Servidor funcionando");
});

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Ruta no encontrada",
        route: req.originalUrl,
        method: req.method
    });
});

const init = async () => {
    try {
        await db.authenticate();
        console.log("Conexion a DB exitosa");

        app.listen(PORT, () => {
            console.log("App corriendo en el puerto " + PORT);
            console.log("Swagger en http://localhost:" + PORT + "/api/docs");
        });

    } catch (error) {
        console.error(error);
    }
};

init();

// require('dotenv').config();
// const express = require('express');
// const swaggerJsdoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');
// const helmet = require('helmet');
// const morgan = require('morgan');
// const cors = require('cors');
// const db = require('./config/conectionDB');





// //importamos las rutas
// const userRoutes = require('./routes/userRoute');
// const feedingRouter = require('./routes/feedingRouter');
// const healthRouter = require('./routes/healthRouter');
// const authRoutes = require('./routes/authRoute');

// //importamos el manejador de errores
// const errorHandler = require('./middlewares/errorHandler');

// //importamos la documentacion de swagger
// const swaggerSpec = require('./docs/swagger');
// const app = express();
// const PORT = process.env.PORT || 3000;


// app.use(express.json());
// app.use(helmet());
// app.use(morgan("dev"));

// app.use(
//     "/api/docs",
//     swaggerUi.serve,
//     swaggerUi.setup(swaggerSpec)
// );


// app.use("/api/auth", authRoutes);
// app.use('/api/user', userRoutes);
// app.use('/api/feeding', feedingRouter);
// app.use('/api/health', healthRouter);

// app.get('/', (req, res) => {
//     res.send('servidor funcionando');
// });


// app.use((req, res) => {
//     res.status(404).json({ 
//         success: false,
//         message: 'ruta no encontrado' });
//         route: req.originalUrl
//         method: req.method
// });

// //usamos el manejador de errores después de las rutas
// //app.use(errorHandler);



// const init = async () => {
//     try {
//         await db.authenticate();
//         console.log('Conexion a la DB exitosa');
//         app.listen(PORT, () => {
//            console.log(App corriendo en el puerto ${PORT});
//         console.log(Documentacion disponible en http://localhost:${PORT}/api/docs);
//         });
//     } catch (error) {
//       console.error('Error al conectar a la DB:', error);
//     }   

 

// };
 // init();