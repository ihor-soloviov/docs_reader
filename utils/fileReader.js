const mammoth = require("mammoth");

const keys = [
  "PV-Generatorleistung",
  "PV-Generatorenergie (AC-Netz)",
  "Autarkiegrad",
  "Gesamtverbrauch",
  "Spezifische Einspeisevergütung",
  "Amortisationsdauer",
  "Kumulierter Cashflow",
  "Arbeitspreis",
];

class DocxProcessor {
  constructor(keys) {
    this.keys = keys;
    this.data = [];
  }

  async searchKeywordsInDocx(docxFilePath) {
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

          case "Gesamtverbrauch":
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

          default:
            dataTitle = "Autarkiegrad";
            break;
        }

        this.data.push({
          title: dataTitle,
          number: array[index + 1],
          measurement: array[index + 2],
        });
      }
    });

    return this.data;
  }
}

module.exports = new DocxProcessor(keys);
