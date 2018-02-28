資料庫名稱：comments

| 欄位名稱 | 欄位型態 | 說明 |
|----------|----------|------|
| id | integer | 留言編號 (A_I) |
| nickname ｜ text | 留言者暱稱 |
| message_text | text | 留言內容 |
| time | datetime | 留言時間 |
| parent_id | integer | 子留言所屬的父留言編號 [參考4:10](https://youtu.be/Y-khHY5hFlA)|