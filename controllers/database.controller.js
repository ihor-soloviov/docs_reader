const db = require("../db/db");

class DatabaseController {
  async getDataFromTable(req, res) {
    try {
      console.log("getData");

      const { table_name } = req.query;
      const allData = await db.query(`select * from ${table_name}`);

      res.send(allData.rows);
    } catch (error) {
      res.send(error);
    }
  }

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
        [
          hersteller,
          modell,
          leistung,
          mpp,
          max_wirkungsgrad,
          garantie,
          header,
          preis,
        ]
      );

      res.send(newRow);
    } catch (error) {
      console.log(error);
      res.status(404).send("Помилка при додаванні рядку");
    }
  }

  async addDataToColumn(req, res) {
    console.log("add data to column");

    try {
      const { modell, column, value } = req.body;
      const { table_name } = req.query;

      if (!modell || !column || !value) {
        return res
          .status(400)
          .json({ error: "Не всі обов`язкові дані надані." });
      }

      const query = {
        text: `UPDATE ${table_name} SET ${column} = $1 WHERE modell = $2`,
        values: [value, modell],
      };

      const result = await db.query(query);

      if (result.rowCount === 0) {
        return res
          .status(404)
          .json({ error: "Рядок з вказаним modell не знайдено." });
      }

      res.status(200).json({ message: "Дані успішно оновлено в таблиці." });
    } catch (error) {
      console.log(error);
      res.status(404).send("Помилка при додаванні значення в колонку");
    }
  }
}

module.exports = new DatabaseController();
