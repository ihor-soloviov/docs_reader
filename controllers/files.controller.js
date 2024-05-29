const docxProcessor = require("../utils/fileReader");
const generatePDF = require("../utils/puppeteer");

class FilesController {
  async pvSolFileParser(req, res) {
    try {
      if (!req.file) {
        return res.status(400).send("Не було отримано файл");
      }
      const result = await docxProcessor.searchKeywordsInDocx(
        `../docs_reader/uploadsDocx/${req.file.filename}`
      );

      res.send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send("Помилка обробки файлу");
    }
  }
  async fileSaver(_req, res) {
    res.send(res.send("Файл успішно завантажено"))
  }
  async generateAngebot(_req, res) {
    try {
      await generatePDF("123");

      res.send("done");
    } catch (error) {
      console.log(error);
      return res.status(500).send({ message: 'Internal Server Error' });
    }
  }
}

module.exports = new FilesController();
