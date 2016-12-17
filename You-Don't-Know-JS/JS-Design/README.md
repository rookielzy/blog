# JS Design Pattern

## Ch 01

```javascript
    // 函数添加方法
    // 1
    Function.prototype.checkEmail = function() {
        // code
    };
    // 这种方法会污染原生对象 Function 别人创建的函数也会被污染

    // 2
    Function.prototype.addMethod = function(name, fn) {
        this[name] = fn;
        return this; // 这样就可以进行链式添加
    }

    // Summary
    // 同理其他对象
```


## Ch 02

```javascript
// 构造函数继承
function SuperClass(id) {
    this.books = ['a', 'b', 'c'];
    this.id = id;
}
SuperClass.prototype.showBooks = function() {
    alert(this.books);
}

function SubClass(id) {
    SuperClass.call(this, id);
}

var test1 = new SuperClass(10);
var test2 = new SubClass(11);
test2.showBooks();

function SuperClass(id) {
    this.books = ['a', 'b', 'c'];
    this.id = id;
}
SuperClass.prototype.showBooks = function() {
    alert(this.books);
}

function SubClass(id) {
    // 构造函数继承
    SuperClass.call(this, id);
}
// 类式继承
SubClass.prototype = new SuperClass();
var test1 = new SuperClass(10);
var test2 = new SubClass(11);
test2.showBooks();

// 原型式继承
function inheritObject(o) {
    function F(){}
    F.prototype = o;
    return new F();
}

// 寄生式继承
var book = {
    name: 'js book',
    alikeBook: ['a', 'b', 'c']
};
function createBook(obj) {
    var o = new inheritObject(obj);
    o.getName = function() {
        alert(this.name);
    };
    return o;
}

var test1 = createBook(book);
test1.name = 'test1';
test1.getName();
test1.alikeBook.push('d');
alert(test1.alikeBook);
alert(book.alikeBook);

// 寄生组合式继承
function inheritPrototype(SubClass, SuperClass) {
    var p = inheritObject(SuperClass.prototype);
    alert(p.constructor);
    console.log(p);
    p.constructor = SubClass;
    alert(p.constructor);    
    SubClass.prototype = p;
}
function SuperClass(name) {
    this.name = name;
    this.colors = ['a', 'b', 'c'];
}

SuperClass.prototype.getName = function() {
    alert(this.name);
}

function SubClass(name) {
    SuperClass.call(this, name);
    console.log(this);
}
inheritPrototype(SubClass, SuperClass);
var test1 = new SubClass('test1');
test1.getName();
test1.colors.push('d');
alert(test1.colors);
alert(SuperClass.prototype);

```

```javascript
    var extend = function(target, source) {
        for (var property in source) {
            target[property] = source[property];
        }
        return target;
    }

    var mix = function() {
        var i = 1,
        len = arguments.length,
        target = arguments[0],
        arg;
        for (; i < len; i++) {
            arg = arguments[i];
            for (var property in arg) {
                target[property] = arg[property];
            }
        }
        return target;
    }
```

## Ch03 

> 适用于创建较少的类

```javascript
// 定义基类
var Basketball = function() {

}
Basketball.prototype = {

}
var Football = function() {

}
Football.prototype = {

}
// something like above

// 工厂函数
var SportFactory = function(name) {
    switch(name) {
        case 'NBA':
            return new Basketball();
        case 'WorldCup':
            return new Football();
    }
}
// 以上使用实例化对象创建对象，如果这些类继承同一父类，那么他们的父类原型上的方法是可以共用的

// 以下通过创建一个新对象，然后包装增强其属性和功能来实现。由于是使用寄生方式创建的对象都是一个新个体，他们父类的方法无法共用。
function createPop(type, text) {
    // 创建一个对象，并对对象拓展属性和方法
    // same part
    var o = new Object();
    o.content = text;
    o.show = function() {
        
    };
    if (type == 'alert') {
        // different part
    }
    if (type == 'confirm') {
        // different part
    }
}
```


## Ch04 

> 适用于创建较多的类

```javascript
// 安全模式创建的工厂类
var Factory = function(type, content) {
    if (this instanceof Factory) {
        var s = new this[type](content);
        return s;
    } else {
        return new Factory(type, content);
    }
}
// 工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
    Java: function(content) {
        alert(content);
    },
    UI: function(content) {
        alert(content);
    }
    // more
}

Factory('Java', 'javatest');

var BtnFactory = function(type, content) {
    if (this instanceof BtnFactory) {
        var s = new this[type](content);
        return s;
    } else {
        return new BtnFactory(type, content);
    }
}

BtnFactory.prototype = {
    AlertBtn: function(content) {
        this.content = content;
        (function(content) {
            var button = document.createElement('button');
            button.type = 'button';
            button.style.width = '100px';
            button.style.height = '100px';        
            button.style.border = '1px solid red';
            button.innerText = content;
            document.getElementsByTagName('body')[0].appendChild(button);
        }(content));
    }
}
console.log(BtnFactory('AlertBtn', 'alert'));

```