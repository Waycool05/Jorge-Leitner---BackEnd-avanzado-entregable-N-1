const express = require("express");
const router = express.Router();
const path = require("path");
const CartManager = require("../CartManager");

const cartManager = new CartManager(path.join(__dirname, "..", "carts.json"));

router.get("/", (req, res) => {
  res.json(cartManager.carts);
});

router.post("/", (req, res) => {
  const newCart = cartManager.createCart();
  res.status(201).json(newCart);
});

router.get("/:cid", (req, res) => {
  const cid = req.params.cid;
  const cart = cartManager.getCartById(cid);
  if (cart) {
    res.json(cart);
  } else {
    res.status(404).send("Carrito no encontrado");
  }
});

router.post("/:cid/product/:pid", (req, res) => {
  const cid = req.params.cid;
  const pid = req.params.pid;
  const quantity = req.body.quantity || 1;

  const cart = cartManager.addProductToCart(cid, pid, quantity);
  if (cart) {
    res.json(cart);
  } else {
    res.status(404).send("Carrito o Producto no encontrado");
  }
});

module.exports = router;
