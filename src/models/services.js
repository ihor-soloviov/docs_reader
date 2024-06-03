const { Schema, model } = require('mongoose');

const ServiceSchema = new Schema({
  producer: { type: String, unique: false, required: true },
  title: { type: String, unique: false, required: true },
  price: { type: Number, unique: false, required: true },
  section: { type: String, unique: false, required: true },
}, { strict: false });

const Service = model('Service', ServiceSchema);

module.exports = { Service, ServiceSchema };

[
  {
      "producer": "SL RACK",
      "title": "Anthrazit RAL 7016",
      "material": "gewalztes Aluminiumblech",
      "dimensions": "470 x 884 x 190 mm",
      "weight": "1.14 kg",
      "header": "Alpha-Platte",
      "image": "platte.png",
      "price": "100",
      "table_name": "alpha_platte"
  },
  {
      "producer": "Huawei",
      "title": "LUNA2000-5-S0",
      "storage": "5kWh",
      "guarantee": "10 Jahre*",
      "header": "Batteriesystem",
      "image": "huawei5-15.png",
      "price": "3300",
      "table_name": "batteries"
  },
  {
      "producer": "Huawei",
      "title": "LUNA2000-15-S0",
      "storage": "15kWh",
      "guarantee": "10 Jahre*",
      "header": "Batteriesystem",
      "image": "huawei5-15.png",
      "price": "7900",
      "table_name": "batteries"
  },
  {
      "producer": "Huawei",
      "title": "LUNA2000-10-S0",
      "storage": "10kWh",
      "guarantee": "10 Jahre*",
      "header": "Batteriesystem",
      "image": "huawei5-15.png",
      "price": "5900",
      "table_name": "batteries"
  },
  {
      "producer": "Enphase",
      "title": "ENCHARGE-3T-1P-INT",
      "storage": "3.5kWh",
      "guarantee": "15 Jahre*",
      "header": "Batteriesystem",
      "image": "enphase-battery.png",
      "price": "2750",
      "table_name": "batteries"
  },
  {
      "producer": "Enphase",
      "title": "ENCHARGE-10T-1P-INT",
      "storage": "10.5kWh",
      "guarantee": "15 Jahre*",
      "header": "Batteriesystem",
      "image": "enphase-battery.png",
      "price": "7500",
      "table_name": "batteries"
  },
  {
      "producer": "Tigo",
      "title": "TSB-6",
      "storage": "6.1kWh",
      "guarantee": "11 Jahre*",
      "header": "El Battery",
      "image": "TigoBattery.png",
      "price": "3400",
      "table_name": "batteries"
  },
  {
      "producer": "Tigo",
      "title": "TSB-9",
      "storage": "9.2kWh",
      "guarantee": "11 Jahre*",
      "header": "El Battery",
      "image": "TigoBattery.png",
      "price": "5600",
      "table_name": "batteries"
  },
  {
      "producer": "Sungrow",
      "title": "SBR096",
      "storage": "9.6kWh",
      "guarantee": "10 Jahre*",
      "header": "Stromspeicher",
      "image": "sungrow_batt.png",
      "price": "4900.00",
      "table_name": "batteries"
  },
  {
      "producer": "Sungrow",
      "title": "SBR128",
      "storage": "12.8kWh",
      "guarantee": "10 Jahre*",
      "header": "Stromspeicher",
      "image": "sungrow_batt.png",
      "price": "6400.00",
      "table_name": "batteries"
  },
  {
      "producer": "Sungrow",
      "title": "SBR160",
      "storage": "16kWh",
      "guarantee": "10 Jahre*",
      "header": "Stromspeicher",
      "image": "sungrow_batt.png",
      "price": "8000.00",
      "table_name": "batteries"
  },
  {
      "producer": "Sungrow",
      "title": "SBR192",
      "storage": "19.2kWh",
      "guarantee": "10 Jahre*",
      "header": "Stromspeicher",
      "image": "sungrow_batt.png",
      "price": "9550.00",
      "table_name": "batteries"
  },
  {
      "producer": "Sungrow",
      "title": "SBR224",
      "storage": "22.4kWh",
      "guarantee": "10 Jahre*",
      "header": "Stromspeicher",
      "image": "sungrow_batt.png",
      "price": "12650.00",
      "table_name": "batteries"
  },
  {
      "producer": "Sungrow",
      "title": "SBR256",
      "storage": "25.6kWh",
      "guarantee": "10 Jahre*",
      "header": "Stromspeicher",
      "image": "sungrow_batt.png",
      "price": "14200.00",
      "table_name": "batteries"
  },
  {
      "producer": "Solar Manager",
      "title": " SM-1118-01",
      "guarantee": "2 Jahre*",
      "header": "Gateway",
      "image": "solarManager.png",
      "price": "1050",
      "table_name": "gateway"
  },
  {
      "producer": "Tigo",
      "title": "CCA",
      "guarantee": "12.8 Jahre*",
      "header": "Tigo Cloud Connect Advanced (CCA)",
      "image": "CCA.png",
      "price": "240",
      "table_name": "gateway"
  },
  {
      "producer": "Enphase",
      "title": "HEMS-GW-01",
      "guarantee": "5 Jahre*",
      "header": "IQ Energy Router",
      "image": "iqRouter.png",
      "price": "480",
      "table_name": "gateway"
  },
  {
      "producer": "Enphase",
      "title": "ENV-IQ-AM3-3P",
      "guarantee": "5 Jahre*",
      "header": "IQ Gateway",
      "image": "iqGateway.png",
      "price": "430",
      "table_name": "gateway"
  },
  {
      "producer": "Huawei",
      "title": "SUN2000-3KTL-M1",
      "power": "3.300VA",
      "mpp": "2",
      "max_efficiency": "98.2%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": "huawei3-10.png",
      "price": "1100",
      "table_name": "inverters"
  },
  {
      "producer": "Huawei",
      "title": "SUN2000-4KTL-M1",
      "power": "4.400VA",
      "mpp": "2",
      "max_efficiency": "98.3%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": "huawei3-10.png",
      "price": "1200",
      "table_name": "inverters"
  },
  {
      "producer": "Huawei",
      "title": "SUN2000-5KTL-M1",
      "power": "5.500VA",
      "mpp": "2",
      "max_efficiency": "98.4%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": "huawei3-10.png",
      "price": "1280",
      "table_name": "inverters"
  },
  {
      "producer": "Huawei",
      "title": "SUN2000-6KTL-M1",
      "power": "6.600VA",
      "mpp": "2",
      "max_efficiency": "98.6%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": "huawei3-10.png",
      "price": "1500",
      "table_name": "inverters"
  },
  {
      "producer": "Huawei",
      "title": "SUN2000-8KTL-M1",
      "power": "8.800VA",
      "mpp": "2",
      "max_efficiency": "98.6%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": "huawei3-10.png",
      "price": "1750",
      "table_name": "inverters"
  },
  {
      "producer": "Huawei",
      "title": "SUN2000-20KTL-M2",
      "power": "22.000VA",
      "mpp": "2",
      "max_efficiency": "98.65%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": null,
      "price": "2250",
      "table_name": "inverters"
  },
  {
      "producer": "Huawei",
      "title": "SUN2000-17KTL-M2",
      "power": "18.700VA",
      "mpp": "2",
      "max_efficiency": "98.65%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": null,
      "price": "2120",
      "table_name": "inverters"
  },
  {
      "producer": "Huawei",
      "title": "SUN2000-10KTL-M1",
      "power": "11.000VA",
      "mpp": "2",
      "max_efficiency": "98.6%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": "huawei3-10.png",
      "price": "1850",
      "table_name": "inverters"
  },
  {
      "producer": "Huawei",
      "title": "SUN2000-15KTL-M2",
      "power": "16.500VA",
      "mpp": "2",
      "max_efficiency": "98.65%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": "huawei12-20.png",
      "price": "2100",
      "table_name": "inverters"
  },
  {
      "producer": "Huawei",
      "title": "SUN2000-12KTL-M2",
      "power": "13.200VA",
      "mpp": "2",
      "max_efficiency": "98.5%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": "huawei12-20.png",
      "price": "1940",
      "table_name": "inverters"
  },
  {
      "producer": "Huawei",
      "title": "SUN2000-30KTL-M3",
      "power": "33.000VA",
      "mpp": "4",
      "max_efficiency": "98.7%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": "huawei30-40.png",
      "price": "2650",
      "table_name": "inverters"
  },
  {
      "producer": "Huawei",
      "title": "SUN2000-36KTL-M3",
      "power": "40.000VA",
      "mpp": "4",
      "max_efficiency": "98.7%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": "huawei30-40.png",
      "price": "2800",
      "table_name": "inverters"
  },
  {
      "producer": "Huawei",
      "title": "SUN2000-40KTL-M3",
      "power": "44.000VA",
      "mpp": "4",
      "max_efficiency": "98.7%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": "huawei30-40.png",
      "price": "2900",
      "table_name": "inverters"
  },
  {
      "producer": "Tigo",
      "title": "TSI-6K3D",
      "power": "6.600VA",
      "mpp": "2",
      "max_efficiency": "98.2%",
      "guarantee": "12.8 Jahre*",
      "header": "Wechselrichter",
      "image": "tigo.png",
      "price": "2800",
      "table_name": "inverters"
  },
  {
      "producer": "Tigo",
      "title": "TSI-10K3D",
      "power": "11.000VA",
      "mpp": "2",
      "max_efficiency": "98.2%",
      "guarantee": "12.8 Jahre*",
      "header": "Wechselrichter",
      "image": "tigo.png",
      "price": "3500",
      "table_name": "inverters"
  },
  {
      "producer": "Tigo",
      "title": "TSI-15K3D",
      "power": "15.000VA",
      "mpp": "2",
      "max_efficiency": "98.2%",
      "guarantee": "12.8 Jahre*",
      "header": "Wechselrichter",
      "image": "tigo.png",
      "price": "4100",
      "table_name": "inverters"
  },
  {
      "producer": "Huawei",
      "title": "SUN2000-60KTL-M3",
      "power": "66.000VA",
      "mpp": "6",
      "max_efficiency": "98.9%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": "huawei50.png",
      "price": "3500",
      "table_name": "inverters"
  },
  {
      "producer": "Huawei",
      "title": "SUN2000-50KTL-M3",
      "power": "55.000VA",
      "mpp": "6",
      "max_efficiency": "98.7%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": "huawei50.png",
      "price": "3100",
      "table_name": "inverters"
  },
  {
      "producer": "Enphase",
      "title": "IQ8HC-72-M-INT",
      "power": "384VA",
      "mpp": "1",
      "max_efficiency": "97.4%",
      "guarantee": "25 Jahre*",
      "header": "Wechselrichter",
      "image": "enphase-invent.png",
      "price": "180",
      "table_name": "inverters"
  },
  {
      "producer": "Enphase",
      "title": "IQ8AC-72-M-INT",
      "power": "366VA",
      "mpp": "1",
      "max_efficiency": "97.3%",
      "guarantee": "25 Jahre*",
      "header": "Wechselrichter",
      "image": "enphase-invent.png",
      "price": "175",
      "table_name": "inverters"
  },
  {
      "producer": "Sungrow",
      "title": "SH5.ORT",
      "power": "5000VA",
      "mpp": "2",
      "max_efficiency": "98.0%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": "sungrow_sh.png",
      "price": "1750.00",
      "table_name": "inverters"
  },
  {
      "producer": "Sungrow",
      "title": "SH6.ORT",
      "power": "6000VA",
      "mpp": "2",
      "max_efficiency": "98.2%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": "sungrow_sh.png",
      "price": "1880.00",
      "table_name": "inverters"
  },
  {
      "producer": "Sungrow",
      "title": "SH8.ORT",
      "power": "8000VA",
      "mpp": "2",
      "max_efficiency": "98.4%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": "sungrow_sh.png",
      "price": "1980.00",
      "table_name": "inverters"
  },
  {
      "producer": "Sungrow",
      "title": "SH12ORT",
      "power": "8000VA",
      "mpp": "2",
      "max_efficiency": "98.4%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": "sungrow_sh.png",
      "price": "2100.00",
      "table_name": "inverters"
  },
  {
      "producer": "Sungrow",
      "title": "SH15T",
      "power": "15000VA",
      "mpp": "3",
      "max_efficiency": "98.1%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": "sungrow_sh_t.png",
      "price": "3100.00",
      "table_name": "inverters"
  },
  {
      "producer": "Sungrow",
      "title": "SH20T",
      "power": "20000VA",
      "mpp": "3",
      "max_efficiency": "98.1%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": "sungrow_sh_t.png",
      "price": "3450.00",
      "table_name": "inverters"
  },
  {
      "producer": "Sungrow",
      "title": "SH25T",
      "power": "25000VA",
      "mpp": "3",
      "max_efficiency": "98.2%",
      "guarantee": "10 Jahre*",
      "header": "Wechselrichter",
      "image": "sungrow_sh_t.png",
      "price": "3700.00",
      "table_name": "inverters"
  },
  {
      "producer": "Tigo",
      "title": "TS4-A-O",
      "guarantee": "11 Jahre*",
      "header": "optimizers",
      "image": "TS4.png",
      "price": "75",
      "table_name": "optimizers"
  },
  {
      "producer": "Tigo",
      "title": "TAP",
      "guarantee": "11 Jahre*",
      "header": "Tigo Access Point (TAP)",
      "image": "TAP.png",
      "price": "60",
      "table_name": "optimizers"
  },
  {
      "producer": "Huawei",
      "title": "SUN2000-450w-P2",
      "guarantee": "25 Jahre*",
      "header": "Smart PV Optimizer",
      "image": "450w.png",
      "price": "70",
      "table_name": "optimizers"
  },
  {
      "producer": "Tigo",
      "title": "TSS-3PS",
      "guarantee": "11 Jahre*",
      "header": "El Link",
      "image": "el link.png",
      "price": "1600",
      "table_name": "other"
  },
  {
      "producer": "Huawei",
      "title": "Backup Box-B1 ",
      "guarantee": "10 Jahre*",
      "header": "Backup Box",
      "image": "backup.png",
      "price": "1500",
      "table_name": "other"
  },
  {
      "producer": "Enphase",
      "title": "COMMS-KIT-01",
      "guarantee": "5 Jahre*",
      "header": "Kommunikationskit",
      "image": "backup.png",
      "price": "0",
      "table_name": "other"
  },
  {
      "producer": "Huawei",
      "title": "Smart Power Sensor DTSU666-H 100A",
      "usage": "≤ 1 W",
      "header": "Smart Meter",
      "image": "smartMeter.png",
      "price": "300",
      "table_name": "smartmeters"
  },
  {
      "producer": "Huawei",
      "title": "Smart Power Sensor DTSU666-HFE",
      "usage": "≤ 1 W",
      "header": "Smart Meter",
      "image": "smartMeter.png",
      "price": "300",
      "table_name": "smartmeters"
  },
  {
      "producer": "Enphase",
      "title": "CELLMODEM-M1-06-AT-05",
      "description": "(Mobile Connect)",
      "price": "700",
      "table_name": "iq_combiner"
  },
  {
      "producer": "Enphase",
      "title": "X-IQ-EURO-230-3P-4-1",
      "description": "(Gateway, COMMS-KIT, RELAY-3P)",
      "price": "2200",
      "table_name": "iq_combiner"
  },
  {
      "producer": "Huawei",
      "title": "FusionCharge AC 22kW/32A",
      "guarantee": "10 Jahre*",
      "header": "Wallbox",
      "image": "huaweiWall.png",
      "price": "2000",
      "table_name": "wallbox"
  },
  {
      "producer": "Pulsar Plus",
      "title": "PLP1",
      "guarantee": "2 Jahre*",
      "header": "Wallbox",
      "image": "pulsar.png",
      "price": "1500",
      "table_name": "wallbox"
  },
  {
      "producer": "Sungrow",
      "title": "AC011E-01",
      "guarantee": "10 Jahre*",
      "header": "Wallbox",
      "image": "sungrow_wallbox.png",
      "price": "1130.00",
      "table_name": "wallbox"
  },
  {
      "producer": null,
      "title": null,
      "guarantee": null,
      "header": null,
      "image": null,
      "price": null,
      "table_name": "wallbox"
  }
]