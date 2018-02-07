## 請解釋後端與前端的差異。

  * 前端：使用者看得見的部分。
  * 後端：使用者看不見的部分。

## 假設我今天去 Google 首頁搜尋框打上：javascript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

  1. 瀏覽器向 Google 伺服器發出「搜尋」的 request。
  2. Google 伺服器使用網頁檢索器 Googlebot 搜尋資料庫（index of the web），找出含有關鍵字「javascript」的頁面。
  3. 用許多問題（來源、關聯性、關鍵字出現次數... 等等）仔細篩選，並算出網頁的分數。
  4. Google 伺服器將最好的結果依序列出來，response 給瀏覽器顯示在網頁上。 
  
[參考影片](https://youtu.be/BNHR6IQJGZs)
[參考資料](https://www.google.com/intl/zh-TW/insidesearch/howsearchworks/)

## 請列舉出 5 個 command line 指令並且說明功用

  * `$ cd` change directory 切換目錄
  * `$ ls` list 列出目前所在位置的檔案列表
  * `$ touch` 新增檔案或改變現有檔案最後修改時間
  * `$ pwd` print working directory 顯示目前所在目錄
  * `$ clear` 清空畫面