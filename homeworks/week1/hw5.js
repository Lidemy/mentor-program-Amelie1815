export const add = (a, b) => {
  let A = a.toString().split('').reverse();       // 變成倒轉的陣列，方便從個位數相加。
  let B = b.toString().split('').reverse();
  if (A.length > B.length){
      const bLength = B.length;
      B.length = A.length;
      B.fill(0, bLength, A.length);       // 把 a b 變成同位數。
  }
  else if (A.length < B.length) {
      const aLength = A.length;
      A.length = B.length;
      A.fill(0, aLength, B.length);
  }
  else {};        // 不知最終的 else 若不需動作可否省略？（在此似乎是可以）
  let sum = [];
  let carry = 0;      // 進位。
  for (let i = 0; i < Math.max(A.length, B.length); i++) {
      if (Number(A[i]) + Number(B[i]) + carry >= 10) {        // 曾忘記加 carry 出錯。
          sum.push(Number(A[i]) + Number(B[i]) - 10 + carry);     // 曾讓位數不同者出現 NaN，在位數不足處補 0 解決。
          carry = 1;
      }
      else if (Number(A[i]) + Number(B[i]) + carry < 10) {
          sum.push(Number(A[i]) + Number(B[i]) + carry);
          carry = 0;
      }
  };
  if (carry === 1) {    // 最後一個進位。
      sum.push(1);
  }
  return sum.reverse().join('');
};

/*

做這作業一開始碰到一些型態轉換上的錯誤（'1' + '2' 會變成 ‘12' 不是我要的），用 Number() 解決了。
後來發現兩個位數不同時，較低的位數會變成 NaN，結果只會出現位數相同的相加。
把不同位數的部分獨立出來，另設立 if/else 條件，結果還是只能算到位數一樣的部分。
最後換個方式，在迴圈前就補零，也就是上面的版本。
想請老師幫我看看我一開始的寫法有什麼觀念上的問題。
程式碼如下：

const add = (a, b) => {
    let A = a.toString().split('').reverse();
    let B = b.toString().split('').reverse();
    let sum = [];
    let carry = 0;
    for (let i = 0; i < Math.max(A.length, B.length); i++) {
        if (Number(A[i]) + Number(B[i]) + carry >= 10) {
            sum.push(Number(A[i]) + Number(B[i]) - 10 + carry);
            carry = 1;
        }
        else if (Number(A[i]) + Number(B[i]) + carry < 10) {
            sum.push(Number(A[i]) + Number(B[i]) + carry);
            carry = 0;
        }
        else if (Number(A[i]) === NaN) {    // 不同位數的地方。
            if (Number(B[i]) + carry >= 10) {
                sum.push(Number(B[i]) + carry - 10);
                carry = 1;
            }
            else {
                sum.push(Number(B[i]) + carry);
                carry = 0;
            }
        }
        else if (Number(B[i]) === NaN) {    // 不同位數的地方。
            if (Number(A[i]) + carry >= 10) {
                sum.push(Number(A[i]) + carry - 10);
                carry = 1;
            }
            else {
                sum.push(Number(A[i]) + carry);
                carry = 0;
            }
        }
    };
    if (carry === 1) {
        sum.push(1);
    }
    return sum.reverse().join('');
};

*/