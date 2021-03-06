c.js
====

c.js is a library that makes using the JavaScript console easier and more powerful. 

c.js is a JavaScript library. It is not a jQuery library and does not require jQuery. However, it is compatible with jQuery. 

The first advantage c.js gives you is that instead of needing to type "console.log('foo')" a thousand times, you can type "c('foo')" a thousand times. 

The second advantage c.js gives you is that it is able to output arrays and objects in a useful way.  

Usage
-----

In order to use c.js on your site, put a copy of the c.js file on your website and add a script tag to the page where you want to use it:

`<script src='/c.js' ></script>`

The c() function accepts up to three parameters:

`function c(value, label, inDisplay)`

`value` is the value you want to output to the JavaScript console.  

`label` is a label you may want to output before the JavaScript console.  If you are passing many values to the console, it may be helpful to label them. 

`inDisplay` is used to control how multi-level objects are collapsed and expanded. (This uses console.group() and console.groupCollapsed().) Six values are specified, and any other value will be treated as default:

`topexpanded  `: The top level object is expanded and everything below it is collapsed.

`topcollapsed `: The top level object is collapsed and everything below it is expanded.

`allcollapsed `: All levels are collapsed. 

`collapsed    `: All levels are collapsed. 

`allexpanded  `: All levels are expanded. 

`expanded     `: All levels are expanded. 

`other/blank  `: All levels are expanded.





