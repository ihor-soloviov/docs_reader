const db = require("../db/db");

class AdminController {
  getUsualServices = async (req, res) => {
    try {
      const table = await db.query('SELECT * FROM ususal_services');

      if (table?.rows) {
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
      const table = await db.query(query);

      if (table?.rows) {
        res.send(table.rows)
      }
    } catch (error) {
      console.error(error)
    }
  }
}

module.exports = new AdminController()