const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get all contacts");
});

router.post("/", (req, res) => {
  res.send("add new contacts");
});

router.put("/:id", (req, res) => {
  res.send("update contacts");
});

router.delete("/:id", (req, res) => {
  res.send("delete contacts");
});

module.exports = router;
