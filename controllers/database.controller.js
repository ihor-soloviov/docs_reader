const db = require("../db/db");

class DatabaseController {
  async getCalculatorModules(req, res) {
    try {
      console.log("getCalculatorModules");

      const { table_name, producer } = req.query;

      if (!producer) {
        const angebotInfo = await db.query(`SELECT * FROM ${table_name}`);
        res.send(angebotInfo.rows);
      } else {
        const allData = await db.query(
          `SELECT * FROM ${table_name} WHERE producer = $1`,
          [producer]
        );
        res.send(allData.rows);
      }
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  }

  async getAllModules(req, res) {
    try {
      const tables = [
        'alpha_platte',
        'batteries',
        'gateway',
        'inverters',
        'optimizers',
        'other',
        'relay',
        'smartmeters',
        'wallbox',
      ];

      const allResults = [];

      for (const table of tables) {
        const queryResult = await db.query(`SELECT *, '${table}' AS table_name FROM ${table}`);
        allResults.push(...queryResult.rows);
      }
      res.send(allResults)
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  }

  async addRow(req, res) {
    console.log("add row");
    try {
      const {
        producer,
        model,
        power,
        mpp,
        max_efficiency,
        guarantee,
        header,
        price,
        image,
        storage,
        material,
        dimensions,
        weight,
        usage,
      } = req.body;

      const { table_name } = req.query;
      let query;

      switch (table_name) {
        case "inverters":
          query = {
            text: `insert into inverters (producer, model, power, mpp, max_efficiency, guarantee, header, price, image) values ( $1, $2, $3, $4, $5, $6, $7, $8, $9 ) returning *`,
            values: [
              producer,
              model,
              power,
              mpp,
              max_efficiency,
              guarantee,
              header,
              price,
              image,
            ],
          };
          break;

        case "batteries":
          query = {
            text: `insert into batteries (producer, model, storage, guarantee, header, price, image) values ( $1, $2, $3, $4, $5, $6, $7) returning *`,
            values: [
              producer,
              model,
              storage,
              guarantee,
              header,
              price,
              image,
            ],
          };
          break;

        case "alpha_platte":
          query = {
            text: `insert into alpha_platte (producer, model, material, dimensions, weight, header, price, image) values ( $1, $2, $3, $4, $5, $6, $7, $8) returning *`,
            values: [
              producer,
              model,
              material,
              dimensions,
              weight,
              header,
              price,
              image,
            ],
          };
          break;

        case "smartmeters":
          query = {
            text: `insert into smartmeters (producer, model, usage, header, price, image) values ( $1, $2, $3, $4, $5, $6) returning *`,
            values: [
              producer,
              model,
              usage,
              header,
              price,
              image,
            ],
          };
          break;

        default:
          query = {
            text: `insert into ${table_name} (producer, model, guarantee, header, price, image) values ( $1, $2, $3, $4, $5, $6) returning *`,
            values: [producer, model, guarantee, header, price, image],
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
      const { model, column, value } = req.body;
      const { table_name } = req.query;

      if (!model || !column || !value) {
        return res
          .status(400)
          .json({ error: "Не всі обов`язкові дані надані." });
      }

      const query = {
        text: `UPDATE ${table_name} SET ${column} = $1 WHERE model = $2`,
        values: [value, model],
      };

      const result = await db.query(query);

      if (result.rowCount === 0) {
        return res
          .status(404)
          .json({ error: "Рядок з вказаним model не знайдено." });
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
      const { model } = req.body;
      const { table_name } = req.query;

      if (!model) {
        return res.status(400).json({ error: "model не надана." });
      }

      const query = {
        text: `DELETE FROM ${table_name} WHERE model = $1`,
        values: [model],
      };

      const result = await db.query(query);

      if (result.rowCount === 0) {
        return res
          .status(404)
          .json({ error: "Рядок з вказаним model не знайдено." });
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
        pvsolFile = null,
        invertor = null,
        battery = null,
        wallbox = null,
        taubenschutz = null,
        zusatzarbeiten = null,
      } = combinedObject;

      const result = await db.query(
        "INSERT INTO angebot_info (angebotId, angebotType, montage, underConstructions, pvModule, pvsolFile, invertor, battery, wallbox, taubenschutz,  zusatzarbeiten) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)",
        [
          angebotId,
          angebotType,
          montage,
          underConstructions,
          pvModule,
          pvsolFile,
          invertor,
          battery,
          wallbox,
          taubenschutz,
          zusatzarbeiten,
        ]
      );

      res.send({ message: "Дані успішно збережено в таблицю." });
    } catch (error) {
      console.error("Помилка при збереженні даних:", error);
      res.status(500).json({ error: "Помилка сервера" });
    }
  }
}

module.exports = new DatabaseController();
