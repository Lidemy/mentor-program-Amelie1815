## 什麼是 MVC？

MVC stands for model-view-controller. It's a software architectual design pattern.
MVC is definitely one of the most frently used design patterns. Most of the popular web framworks use at least some parts of MVC. The general purpose of goal is to separate functionality, logic and the interface in an application. This promotes organized programming and it allows multiple developers to work on the same project with these.

Model is responsible for getting and manipulating the data. It's basically the brain of the application. Usually it interacts with database (SELECT, INCERT, UPDATE, DELETE). The model also communicates with controller and sometimes it can update the view (depends on framework).

View is the user interface of the application. It usually consists of HTML and CSS along with dynamic values from the controller with template engines.

Controller acts as a middleman between the model and the view. It receives input and processes requests. It gets data from the model and passes data to the view.

Popular framworks that use MVC concepts: Ruby on Rails, Express.js, Angular.js, Laravel...

## 什麼是 ORM？

Object-relational mapping is a technique for converting data between incompatible type systems using object-oriented programming languages.

其理念是將資料庫的內容映射為物件，讓程式開發人員可以用操作物件的方式對資料庫進行操作，而不直接使用SQL語法對資料庫進行操作。讓程式設計師不用管底層的資料庫系統是哪種廠牌或哪個版本的資料庫(如：SQL Server、Oracle、DB2、MySQL、Sybase、DBMaker…)，僅須用同一套語法撰寫存取資料庫的邏輯。當底層資料庫的實作品變更時，由於程式設計師並不直接對資料庫進行操作，因此程式內容幾乎不用修改，也就是降低了物件導向程式與資料庫之間的耦合關係。