// Code for the main application
const express = require("express");
const swaggerUi = require("swagger-ui-express");

const swaggerSpec = require("./config/swagger");
const sequelize = require("./config/database"); // Import koneksi Sequelize

const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware untuk parsing JSON
app.use(express.json());

// Swagger UI route
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// **Cek koneksi database sebelum menjalankan server**
sequelize
  .authenticate()
  .then(() => console.log("✅ Database connected!"))
  .catch((err) => console.error("❌ Database connection error:", err));

app.use("/users", userRoutes);

app.listen(process.env.DB_PORT, () => {
  console.log(`🚀 App listening at https://we-seq-api.azurewebsites.net/`);
});
