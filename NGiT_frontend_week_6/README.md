Explain what box-sizing: border-box does and why it is useful

`box-sizing: border-box` changes how the browser calculates the total width and height of an element in CSS.

By default, when you set `width: 200px`, the 200px applies only to the **content area**. Any padding and borders are added to that width, which makes the element larger than the size you specified. From 200px to 260px.

When `box-sizing: border-box` is used, the **padding and border are included within the declared width and height**. The browser automatically reduces the content area so the overall element size remains exactly the width you set. This makes layout and spacing easier to control. Retains 200px.

*Why it is useful*
It makes it easier to build flexible layouts (like cards) because elements stay within their defined widths.
The width and height set are the element’s final size, elements don’t become larger.