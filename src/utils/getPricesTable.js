const table = [
  {
    id: 1,
    step: {
      title: "Projektierung",
      "text": "Planung, Dimensionierung, Wirtschaftsanalyse und Optimierung der PV-Anlage im Simulationsprogramm. \\n Korrespondenz mit dem zuständigen Netzbetreiber. Das beinhaltet die Voranmeldung, den Schriftverkehr, das Erstellen eines Prüfprotokolls und der Fertigmeldung beim Netzbetreiber. \\n Erstellen Ihres Abschlussprotokolls, indem Sie alle Daten zu Ihrer \\n PV-Anlage finde, wie String- und Schaltplan, Seriennummern aller PV-Komponenten, eine Fotodokumentation aller Installationsschritte u.v.m..\\n Account mit Zugangsdaten für den Online-Zugang Ihrer PV-Anlage erstellen.\\n Überwachung Ihrer Anlage im Online-Portal"
    },
    count: 1,
    price: 500
  },
  {
    id: 2,
    step: {
      title: "Installation + Lieferung",
      text: "Lieferung der PV-Komponenten.\\n An- und Abbau von Absturzsicherungen.\\n DC-Montage: Fachgerechte Montage der Unterkonstruktion. Montage und Verkabelung der PV- Module bis zum Wechselrichter. Setzen eines Kabelschachts und Erstellen eines fachgerechten Hausdurchbruchs.\\n AC-Montage: Fachgerechte Montage des Wechselrichters und evtl. des Speichers, der Wallbox. Kommunikationsverkabelung zwischen den einzelnen PV-Komponenten. Anschluss an das Internet und das Herunterladen des aktuellsten Updates. Herstellung des Potentialausgleichs.\\n Inkl. Kabelschacht"
    },
    count: 1,
    price: 0
  },
  {
    id: 3,
    step: {
      title: "Inbetriebnahme",
      text: "Anschluss der PV-Anlage an die vorhandene Hausverteilung von einem Elektrofachbetrieb.\\n Inkl. AC-Kabel"
    },
    count: 1,
    price: 0
  },
  {
    id: 4,
    step: {
      title: "Unterkonstruktion",
      text: "Eine Aluminium-Stahl-Konstruktion von SL Rack, inkl. aller Kleinteile, die zur langlebigen Montage notwendig sind.\\n Befestigung durch SL Rack Alpha-Platten"
    },
    count: 0,
    price: 0
  },
  {
    id: 5,
    step: {
      title: "PV-Module",
      text: "Bezeichnung: siehe unten\\n Inkl. UV-beständiges DC-Kabel"
    },
    count: 0,
    price: 0
  },
  {
    id: 6,
    step: {
      title: "Optimierer",
      text: "Bezeichnung: siehe unten"
    },
    count: 0,
    price: 0
  },
  {
    id: 7,
    step: {
      title: "Wechselrichter + Smart Dongle + Smartmeter",
      text: "Bezeichnung: siehe unten"
    },
    count: 0,
    price: 0
  },
  {
    id: 8,
    step: {
      title: "PV-Speicher",
      text: "Bezeichnung: siehe unten"
    },
    count: 0,
    price: 0
  },
  {
    id: 9,
    step: {
      title: "Zusatzarbeiten",
      text: "Wechsel des Zählerkastens nach VDE-Norm.\\n Erstellen einer individuellen Kaskadenschaltung.\\n Versetzen einer SAT-Schüssel.\\n Weitere Zusatzarbeiten werden mit einem Stundensatz von 55,00\\n EUR Netto je Stunde und Mitarbeiter in Rechnung gestellt."
    },
    count: 0,
    price: 0
  }
];

const aggregateData = (items) => {
  return items.reduce((acc, item) => {
    acc.count += item.count;
    acc.price += item.price * item.count;
    return acc;
  }, { price: 0, count: 0 });
}

const getPricesTable = (stepsData) => {
  const installation = aggregateData(stepsData.montage);
  // const inbetriebnahme = aggregateData(stepData.)
}

function calculateTotalPrices2(data) {
  // Об'єкт для зберігання загальних цін за appSection
  const totalPrices = {};

  // Функція для обробки масиву об'єктів
  function processArray(array) {
    array.forEach(item => {
      const { angebotSection, price, count } = item;
      const totalPrice = price * count;

      if (!totalPrices[angebotSection]) {
        totalPrices[angebotSection] = 0;
      }

      totalPrices[angebotSection] += totalPrice;
    });
  }

  // Проходження по всім ключам об'єкта data
  for (const key in data) {
    if (Array.isArray(data[key])) {
      processArray(data[key]);
    }
  }

  // Формування масиву з результатами
  const result = Object.keys(totalPrices).map(section => ({
    angebotSection: section,
    totalPrice: totalPrices[section]
  }));

  return result;
}