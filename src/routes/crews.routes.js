const { connection } = require("../db_connection");
const router = require("express").Router();

router.get("/", (req, res) => {
  const sql = "SELECT * FROM crews";
  connection.query(sql, (err, results) => {
    if (err) {
      res.status(500).send({ errorMessage: err.message });
    } else {
      res.status(200).json(results);
    }
  });
});

router.post("/", (req, res) => {
  const sql = "INSERT INTO crews SET ?";
  connection.query(sql, req.body, (err, results) => {
    if (err) {
      res.status(500).send({ errorMessage: err.message });
    } else {
      res.status(201).json({ id: results.insertId, ...req.body });
    }
  });
});

router.delete("/all", (req, res) => {
  const sql = "TRUNCATE TABLE crews";
  connection.query(sql, req.body, (err, results) => {
    if (err) {
      res.status(500).send({ errorMessage: err.message });
    } else {
      res.sendStatus(200);
    }
  });
});

router.delete("/:id", (req, res) => {
  const sql = "DELETE FROM crews WHERE id=?";
  connection.query(sql, req.params.id, (err) => {
    if (err) {
      res.status(500).send({ errorMessage: err.message });
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
