module.exports.absolute = (num) => {
  if (num > 0) return num;
  if (num < 0) return -num;
  return 0;
};
