export const isPalindromes = (str) => {
  if (str === str.split('').reverse().join('')) {     // 倒轉字串參考 MDN 網站
      return true;
  }
  return false;
};