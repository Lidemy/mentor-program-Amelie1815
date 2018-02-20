export const stars = (n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {    // 本來 i 忘記宣告，已訂正
      arr.push('*'.repeat(i));    // 一開始用 '*' * i 失敗，因為 '*' 不是數字無法使用乘法
  }
  return arr;
};
