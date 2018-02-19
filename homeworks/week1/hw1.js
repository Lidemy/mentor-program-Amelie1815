export const stars = (n) => {
  let arr = [];
  for (i = 1; i <= n; i++) {
      arr.push('*'.repeat(i));    // 一開始用 '*' * i 失敗，因為 '*' 不是數字無法使用乘法
  }
  return arr;
};
