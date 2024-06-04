const db = require("../db/db");
const Angebot = require("../models/angebots");
const axios = require('axios')
class AdminController {
  addService = async (req, res) => {
    try {
      const { title, description, price, specific, angebot_section } = req.body;
      const query = {
        text: `INSERT INTO usual_services (title, description, price, specific, angebot_section) VALUES ($1, $2, $3, $4, $5)`,
        values: [title, description, price, specific, angebot_section]
      }
      const services = await db.query(query);

      if (services?.rows?.length) {
        res.status(201).json(services.rows[0]);
      } else {
        res.status(500).json({ error: 'Failed to add service' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  changePrice = async (req, res) => {
    try {
      const { id, newPrice, table_name } = req.body;

      if (!id || !newPrice) {
        return res.status(404).send({ message: 'Missed required field' });
      }

      let query = {
        text: `UPDATE usual_services SET price = $1 WHERE id = $2`,
        values: [newPrice, id]
      };

      if (table_name) {
        query.text = `UPDATE ${table_name} SET price = $1 WHERE id = $2`;
      }

      const result = await db.query(query);

      if (result.rowCount === 0) {
        return res.status(404).send({ message: 'Service not found' });
      }

      return res.status(200).send({ message: 'Service updated successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: 'Internal Server Error' });
    }
  };

  getNextAngebotVersion = async (req, res) => {
    const { angebotId } = req.query;

    if (!angebotId) {
      return res.status(400).send("angebotId is required");
    }

    try {
      const regex = new RegExp(`^${angebotId}(\\.\\d+)?$`);
      const items = await Angebot.find({ angebotId: regex });

      if (items.length === 0) {
        return res.send(angebotId);
      }

      let maxVersion = 0;
      items.forEach(item => {
        const versionMatch = item.angebotId.match(/^(\d+)(\.\d+)?$/);
        if (versionMatch) {
          const version = parseFloat(versionMatch[2] || 0);
          if (version > maxVersion) {
            maxVersion = version;
          }
        }
      });

      const nextVersion = `${angebotId}.${(maxVersion + 0.1).toFixed(1)}`;
      res.send(nextVersion);
    } catch (error) {
      console.error(error);
      res.status(500).send("Помилка обробки запиту");
    }
  }

  saveAngebotData = async (req, res) => {
    try {
      const angebotData = req.body;

      const newAngebot = new Angebot(angebotData);
      await newAngebot.save();

      res.status(201).json({ message: 'Angebot successfully created', data: newAngebot });
    } catch (error) {
      console.log(error)
    }
  }

  getAngebotData = async (req, res) => {
    try {
      const { angebotId } = req.query;

      if (!angebotId) {
        return res.status(400).json({ message: 'Bad Request' })
      }

      const angebot = await Angebot.findOne({ angebotId })

      if (!angebot) {
        return res.status(404).json({ message: 'Angebot not found' });
      }

      const dealData = await axios.get(`https://mailer.work-set.eu/pdApi/deals/${angebotId}`);

      if (!dealData) {
        return res.status(404).json({ message: 'Deal not found' });
      }

      res.status(200).json({ angebot, dealData: dealData.data });
    } catch (error) {
      console.log(error)
    }
  }

  getFullDataOfAngebot = async (req, res) => {
    try {

    } catch (error) {
      console.log(error)
    }
  }

}

module.exports = new AdminController()