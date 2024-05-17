const db = require("../db/db");

class AdminController {
  getUsualServices = async (req, res) => {
    try {
      const services = await db.query('SELECT * FROM usual_services');

      if (services?.rows) {
        res.send(table.rows)
      }
    } catch (error) {
      console.error(error)
    }
  }

  getUsualServiceBySection = async () => {
    try {
      const { angebot_section } = req.query
      const query = {
        text: `SELECT * FROM usual_services WHERE angebot_section = $1`,
        value: [angebot_section]
      }
      const services = await db.query(query);

      if (services?.rows) {
        res.send(table.rows)
      }
    } catch (error) {
      console.error(error)
    }
  }

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