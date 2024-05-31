const db = require("../db/db");

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

}

module.exports = new AdminController()