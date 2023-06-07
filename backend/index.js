import express from "express";
import pg from "pg";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = new pg.Pool({
  host: "localhost",
  port: 3360,
  user: "postgres",
  password: "123456",
  database: "test",
});

app.get("/api/select/:unvan/:tablo", (req, res) => {
  const unvan = req.params.unvan;
  const tablo = req.params.tablo;
  const sqlselect = `SELECT * FROM ${unvan}.${tablo}`;
  db.query(sqlselect, (err, data) => {
    res.json(data.rows);
  });
});

app.get("/api/select/:unvan/:tablo/:id", (req, res) => {
  const unvan = req.params.unvan;
  const tablo = req.params.tablo;
  const id = req.params.id;
  const sqlselectid = `SELECT * FROM ${unvan}.${tablo} WHERE id=${id}`;
  db.query(sqlselectid, (err, data) => {
    res.json(data.rows);
  });
});

app.post("/api/insert/:unvan/:tablo", (req, res) => {
  const unvan = req.params.unvan;
  const tablo = req.params.tablo;
  const ad = req.body.ad;
  const soyad = req.body.soyad;
  const sqlinsert = `INSERT INTO ${unvan}.${tablo} (ad,soyad) VALUES ($1,$2)`;
  db.query(sqlinsert, [ad, soyad], (err, data) => {});
});

app.delete("/api/delete/:unvan/:tablo/:id", (req, res) => {
  const unvan = req.params.unvan;
  const tablo = req.params.tablo;
  const id = req.params.id;
  const sqldelete = `DELETE FROM ${unvan}.${tablo} WHERE id=${id}`;
  db.query(sqldelete, (err, data) => {});
});

app.put("/api/update/:unvan/:tablo/:id", (req, res) => {
  const unvan = req.params.unvan;
  const tablo = req.params.tablo;
  const id = req.params.id;
  const yeniad = req.body.ad;
  const yenisoyad = req.body.soyad;
  const sqlupdate = `UPDATE ${unvan}.${tablo} SET ad = $1, soyad = $2 WHERE id = ${id}`;
  db.query(sqlupdate, [yeniad, yenisoyad], (err, data) => {});
});

app.listen(8800, () => {
  console.log("Connected");
});
