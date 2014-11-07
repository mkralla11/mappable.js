# mappable.js

A JQuery plugin that dynamically resizes image map areas based on the image size and their respective coordinates. 

Also sets data attributes on each area regarding their new offsetTop, offsetRight, offsetBottom, offsetLeft, width, and height.

## Usage

html:
```html
<img class="my-img" src='path/to/image.jpg' usemap='#my-map'>

<map name='my-map'>
  <area shape="rect" coords="288,26,404,54" />
  <area shape="rect" coords="452,30,516,56" />
  <area shape="rect" coords="510,78,654,108" />
</map>
```


javascript:

```javascript
$(".my-img").mappable();
```
...Doesn't get much easier than that. 


more javascript, getting coordinates of each area:
```javascript
$(".my-img").mappable();
$("map").find("area").each(function(){
  var area = $(this);
  console.log("top:" + area.data("offsetTop") + ", left:" + area.data("offsetLeft") + ", bottom:" + area.data("offsetBottom") + ", right:" + area.data("offsetRight") + ", width:" + area.data("width") + ", height:" + area.data("height") );
})

```



## Star

If you find this helpful, please star :)





The MIT License (MIT)

Copyright (c) 2014 Mike Khirallah

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
