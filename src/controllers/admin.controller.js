const axios = require('axios')
const Angebot = require("../models/angebots");
const incrementLastDigit = require("../utils/getNextVersion")
const getPricesTable = require('../utils/getPricesTable')
const { Service } = require("../models/services")

class AdminController {
  addService = async (req, res) => {
    try {
      const service = req.body;

      const newService = new Service(service);
      await newService.save();

      res.status(201).json({ message: 'Service successfully added', data: newService });
    } catch (error) {
      console.log(error)
    }
  }

  addServices = async (req, res) => {
    try {
      const services = req.body;

      await Service.insertMany(services);
      res.status(200).json({ message: 'Services uploaded successfully' });
    } catch (error) {
      console.error(error);
      res.status(404).send("Помилка при додаванні даних");
    }
  }

  changePrice = async (req, res) => {
    try {
      const { id, newPrice } = req.body;

      if (!id || !newPrice) {
        return res.status(404).send({ message: 'Missed required field' });
      }

      const updatedService = await Service.findByIdAndUpdate(
        id,
        { newPrice },
        { new: true }
      );

      if (!updatedService) {
        return res.status(404).send("Service not found");
      }

      res.send(updatedService);
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
      const items = await Angebot.find({
        "$expr": {
          "$regexMatch": {
            input: "$angebotId",
            regex: regex
          }
        }
      });

      if (items.length === 0) {
        return res.send(angebotId);
      }

      const maxAngebotId = items.reduce((max, obj) => {
        const angebotId = parseFloat(obj.angebotId);
        return angebotId > max ? angebotId : max;
      }, -Infinity);

      const nextVersion = maxAngebotId > parseFloat(angebotId) ? incrementLastDigit(maxAngebotId.toString()) : incrementLastDigit(angebotId);
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

      const pricesTable = getPricesTable(angebot)

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