## 什麼是 DOM？

Document Object Model 是網頁的 API，表現如樹狀圖般的網頁架構。
把網頁的元素（各個節點 node）轉為一個個的 object，來進行 JavaScript 的操作。

## 什麼是 Ajax？

Asynchronous JavaScript and XML 是非同步的網頁技術。
使用這個方法，讓網頁不用換頁就可以動態更新頁面，只需局部刷新，不用重載整個網頁。
（JavaScript 是使用的工具，XML 是資料交換的格式。）

## HTTP method 有哪幾個？有什麼不一樣？

最常見的是 GET 和 POST。
GET 在讀取資料時使用，把參數直接放在 URL 後面，例如 `?username=Amelie1815`。
POST 用在傳資料給 server 時，常見表單的形式，不像 GET 會把資訊放在網址，POST 可以用來傳送敏感資訊。
其他還有 PATCH、PUT、DELETE、OPTIONS、HEAD。

Method | Description
--- | ---
HEAD | Same as GET but returns only HTTP headers and no document body
PUT | Uploads a representation of the specified URI
DELETE | Deletes the specified resource
OPTIONS | Returns the HTTP methods that the server supports
CONNECT | Converts the request connection to a transparent TCP/IP tunnel


## GET 跟 POST 有哪些區別，可以試著舉幾個例子嗎？

GET | POST
--- | ---
可以用書籤記錄起來 | 不能用書籤紀錄
可以用 cache 儲存 | 不能用 cache 儲存
回上一頁再回來不會怎樣 | 回上一頁再回來會重新提交一次表單
資料有長度限制（URL 最長 2048 個字元） | 資料無長度限制
較不安全（資料直接放在 URL） | 較安全（資料不顯示在 URL，所以不會在瀏覽紀錄中）

## 什麼是 RESTful API？

Representational State Transfer 是一種設計 API 的風格，符合這種設計理念的 API 稱為 RESTful API。

* Client-Server：一個 request 搭配一個 response。
* Stateless：server side 是無狀態的，由 client side 負責保存狀態。
* Cache：傳送的資料可以在某處被暫存，以提升效率。
* Uniform Interface：client side 和 server side 用標準化的方式來交換資料，例如 HTTP 協定、JSON 的格式等規範。
* Layered System：使用 API 的人只要知道參數怎麼給就可以了，不需要知道內層的運作方式。

## JSON 是什麼？

JavaScript Object Notation 是在 JavaScript 中表示物件的一種 client side 和 server side 交換資料的格式。
JSON 中包含了 object 和 array，內容是純文字（用 '' 或 "" 框起），且不能寫註解。

## JSONP 是什麼？

因為同源政策 same-origin policy，我們只能拿到同網域底下的 response。
JSON with Padding 是 JSON 的一種使用模式，可以跨網域要求資料。
利用了 `<script>` 可以跨網域的特性（加上 src attribute 即可）。

## 要如何存取跨網域的 API？

可用 JSONP，缺點是參數永遠都只能用 GET 帶資料，不能用 POST。
另一個比較好的方法是 CORS（Cross-Origin Resource Sharing 跨來源資源共享），
Server 的 response header 中如果有 `Access-Control-Allow-Origin: *` 就可以接受任何 origin，把 response 回應給你。