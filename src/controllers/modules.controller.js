const { Service } = require("../models/services");
const serviceSplitter = require("../utils/serviceSplitter");

const componentSections = [
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

class ModulesController {
  async getComponentsBySection(req, res) {
    try {
      const { section, producer } = req.query;

      if (!section) {
        return res.status(400).send("Parameter 'section' is required");
      }

      let query = {
        section
      };

      if (producer) {
        query.producer = producer;
      }

      const result = await Service.find(query);

      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }

  async getComponents(_req, res) {
    try {
      const allResults = [];

      for (const section of componentSections) {
        const queryResult = await Service.find({ section: section });
        allResults.push(...queryResult);
      }

      res.send(allResults);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  }

  async getServices(_req, res) {
    try {
      const services = await Service.find({ section: { $nin: componentSections } });

      res.send(services);
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

      const services = await Service.find({ section: section })
      const result = serviceSplitter(services);
      return res.send(result);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: 'Server error' });
    }
  }

  async addComponent(req, res) {
    try {
      const component = req.body;

      const newComponent = new Service(component);
      await newComponent.save();

      res.send(newComponent);
    } catch (error) {
      console.log(error);
      res.status(404).send("Помилка при додаванні рядку");
    }
  }

  async addServices(req, res) {
    try {
      const services = req.body;

      await Service.insertMany(services);
      res.status(200).json({ message: 'Services uploaded successfully' });
    } catch (error) {
      console.error(error);
      res.status(404).send("Помилка при додаванні даних");
    }
  }

}

module.exports = new ModulesController();
