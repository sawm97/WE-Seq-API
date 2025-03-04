// const express = require('express');
// const swaggerUi = require('swagger-ui-express');
// const swaggerSpec = require('./src/config/swagger');

// const app = express();
// const port = 8080;

// // Swagger UI route
// app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// app.listen(port, () => {
//     console.log(`App listening at https://we-seq-api.azurewebsites.net/`);
// });

const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const sequelize = require("./config/database"); // Import koneksi Sequelize
const User = require("./models/userModel"); // Import Model User

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

// **Tes route untuk ambil semua user**
app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    console.log(users);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});

// **Tes route untuk tambah user baru**
app.post("/users", async (req, res) => {
  try {
    const { username, email, password_hash, role } = req.body;
    const newUser = await User.create({ username, email, password_hash, role });
    console.log(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
});

app.listen(process.env.DB_PORT, () => {
  console.log(`🚀 App listening at https://we-seq-api.azurewebsites.net/`);
});
