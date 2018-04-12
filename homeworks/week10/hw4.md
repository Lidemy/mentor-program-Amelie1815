## gulp 跟 webpack 有什麼不一樣？我們可以不用它們嗎？

Gulp is a task runner being used to automate the time-consuming and repetitive tasks. 

Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser. It allows us to modular program like Node.js does and makes the structure of the code explicit. 

Both of them can be used to do the same things but not in the same way. 

There is a good way to use them collaboratively: define webpack as a task being run in gulp. 

They are not necessary but it's good to use them because of the efficiency and convenience they've provided. 

## hw3 把 todo list 這樣改寫，可能會有什麼問題？

網頁中某些沒改變的部分，不斷重新 render，沒什麼效率。