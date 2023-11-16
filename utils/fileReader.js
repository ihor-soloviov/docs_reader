const mammoth = require("mammoth");

class DocxProcessor {
  constructor() {
    this.keys = [
      "PV-Generatorleistung",
      "PV-Generatorenergie (AC-Netz)",
      "Autarkiegrad",
      "Gesamtverbrauch",
      "Spezifische Einspeisevergütung",
      "Amortisationsdauer",
      "Kumulierter Cashflow",
      "Arbeitspreis",
    ];
  }

  async searchKeywordsInDocx(docxFilePath) {
    const data = [];
    const result = await mammoth.extractRawText({ path: docxFilePath });
    const tables = result.value.split("\n").filter((el) => el.trim() !== "");

    const foundKeywords = new Set();

    tables.forEach((el, index, array) => {
      const trimmedEl = el.trim();

      if (this.keys.includes(trimmedEl) && !foundKeywords.has(el)) {
        foundKeywords.add(el);

        let dataTitle;

        switch (trimmedEl) {
          case "PV-Generatorleistung":
            dataTitle = "Anlagengröße";
            break;

          case "PV-Generatorenergie (AC-Netz)":
            dataTitle = "Anlagenertrag p.a";
            break;

          case "Verbraucher":
            dataTitle = "Jahresverbrauch";
            break;

          case "Spezifische Einspeisevergütung":
            dataTitle = "Einspeisevergütung";
            break;

          case "Amortisationsdauer":
            dataTitle = "Amortisierung";
            break;

          case "Kumulierter Cashflow":
            dataTitle = "Gewinn nach 20 Jahren**";
            break;

          case "Arbeitspreis":
            dataTitle = "Arbeitspreis";
            break;

          default:
            dataTitle = "Autarkiegrad";
            break;
        }

        data.push({
          title: dataTitle,
          number: array[index + 1],
          measurement: array[index + 2],
        });
      }
    });

    return data;
  }
}

module.exports = new DocxProcessor();
