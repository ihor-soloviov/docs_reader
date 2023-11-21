const db = require("../db/db");

class DatabaseController {
  async addRow(req, res) {
    console.log("add row");
    try {
      const {
        table_name,
        hersteller,
        modell,
        leistung,
        mpp,
        max_wirkungsgrad,
        garantie,
        header,
        preis,
      } = req.body;

      const newRow = await db.query(
        `insert into ${table_name} (hersteller, modell, leistung, mpp, max_wirkungsgrad, garantie, header, preis) values ( $1, $2, $3, $4, $5, $6, $7,$8 ) returning *`,
        [hersteller, modell, leistung, mpp, max_wirkungsgrad, garantie, header, preis]
      );

      res.send(newRow);
    } catch (error) {
      console.log(error);
      res.status(404).send("Помилка при додаванні рядку");
    }
  }
}

module.exports = new DatabaseController();
