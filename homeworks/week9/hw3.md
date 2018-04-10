## 在 JavaScript 裡面，一個很重要的概念就是 Event Loop，是 JavaScript 底層在執行程式碼時的運作方式。請你說明以下程式碼會輸出什麼，以及盡可能詳細的解釋原因。

``` js
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```

#### 答：輸出在 console 的順序為 1, 3, 5, 2, 4。

1. 把 `main()` 丟入 call stack。
2. 把 `console.log(1)` 丟入 call stack。
3. 執行 `console.log(1)`。
4. 把 `console.log(1)` 從 call stack 中清掉。
5. 把 `setTimeout(() => { console.log(2) }, 0)` 丟入 call stack。
6. 把 `setTimeout(() => { console.log(2) }, 0)` 移到 web API 處理區，0 秒後把 callback 移到 callback queue 中等待。
7. 把 `setTimeout(() => { console.log(2) }, 0)` 從 call stack 中清掉。
8. 把 `console.log(3)` 丟入 call stack。
9. 執行 `console.log(3)`。
10. 把 `console.log(3)` 從 call stack 中清掉。
11. 把 `setTimeout(() => { console.log(4) }, 0)` 丟入 call stack。
12. 把 `setTimeout(() => { console.log(4) }, 0)` 移到 web API 處理區，0 秒後把 callback 移到 callback queue 中等待，排在`setTimeout(() => { console.log(2) }, 0)` 的 callback 後面。
13. 把 `setTimeout(() => { console.log(4) }, 0)` 從 call stack 中清掉。
14. 把 `console.log(5)` 丟入 call stack。
15. 執行 `console.log(5)`。
16. 把 `console.log(5)` 從 call stack 中清掉。
17. 把 `main()` 從 call stack 中清掉。
18. Call stack 已經清空了，所以 event loop 把 callback queue 中的第一個 callback 丟入 call stack。
19. 把 `console.log(2)` 丟入 call stack。
20. 執行 `console.log(2)`。
21. 把 `console.log(2)` 從 call stack 中清掉。
22. 把第一個 callback 清掉。
23. 把第二個 callback 丟入 call stack。
24. 把 `console.log(4)` 丟入 call stack。
25. 執行 `console.log(4)`。
26. 把 `console.log(4)` 從 call stack 中清掉。
27. 把第二個 callback 清掉。
