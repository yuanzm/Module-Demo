var util = (function() {
    /*
     * 数组去重
     * @param {Array} array: 需要去重的数组
     * @return {Array} res: 去重后的数组
     */
    unique = function(array) {
        var json = {};
        var res = [];
        for(var i = 0;i < array.length;i++) {
            if(!json[array[i]]) {
                res.push(array[i]);
                json[array[i]] = 1;
            }
        }
        return res;
    }

    /*
     * 选择排序
     * @param {Array} array: 需要进行排序的数组
     */
    function selectionSort(array) {
        if (Object.prototype.toString.call(array).slice(8, -1) === "Array") {
            var len = array.length, temp;
            for(var i = 0;i < len - 1;i++) {
                var min = i;
                for(var j = i + 1;j < len;j++) {
                    if (array[j] < array[min]) {
                        min = j;
                    }
                }
                if (min != i) {
                    temp = array[i];
                    array[i] = array[min];
                    array[min] = temp; 
                }
            }
            return array;       
        } else {
            return "array is not an Array";
        }
    }
    return {
        unique: unique,
        selectionSort: selectionSort
    }
})();
