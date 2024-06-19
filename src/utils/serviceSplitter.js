function serviceSplitter(services) {
  const sortedServices = sortObjectsByTitle(services);
  return sortedServices.reduce((acc, service) => {
    if (service.specific === 'single') {
      acc.single.push(service);
    } else if (service.specific === 'select') {
      acc.select.push(service);
    }
    return acc;
  }, { single: [], select: [] });
}

function sortObjectsByTitle(objects) {
  return objects.sort((a, b) => {
    return a.title.localeCompare(b.title, 'en', { numeric: true, sensitivity: 'base' });
  });
}

module.exports = serviceSplitter