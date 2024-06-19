function serviceSplitter(services) {
  const sortedServices = sortObjectsByPrice(services);
  return sortedServices.reduce((acc, service) => {
    if (service.specific === 'single') {
      acc.single.push(service);
    } else if (service.specific === 'select') {
      acc.select.push(service);
    }
    return acc;
  }, { single: [], select: [] });
}

function sortObjectsByPrice(objects) {
  return objects.sort((a, b) => {
    return a.price - b.price;
  });
}

module.exports = serviceSplitter