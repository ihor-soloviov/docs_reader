export const serviceSplitter = (services) => services.reduce((acc, service) => {
  if (service.specific === 'single') {
    acc.single.push(service);
  } else if (service.specific === 'select') {
    acc.select.push(service);
  }
  return acc;
}, { single: [], select: [] });
