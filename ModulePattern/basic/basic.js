/*
 * 定义一个名字为`MODULE`的模块
 */
var MODULE = (function () {
    var my = {},
        privateVariable = 1;    // 模块的私有变量
    // 模块的私有函数
    function privateMethod() {
        // ...
    }
    // 模块的共有变量和函数
    my.moduleProperty = 1;
    my.moduleMethod = function () {
        // ...
    };

    return my;
}());
