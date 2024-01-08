const db = require("../db/db");

class DatabaseController {
  async getDataFromTable(req, res) {
    try {
      console.log("getData");

      const { table_name, hersteller } = req.query;
      if (!hersteller) {
        const angebotInfo = await db.query(`select * from ${table_name}`);

        res.send(angebotInfo);
      }
      const allData = await db.query(
        `select * from ${table_name} where hersteller = $1`,
        [hersteller]
      );

      res.send(allData.rows);
    } catch (error) {
      res.send(error);
    }
  }

  async addRow(req, res) {
    console.log("add row");
    try {
      const {
        hersteller,
        modell,
        leistung,
        mpp,
        max_wirkungsgrad,
        garantie,
        header,
        preis,
        image,
        speicher,
        material,
        abmessungen,
        gewicht,
        energieverbrauch,
      } = req.body;

      const { table_name } = req.query;
      let query;

      switch (table_name) {
        case "inverters":
          query = {
            text: `insert into inverters (hersteller, modell, leistung, mpp, max_wirkungsgrad, garantie, header, preis, image) values ( $1, $2, $3, $4, $5, $6, $7, $8, $9 ) returning *`,
            values: [
              hersteller,
              modell,
              leistung,
              mpp,
              max_wirkungsgrad,
              garantie,
              header,
              preis,
              image,
            ],
          };
          break;

        case "batteries":
          query = {
            text: `insert into batteries (hersteller, modell, speicher, garantie, header, preis, image) values ( $1, $2, $3, $4, $5, $6, $7) returning *`,
            values: [
              hersteller,
              modell,
              speicher,
              garantie,
              header,
              preis,
              image,
            ],
          };
          break;

        case "alpha_platte":
          query = {
            text: `insert into alpha_platte (hersteller, modell, material, abmessungen, gewicht, header, preis, image) values ( $1, $2, $3, $4, $5, $6, $7, $8) returning *`,
            values: [
              hersteller,
              modell,
              material,
              abmessungen,
              gewicht,
              header,
              preis,
              image,
            ],
          };
          break;

        case "smartmeters":
          query = {
            text: `insert into smartmeters (hersteller, modell, energieverbrauch, header, preis, image) values ( $1, $2, $3, $4, $5, $6) returning *`,
            values: [
              hersteller,
              modell,
              energieverbrauch,
              header,
              preis,
              image,
            ],
          };
          break;

        default:
          query = {
            text: `insert into ${table_name} (hersteller, modell, garantie, header, preis, image) values ( $1, $2, $3, $4, $5, $6) returning *`,
            values: [hersteller, modell, garantie, header, preis, image],
          };
          break;
      }

      const result = await db.query(query);

      res.send(result.rows);
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

  async deleteRow(req, res) {
    console.log("delete row ");
    try {
      const { modell } = req.body;
      const { table_name } = req.query;

      if (!modell) {
        return res.status(400).json({ error: "modell не надана." });
      }

      const query = {
        text: `DELETE FROM ${table_name} WHERE modell = $1`,
        values: [modell],
      };

      const result = await db.query(query);

      if (result.rowCount === 0) {
        return res
          .status(404)
          .json({ error: "Рядок з вказаним modell не знайдено." });
      }

      res.status(200).json({ message: "Дані успішно видалено з таблиці." });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }

  async saveAngebotInfo(req, res) {
    console.log("asaa");
    try {
      const combinedObject = req.body;
      console.log(combinedObject);

      const {
        angebotId = null,
        angebotType = null,
        montage = null,
        underConstructions = null,
        pvModule = null,
        invertor = null,
        battery = null,
        wallbox = null,
        taubenschutz = null,
        zusatzarbeiten = null,
      } = combinedObject;

      const result = await db.query(
        "INSERT INTO angebot_info (angebotId, angebotType, montage, underConstructions, pvModule, invertor, battery, wallbox, taubenschutz,  zusatzarbeiten) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
        [
          angebotId,
          angebotType,
          montage,
          underConstructions,
          pvModule,
          invertor,
          battery,
          wallbox,
          taubenschutz,
          zusatzarbeiten,
        ]
      );

      res.status(201).json({ message: "Дані успішно збережено в таблицю." });
    } catch (error) {
      console.error("Помилка при збереженні даних:", error);
      res.status(500).json({ error: "Помилка сервера" });
    }
  }
}

module.exports = new DatabaseController();
