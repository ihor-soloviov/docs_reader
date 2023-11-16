const docxProcessor = require("../utils/fileReader");

class FilesController {
  async getDataFromDocx(req, res) {
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
}

module.exports = new FilesController();
