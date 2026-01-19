const express = require("express");
const router = express.Router();
const path = require("path");
const ProductManager = require("../ProductManager");
const productManager = new ProductManager(path.join(__dirname, "..", "products.json"));

router.get("/", (req, res) => {
  res.json(productManager.products);
});
router.get("/:pid", (req, res) => {
  const pid = req.params.pid;
  const product = productManager.getProductById(pid);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Producto no encontrado");
  }
});

router.post("/", (req, res) => {
  try {
    const newProduct = req.body;
    
    if (!newProduct || Object.keys(newProduct).length === 0) {
      return res.status(400).json({ 
        error: "El cuerpo de la petición está vacío o no es válido" 
      });
    }
    
    const product = productManager.addProduct(newProduct);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.put("/:pid", (req, res) => {
  const pid = req.params.pid;
  const updateFields = req.body;
  const product = productManager.updateProduct(pid, updateFields);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Producto no encontrado");
  }
});
router.delete("/:pid", (req, res) => {
  const pid = req.params.pid;
  productManager.deleteProduct(pid);
  res.status(204).send();
});

module.exports = router;
