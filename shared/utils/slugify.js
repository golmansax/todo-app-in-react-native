module.exports = (string) => {
  return string.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
};
