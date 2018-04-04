## CSS 預處理器是什麼？我們可以不用它嗎？

我們可以透過 CSS 預處理器的語法，進行樣式的設計，再由它來轉換成 CSS 檔。
方便之處是可以使用程式化的方式來寫 CSS，例如巢狀結構、加入變數、數學運算等等，讓程式變簡潔、可讀性更好。
可以不使用，但寫純粹的 CSS 無法產生有組織的結構，程式碼也不易維護。

常見的 CSS preprocessor 有：
* SASS
* LESS
* Stylus
* PostCSS

## 請舉出任何一個跟 HTTP Cache 有關的 Header 並說明其作用。

* `Expires`：讓瀏覽器檢查現在時間是否超過這個 expires 的時間，若有的話就重新發 request 向 server 抓資料。
* `Cache-Control: max-age=<seconds>`：設定 cache 過期的時間（以秒計算）。

* `Last-Modified`、`If-Modified-Since`： server side 和 client side 搭配使用，在快取過期後檢查資料最後的編輯時間。
* `Etag`、`If-None-Match`：server side 在 response 時會發出一個 `Etag`，cache 過期後瀏覽器用 `If-None-Match` 去問 server 資料是否符合這個 `Etag`，若不符合就重新抓資料。

* `Cache-Control: no-cache`：每次向瀏覽器問有沒有新資料，沒有的話會收到 status code `304`，便讀取舊的 cache。
* `Cache-Control: no-store`：不要任何 cache，每次都會跟 server 要資料（很耗流量）。

## Stack 跟 Queue 的差別是什麼？

他們都有 flexable size（可添加或刪減裡面的元素）。
都是 linear 的資料結構（linear 結構另有 array 和 linked list）。

差別：

* Stack：堆疊。像是一個桶子，把東西堆到最上面，或是把東西從最上面拿走（ last in first out 後進先出），有兩種操作方式 push（將元素丟到 stack 內）和 pop（取出資料）。

* Queue：佇列。像是一個隊伍，把東西放到最後面，或是從最前面拿走（first in first out 先進先出），一樣有 push 和 pop 可以操作。
