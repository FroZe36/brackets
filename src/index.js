module.exports = function check(str, bracketsConfig) {
  if (str.length % 2) return false;
  const result = [];
  str.split('').forEach(el => {
    bracketsConfig.forEach(arr => {
      const lastIndex = result.length - 1;
      const [firstEl, secondEl] = arr;
      if (firstEl === result[lastIndex] && secondEl === el) {
        result.pop();
      } else if (firstEl == el) {
        result.push(el);
      }
    });
  });
  return !result.length;
};