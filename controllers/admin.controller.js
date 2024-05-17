const db = require("../db/db");

class AdminController {
  getUsualServices = async (_req, res) => {
    try {
      const services = await db.query('SELECT * FROM usual_services');

      if (services?.rows) {
        res.send(table.rows)
      }
    } catch (error) {
      console.error(error)
    }
  }

  getUsualServiceBySection = async (req, res) => {
    try {
      const { angebot_section } = req.query;
      if (!angebot_section) {
        return res.status(400).send({ message: 'angebot_section is required' });
      }

      console.log("Received angebot_section:", angebot_section); 

      const query = {
        text: `SELECT * FROM usual_services WHERE angebot_section = $1`,
        values: [angebot_section]
      };

      const services = await db.query(query);

      if (services?.rows.length > 0) {
        res.send(services.rows);
      } else {
        res.status(404).send({ message: 'No services found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Server error' });
    }
  };

  addUsualService = async (req, res) => {
    try {
      const { title, description, price, angebot_section } = req.body;
      const query = {
        text: `INSERT INTO usual_services (title, description, price, angebot_section) VALUES ($1, $2, $3, $4)`,
        values: [title, description, price, angebot_section]
      }
      const services = await db.query(query);

      if (services?.rows) {
        res.send(table.rows)
      }
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = new AdminController()