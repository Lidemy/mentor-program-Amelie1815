export const isPrime = (n) => {
  Math.round(n);
  if (n === 1) {
      return false;
  } 
  else if (n === 2) {
      return true;
  } 
  else { for (var i = 2; i < n <= 100000; i++) {
      if (n % i === 0) {
          return false;
      } 
      else {
          return true;
      } 
      }
  }
  }
  
