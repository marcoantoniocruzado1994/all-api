const express = require("express");
const morgan = require("morgan");
const pool = require("./database");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//ruta inicial
app.get("/", async (req, res) => {
  const { rows } = await pool.query("select * from lista_productos");

  res.json(rows);
});

//ruta post añadir producto
app.post("/", async (req, res) => {
  const { nombre_producto } = req.body;
  const newProduct = await pool.query(
    "insert into lista_productos (nombre_producto) values ($1) RETURNING*",
    [nombre_producto]
  );

  res.status(200).json({
    message: "producto agregado",
    newProduct,
  });
});

app.listen(3000, () => {
  console.log("la base de datos esta en el puerto : 3000");
});
