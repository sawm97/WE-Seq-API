const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/config/swagger');

const app = express();
const port = 8080;

// Swagger UI route
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(port, () => {
    console.log(`App listening at https://we-seq-api.azurewebsites.net/`);
});