# plugins
一些插件,比如弹出框什么之类的

invitation这个插件是我自己写的一个移动端h5项目。UI参照 https://www.rexueqingchun.com/h5/preview/H5xN81Ps8Cqy 
目前遇到的瓶颈： 
多页滑动其实也能做，大不了给每页绑定滑动事件。但这显然不是一个好方法，如果页数多了，每一页都绑定一个 touchstart 和 touchend 这种操作不仅增加了冗余代码，而且太多的事件注册太消耗内存，不利于开发者后期维护。
但是应该怎么优化呢？往上面一层绑定吗？它们上面一层就是body了，即使给它们包裹一层父元素，但层级很多，假如用户点击到了一个层级很深的元素，它得一层一层往上冒泡，在冒泡过程中会不会被阻断？？？而且层级这么多往上冒泡也很耗时。。。

所以到底怎么优化是现在一个亟待突破的瓶颈。加油！
