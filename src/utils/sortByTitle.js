const sortByTitle = (arr) => {
  return arr.sort((a, b) => {
    const titleA = a.title.toUpperCase(); // ігноруємо регістр
    const titleB = b.title.toUpperCase(); // ігноруємо регістр

    if (titleA < titleB) {
      return -1; // titleA має бути перед titleB
    }
    if (titleA > titleB) {
      return 1; // titleA має бути після titleB
    }

    return 0; // titleA дорівнює titleB
  });
};

module.exports = sortByTitle