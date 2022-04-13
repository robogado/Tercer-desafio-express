//Metodo fs 
const fs = require("fs")

//Express
const express = require("express")

//Creamos la aplicacion
const app = express()

//Array de productos
let arr = [
  {
    producto: "Placa de video",
    precio: 500.000,
    industria: "China",
    id: "1"
  },

  {
    producto: "Notebook",
    precio: 250.000,
    id: 2,
    industria: "Alemana",
    id: "2"
  },

  {
    producto: "iPhone",
    precio: 150.000,
    industria: "Estadounidense",
    id: "3"
  }
]

//En localhost:8080/productos van a aparecer todos los productos
app.get("/productos", (req, res) => {
  fs.readFile("./text.txt", "utf-8", (err, arr) => {
    if (err) {
      res.send({ message: "Error al traer datos" })
    } else {
      res.send(arr);
    }
  });
});


//Creo el txt y el servidor
/* fs.writeFile("./text.txt", JSON.stringify(arr), "utf-8", (err) => {
  if (err) {
    console.log("Error al crear");
    return;
  }
  console.log("Se creo correctamente el archivo");
}); */

app.listen(8080, () => {
  console.log("Servidor funcionando")
});

// Ruta que devuelve un producto elegido al azar 
app.get("/random", (req, res) => {
  fs.readFile("./text.txt", "utf-8", (err, arr) => {
    if (err) {
      res.send({ message: "Error al traer datos" })
    } else {
      console.log(typeof arr)
      let arrayNuevo = JSON.parse(arr)
      let elementoRandom = arrayNuevo[Math.floor(Math.random() * arrayNuevo.lenght)];
      console.log ((Math.floor(Math.random() * arr.length)))
      res.send(elementoRandom);
    }
  });
});





