CREATE TABLE inverters (
  id SERIAL PRIMARY KEY NOT NULL,
  hersteller VARCHAR(50),
  modell VARCHAR(50),
  leistung VARCHAR(50),
  MPP numeric,
  max_Wirkungsgrad VARCHAR(50),
  garantie VARCHAR(50)
);

CREATE TABLE batteries (
  id SERIAL PRIMARY KEY NOT NULL,
  producer VARCHAR(50),
  model VARCHAR(50),
  storage VARCHAR(50),
  guarantee VARCHAR(50),
  header VARCHAR(50),
  image VARCHAR(100)
  -- price 
);

CREATE TABLE optimizers (
  id SERIAL PRIMARY KEY NOT NULL,
  hersteller VARCHAR(50),
  modell VARCHAR(50),
  garantie VARCHAR(50),
  header VARCHAR(50),
  image VARCHAR(100)
);

CREATE TABLE smartmeters (
  id SERIAL PRIMARY KEY NOT NULL,
  hersteller VARCHAR(50),
  modell VARCHAR(50),
  energieverbrauch VARCHAR(50),
  header VARCHAR(50),
  image VARCHAR(100)
);

CREATE TABLE alpha_platte (
  id SERIAL PRIMARY KEY NOT NULL,
  hersteller VARCHAR(50),
  modell VARCHAR(50),
  material VARCHAR(100),
  abmessungen VARCHAR(100),
  gewicht VARCHAR(50),
  header VARCHAR(50),
  image VARCHAR(100)
);

CREATE TABLE other (
  id SERIAL PRIMARY KEY NOT NULL,
  hersteller VARCHAR(50),
  modell VARCHAR(50),
  garantie VARCHAR(50),
  header VARCHAR(50),
  image VARCHAR(100)
)

CREATE TABLE usual_services (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(100),
  description VARCHAR(150),
  price numeric,
  specific VARCHAR(25) NOT NULL,
  angebot_section VARCHAR(50)
);


insert into inverters values ('Huawei', 'SUN2000-3KTL-M1', '3.300VA', 2, '98.2%', '10 Jahre*')




ALTER TABLE optimizers
RENAME COLUMN preis TO price;

energieverbrauch => usage

preis => price

gewicht => weight

hersteller => producer

modell => model

garantie => guarantee

max_wirkungsgrad => max_efficiency

leistung => power