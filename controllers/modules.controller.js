const db = require("../db/db");
const serviceSplitter = require("../utils/serviceSplitter");

class ModulesController {
  async getModulesByTable(req, res) {
    try {
      const { table_name, producer } = req.query;

      if (!table_name) {
        return res.status(400).send("Parameter 'table_name' is required");
      }

      const queryText = producer
        ? `SELECT * FROM ${table_name} WHERE producer = $1`
        : `SELECT * FROM ${table_name}`;

      const queryParams = producer ? [producer] : [];

      const result = await db.query(queryText, queryParams);

      res.send(result.rows);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getModules(req, res) {
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
        'iq_combiner',
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

  async getServices(_req, res) {
    try {
      const services = await db.query('SELECT * FROM usual_services');

      if (services?.rows) {
        res.send(services.rows)
      }
    } catch (error) {
      console.error(error)
      res.status(500).send(error.message);
    }
  }

  async getServicesBySection(req, res) {
    try {
      const { section } = req.params;

      if (!section) {
        return res.status(400).send({ message: 'angebot_section is required' });
      }

      const query = {
        text: `SELECT * FROM usual_services WHERE angebot_section = $1`,
        values: [section]
      };

      const services = await db.query(query);

      if (services.rows.length === 0) {
        return res.status(404).send({ message: 'No services found' });
      }

      const result = serviceSplitter(services.rows);
      return res.send(result);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: 'Server error' });
    }
  }

  async addModule(req, res) {
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
        description
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

        case "iq_combiner":
          query = {
            text: `insert into iq_combiner (producer, model, description, price) values ( $1, $2, $3, $4) returning *`,
            values: [producer, model, description, price],

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
    try {
      const combinedObject = req.body;
      console.log(combinedObject);

      const {
        angebotId = null,
        angebotType = null,
        montage = null,
        // underConstructions = null,
        // pvModule = null,
        // pvsolFile = null,
        // invertor = null,
        // iqCombiner = null,
        // optimizer = null,
        // battery = null,
        // wallbox = null,
        // backupBox = null,
        // taubenschutz = null,
        // zusatzarbeiten = null,
      } = combinedObject;

      await db.query(
        `
        INSERT INTO angebot_info (
          angebot_id, 
          angebot_type, 
          montage, 
          
        ) VALUES (
          $1, $2, $3
        )
      `,
        [
          angebotId,
          angebotType,
          montage,
        ]
      );

      res.send({ message: "Дані успішно збережено в таблицю." });
    } catch (error) {
      console.error("Помилка при збереженні даних:", error);
      res.status(500).json({ error: "Помилка сервера" });
    }
  }
}

module.exports = new ModulesController();
