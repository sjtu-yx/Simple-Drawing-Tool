# Simple-Drawing-Tool
This a simple drawing app.
# performance optimization
(1)every img element has width and height attributes, avoid to brower rendering causes layout changes.
(2)the animation is made by transform in order to keep brower overhead to a minimun.
(3)change "paint only" attribute by js and css so as to keep brower skip layout, perform drawing and composition.
(4)all the img attributes use lazy load for increasing loading speed.
(5)use the throttle function, avoiding repeated execution.
