const copyAndPush = (arr, n) => {
  const shallowCopy = [...arr];
  shallowCopy.push(n);
  return shallowCopy;
};

module.exports = copyAndPush;
