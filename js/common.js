/**
 * Created by Administrator on 2016/12/28.
 */

function $(id) {
    return document.getElementById(id);
};

function getChild(element) {
    return element.children;
};
function  getParent(element) {
    return element.parentNode;
}
/**
 *获取下一个元素节点
 * @param element
 * @returns {nextElement}
 */
function  getNextElement (element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;
        while (next && 1 !== next.nodeType) {
            next = next.nextSibling;
        }
        return next;
    }
}

/**
 * 获取上一个元素节点
 * @param element
 * @returns {previousElement}
 */
function getPreviousElement(element) {
    if (element.previousElementSibling) {
        return element.previousElementSibling
    } else {
        var prev = element.previousSibling;
        while (prev && 1 !== prev.nodeType) {
            prev = prev.previousSibling;
        }
        return prev;
    }
}

/**
 *封装 获取当前元素的第一个子元素
 * @param element
 * @returns {FirstElementChild}
 */
function  getFirstElementChild(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var first = element.firstChild;
        while (first && 1 !== first.nodeType) {
            first = first.nextSibling;
        }
        return first;
    }
    //return element.children[0];
}

/**
 * 封装 获取当前元素的最后一个子元素
 * @param element
 * @returns {LastElement}
 */
function getLastElement(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var el = element.lastChild;
        while (el && 1 !== el.nodeType) {
            el = el.previousSibling;//上一个兄弟节点
        }
        return el;
    }
    //return element.children[element.children.length-1];
}

/**
 * 封装函数，得到文本element中的内容
 * @param element
 * @returns {*}
 */
function getinnrText(element) {
    if (typeof element.innerText === "string") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}

/**
 * 在element中设置内容content
 * @param element
 * @param content
 */
function  setinnerText(element, content) {
    if (typeof element.innerText === "string") {
        element.innerText = content;
    } else {
        element.textContent = content;
    }
}

/**
 * 获取透明度 setOpacity(box,0.5);
 * @param element
 * @param op
 */
function setOpacity(element, op) {
    //op 0-1  0-100  op = op*100
    if (typeof element.style.opacity == "string") {
        element.style.opacity = op;
    } else {
        element.style.filter = "alpha(opacity=" + (op * 100) + ")";
    }
}

/**
 * 替换样式属性类，旧的类在前，新的类在后
 * @param element
 * @param oldStr
 * @param newStr
 */
function  changPic(element, oldStr, newStr) {
    element.className = element.className.replace(oldStr, newStr);
}


//1，getComputedStyle()
//获取在元素的最终样式：getComputedStyle()
//该方法属于window对象，直接调用
//两个参数:第一个参数是DOM元素，第二个参数填写null，
//返回值:是一个对象（包含了当前元素的所有样式属性）
//    console.log(getComputedStyle(box,null).width);
//console.log(getStyle(box).height);
//2，currentStyle
//获取在元素的最终样式：currentStyle
//该属性属于DOM对象，直接“.”语法调用
//属性值：一个对象
//    console.log(box.currentStyle.width);

//通过currentStyle与getComputedStyle()兼容写法获取样式
//能获取但是不能修改内联外联样式，只能通过行内样式style属性去修改
/**
 * 获取 任意对象 的 任意属性
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];  //兼容性问题，大部分浏览器支持这种
    } else {
        return obj.currentStyle[attr];//IE6，7，8支持这种
    }
}


/**
 * 返回x到y之间的所有质数
 * @param x
 * @param y
 * @returns {x到y之间的所有质数}
 */
function getZhishu(x, y) {
    if (y < 2) {
        return null;
    }
    if (x < 2) {
        x = 2;
    }
    var arr = [];
    for (var i = x; i <= y; i++) {
        var flag = true;
        for (var j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            arr.push(i);
        }
    }
    return arr;
}


///**下面那个更好，更准确
// * 封装 通过类名获取元素对象的兼容方法
// * @param element
// * @param className
// * @returns {element.getElementsByClassName}
// */
//function getElementsByClassName(element, className) {
//    //原来就有
//    if (element.getElementsByClassName) {
//        return element.getElementsByClassName(className);
//    } else {
//        //首先找到element里面所有的标签 然后判断 有没有我们要的类名
//        //如果有就把当前标签 放到一个集合中 最后全都找完了 把集合返回
//        var filterArr = [];//这个数组用来放匹配的元素
//        var elements = element.getElementsByTagName("*");//通配符 表示所有标签
//        for (var i = 0; i < elements.length; i++) {
//            if (elements[i].className.indexOf(className) !== -1) {
//                //包含了我们要的类名 这个元素是我们要的
//                filterArr.push(elements[i]);
//            }
//        }
//        return filterArr;
//    }
//}

/**
 * 替换element的类名
 * @param element
 * @param oldStr
 * @param newStr
 */
function replaceClassName(element, oldStr, newStr) {
    var arr = element.className.split(" ")//将element的类名用空格符分开，再一一判断；
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === oldStr) {
            arr[i] = newStr;
        }
    }
    element.className = arr.join(" ");
}

/**
 * 获得父元素下面带有oldStr类名的子元素
 * @param element
 * @param oldStr
 * @returns {带有所有符合条件的子元素的数组集合}
 */
function getElementsByClassName(element, oldStr) {
    if (element.getElementsByClassName) {
        return element.getElementsByClassName(oldStr);
    } else {
        var fliter = [];//创建一个数组，用于存放带有oldstr的子元素
        var elements = element.getElementsByTagName("*");//遍历父元素下面的所有标签
        for (var i = 0; i < elements.length; i++) {
            var arr = elements[i].className.split(" ");//对于其中一个子元素，用空格符将里面所有的类名分隔开
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] === oldStr) {//如果条件成立，将对应的子元素放入数组中
                    fliter.push(elements[i]);
                    break;
                }
            }
        }
        return fliter;
    }
}


/**
 * 给window追加 onload事件 不会顶掉之前的函数
 * @param fn
 */
function addLoadEvent(fn) {
    var oldOnLoad = window.onload;
    //检查现在的window.onload是否绑定了事件
    //console.log(oldOnLoad);
    if (typeof oldOnLoad === "function") {//说明之前绑定了事件
        window.onload = function () {
            oldOnLoad();//之前的要执行
            fn();//传入的新的要绑定的将来也要执行
        };
    } else {
        window.onload = fn;
        /*window.onload = function () {
         fn();
         };*/
    }
}

/**
 *匀速移动动画函数封装
 * @param obj移动对象
 * @param target移动距离
 */
function averageSpeedAnimate(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = 15 ;
        step = leader < target ? step : -step;
        if (Math.abs(target - leader) >= Math.abs(step)) {
            leader = leader + step;
            obj.style.left = leader + "px";
        } else {
            obj.style.left = target + "px";
            clearInterval(obj.timer);
        }
    }, 15)
}

/**
 * 设置window的scrollTop和scrollLeft属性，需要调用scroll().top和scroll().left
 * @returns {{top: (Number|number), left: (Number|number)}}
 */
function scroll() {//
    return  {
        top :window.pageYOffset || document.documentElement.scrollTop ||
        document.body.scrollTop ||0 ,
        left:window.pageXOffset || document.documentElement.scrollLeft ||
        document.body.scrollLeft ||0
    };
}


/**
 * 缓动动画封装函数
 * @param obj
 * @param target
 */
function slowMoveAnimate(obj,target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var leader = obj.offsetLeft;
        var step = (target - leader)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        leader = leader + step ;
        obj.style.left = leader + "px";
        if(target===leader) {
            clearInterval(obj.timer);
        }
    },15)
}


/**
 * 把 任意对象 的 任意数值属性 改变为 任意的目标值
 * @param obj
 * @param json
 * @param fn
 */
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var k in json) {
            if (k === "opacity") {//opacity要特殊处理
                //opacity没有单位 参与运算自动转换成数值 所以不用parsetInt
                //取值范围 0-1 0.1 0.33 33 为了让以前的计算公式生效 要扩大100倍
                var leader = getStyle(obj, k) * 100;
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader / 100;//opacity没有单位
            } else if (k === "zIndex") {
                obj.style.zIndex = json[k];//层级不需要渐变 直接设置即可
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                leader = leader + step;
                obj.style[k] = leader + "px";
            }
            if (leader != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
    }, 15);
}
//全部属性都到达目标值才能清空
/**
 * 获取任意对象的任意属性（兼容）
 * @param obj
 * @param attr
 * @returns {*}
 */
function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj, null)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}


/**
 *获取可视窗口的宽度和高度，
 * 窗体大小发生改变的事件 onresize
 * @returns 可视窗口的宽度width和高度height
 */
function client() {
    return {
        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    };
}



/**封装  响应式布局函数
 *   页面发生变化时，显示对应的文字和颜色
 */
function response (){
    if(client().width>960){
        document.body.style.backgroundColor = "red";
        document.body.innerHTML = "computer";
    } else if(client().width>640){
        document.body.style.backgroundColor = "green";
        document.body.innerHTML = "teblet";
    } else {
        document.body.style.backgroundColor = "yellow";
        document.body.innerHTML = "moblie";
    }
}


/**
 * 封装一个对象，里面包含获取事件对象，页面位置，清除冒泡，获取事件目标的兼容性方法
 * @type {{getEvent: Function, getPageX: Function, getPageY: Function, stopPropagation: Function, getTarget: Function}}
 */
var eventUtil = {
    getEvent: function (event) {
        return event || window.event;
    },
    getPageX: function (event) {
        return event.pageX || event.clientX + document.documentElement.scrollLeft;
    },
    getPageY: function (event) {
        return event.pageY || event.clientY + document.documentElement.scrollTop;
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    }
};



//清除选中的内容
//window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
//正常浏览器支持：window.getSelection()
//IE678以下支持：document.selection


//获取选中文本的代码
// window.getSelection ? window.getSelection().toString() : document.selection.createRange().text;



//    @预定义类和转义符
//          .	[^\n\r]	除了换行和回车之外的任意字符
//    \d	[0-9]		数字字符digit
//    \D	[^0-9]	非数字字符
//    \w	[a-zA-Z0-9_]	单词字符(所有的字母数字和_) word
//    \W	[^a-zA-Z0-9_]	非单词字符
//    \s	[\f\r\n\t\v]	不可见字符 space
//    \S	[^\f\r\n\t\v]	可见字符
//    转义符
//    \f 表示换页 form feed
//    \t 表示水平制表符 table
//    \v 表示垂直制表符 vertical table

//\t	/\t/	制表符
//
//\n	/\n/	换行符
//
//\r	/\r/	回车符
//
//\f	/\f/	换页符
//
//\v	/\v/	垂直制表符


/**
 * 去除 任意字符串的 两端的空白符
 * @param str
 * @returns {string|void|XML}
 */
function trim(str){
    return str.replace(/^\s+|\s+$/g,"");
}





















