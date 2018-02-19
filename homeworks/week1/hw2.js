export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);      // 取出第一個字母轉成大寫 + 去掉第一個字母的原字串
};


/* 

另一解

const capitalize = (str) => {
  return str.replace(str[0], str[0].toUpperCase());
};

  */