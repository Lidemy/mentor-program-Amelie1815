export const isPrime = (n) => {
  // Math.round(n);     這行是多餘的
  if (n === 1) {
      return false;
  } 
  else if (n === 2) {
      return true;
  } 
  else { for (var i = 2; i < n; i++) {     // n <= 100000 放在一起會出錯（讓 i = n 也會跑入迴圈）
      if (n % i === 0) {
          return false;
      } 
      }
      return true   // 這行不能放在 for 迴圈裡
  }
  }
  
