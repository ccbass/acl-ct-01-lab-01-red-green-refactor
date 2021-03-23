const capAndFilter = (arr) => {
  return arr
    .filter(ele => !(ele.startsWith('F') || ele.startsWith('f')))
    .map(ele => {
      const [first, ...rest] = ele;
      return `${first.toUpperCase()}${rest.join('')}`;
    });
};

module.exports = capAndFilter;
