## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

內部連結的區塊
```<nav>
  Define a section with navigation links.
</nav>
```
圖片
```
<img src=“圖片的 URL” alt=“圖片的文字描述”/>
```
影片
```
<video src=“影片的 URL” width=”320” height=“240” controls>
  Video not supported（若影片無法圖取時會顯示這行）
</video>
```

## 請問什麼是盒模型（box modal）

All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout. 所有的 HTML 元素都可以視為矩形的盒子，我們運用這樣的概念來設計和排版。

It consists of: margins, borders, padding, and the actual content. 盒子包含這四個元素：
* Content - The content of the box, where text and images appear
* Padding - Clears an area around the content. The padding is transparent
* Border - A border that goes around the padding and content
* Margin - Clears an area outside the border. The margin is transparent

示意圖：
![alt text](https://nulab-inc.com/app/uploads/2016/03/4.png)

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

### display: inline
The element is turned into an inline element: it behaves like simple text.
Any height and width applied will have no effect.

兩個 display: inline 的元素連在一起會在同一行，不會換行。
可以設定 margin-left、margin-right、padding-left、padding-right。
不能設定 margin-top、margin-bottom、padding-top、padding-bottom、width、height、background-image。

### display: block
The element is turned into a block element: it starts on a new line, and takes up the whole width.

任何元素只要碰到 display: block 元素就會換行。
display: block 元素的寬度預設會撐到最大。
可以設定 margin、padding、width、height、background-image。

### display: inline-block
The element shares properties of both an inline and a block element:
* inline because the element behaves like simple text, and inserts itself in a block of text
* Block because you can apply height and widthvalues

外面是 inline，裡面是 block。
碰到 display: inline-block 元素不會換行，但可以設定 padding-top、padding-bottom、width、height、 background-image。

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

The position property specifies the type of positioning method used for an element.
There are five different position values:
* static
* relative
* fixed
* absolute
* sticky

### position: static
The element will remain in the **natural flow** of the page.
It is **not** affected by the top, bottom, left, and right properties.

### position: relative
The element will remain in the **natural flow** of the page.
It also makes the element positioned: it will act as an anchor point for the absolutely positioned element.

Also, it will react to the following properties:
* top
* bottom
* left
* right
* z-index

### position: absolute
The element will **not** remain in the natural flow of the page. It will position itself according to the **closest positioned ancestor**.

Also, it will react to the following properties:
* top
* bottom
* left
* right
* z-index

If an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

### position: fixed
The element will **not** remain in the natural flow of the page. 
It will position itself according to the viewport, which means it always stays in the same place even if the page is scrolled. 

Also, it will react to the following properties:
* top
* bottom
* left
* right
* z-index
